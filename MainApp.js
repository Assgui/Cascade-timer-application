import React from 'react';
import { registerRootComponent } from 'expo';
import  App from './App';
import { StoreProvider } from 'easy-peasy';
import model from './store/store';
import { useStoreState, createStore, action, computed, thunk, persist,useStoreRehydrated } from 'easy-peasy';


const store = createStore(persist(model));

function WaitForStateRehydration({ children }) {
  const isRehydrated = useStoreRehydrated();
  return isRehydrated ? children : null;
}
const MainApp = () => {
  return (
    <StoreProvider store={store}>
      <WaitForStateRehydration>
      <App/>
      </WaitForStateRehydration>
    </StoreProvider>
  );
};

export default registerRootComponent(MainApp);