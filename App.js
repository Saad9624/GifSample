import React from 'react'
import {
  View,
  Text
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux' ;
import ReduxThunk from 'redux-thunk' ;
import reducers from './src/container/reducers';
import Screens from './src/screens' ;

const store = createStore(reducers , {} , applyMiddleware(ReduxThunk)) ;


const App = () =>{

  return(
    <Provider store={store}>
     <Screens/>
    </Provider>
   
  )
}

export default App ;