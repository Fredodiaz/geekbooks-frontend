// Native Imports
import React from 'react';

// Navigation
import GeekBooksNavigation from './src/components/navigation/GeekBooksNavigation'

// Store
import { Provider } from 'react-redux'
import store from './src/store'

export default function App() {
  return (
    <Provider store={store}>
      <GeekBooksNavigation />
    </Provider>
  );
}