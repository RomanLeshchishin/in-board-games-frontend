import axios from 'axios';
import { getToken, saveToken } from '@/localStorage/user';

let isRefreshing = false;
let subscribers: ((token: string) => void)[] = [];

function onTokenRefreshed(token: string) {
  subscribers.forEach(callback => callback(token)); //всем запросам передаётся новый токен
  subscribers = [];
}

function addSubscriber(callback: (token: string) => void) {
  subscribers.push(callback); //запросы в ожидании
}

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  withCredentials: true,
});

//токен добавляется в каждый исходящий запрос
api.interceptors.request.use(config => {
  if (typeof window !== 'undefined') {
    const token = getToken();

    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
  }
  return config;
});

//обработка ошибки 401 и обновление токена с помощью refresh
api.interceptors.response.use(
  response => response, //успешный ответ
  async error => {
    //401
    const originalRequest = error.config; //исходная конфигурация запроса
    if (error.response.status === 401 && !isRefreshing) {
      isRefreshing = true;
      try {
        const response = await axios.post('/auth/refresh', {}, { withCredentials: true });
        const newToken = response.data.accessToken;
        saveToken(newToken);
        api.defaults.headers.common['Authorization'] = `Bearer ${newToken}`; //токен обновляется глобально для всех следующих запросов
        onTokenRefreshed(newToken);
        return api(originalRequest); //повторный запрос на тот же адрес
      } catch (err) {
        // очистить данные пользователя и перенаправить на страницу входа
        window.location.href = '/login';
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }
    return new Promise(resolve => {
      addSubscriber((token: string) => {
        //колбэк
        originalRequest.headers['Authorization'] = `Bearer ${token}`; // токен для текущего запроса, чтобы он сразу повторился с актуальным токеном
        resolve(api(originalRequest)); //как только получен новый токен — вызывается resolve(), чтобы продолжить цепочку .then() или await у тех запросов, которые ждали результата.
        // Если не вызвать resolve, то все "ждущие" запросы просто зависнут.
      });
    });
  },
);
