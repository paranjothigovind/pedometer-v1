
import { combineReducers } from 'redux';
const INITIAL_STATE = {
    sensor_data: 0
};

const dataReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_SENSOR_DATA":
        return{
            ...state,
            sensor_data: payload
        }
    default:
      return state;
  }
};

export default combineReducers({
    data: dataReducer
  });
