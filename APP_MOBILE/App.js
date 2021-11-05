import React, {useEffect} from 'react';
import { NativeBaseProvider } from 'native-base';
import DrawerNavigation from './navigation/DrawerNavigation';
import { Provider } from 'react-redux';
import store from './redux/store';


const config = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient
  }
}

const  App = () => {

  return (
    <Provider store={store}>
      <NativeBaseProvider config={config}>
          <DrawerNavigation />
      </NativeBaseProvider>
    </Provider>
  );
}



export default App;