'use client';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  // useEffect(() => {
  //   const user = getUser();
  //   const museum = getMuseum();
  //   if (user || museum) {
  //     if (user) {
  //       store.dispatch(loginUser(user));
  //     } else if (museum) {
  //       store.dispatch(loginMuseum(museum));
  //     }
  //   } else {
  //     store.dispatch(dropLoadingUser());
  //     store.dispatch(dropLoadingMuseum());
  //   }
  // }, []);
  return <Provider store={store}>{children}</Provider>;
}
