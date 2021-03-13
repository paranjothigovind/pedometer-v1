/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Alert } from "react-native";
import { createStore } from 'redux';
import Pedometer from './src/Pedometer';
import dataReducer from './store/reducers';
import axios from 'axios';


const App = () => {

  const store = createStore(dataReducer);

  useEffect(()=> {
    TriggerSteps = async () => {
      try{
        const res = axios.get('http://localhost:8000/api/start/steps');
        console.log(res)
        Alert.alert(
          'Walking Starts',
          'Go straight',
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "Go", onPress: () => console.log("OK Pressed") }
          ]
        )
        
      }
      catch(err){
        console.log(err);
      }
    }
    TriggerSteps();
  },[])

  return (
    <Provider store={store}>
          <Pedometer />
    </Provider>
  );
};



export default App;
