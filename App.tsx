import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './app/config/routes';
import { Provider } from 'react-redux';
import store from './app/config/store';
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
