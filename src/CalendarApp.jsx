import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';
import { Provider } from 'react-redux';

import { ChakraProvider } from '@chakra-ui/react';

import { store } from './store';

export const CalendarApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider>
          <AppRouter />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  )
}
