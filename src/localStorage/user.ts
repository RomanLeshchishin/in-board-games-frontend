const ACCESS_TOKEN = 'user-access';

export const getToken = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};

export const saveToken = (accessToken: string) => {
  localStorage.setItem(ACCESS_TOKEN, accessToken);
};

export const deleteToken = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};
