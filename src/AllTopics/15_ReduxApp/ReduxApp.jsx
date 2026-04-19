import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Counter from "./Counter";

//! STEP 2 : create a slice/feature and export the actions
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    incre: (prevState, action) => {
        console.log(action);
        
      return prevState + 1;
    },
    decre: (prevState, action) => {
      return prevState - 1;
    },
    reset: (prevState, action) => {
      return (prevState = 0);
    },
  },
});
export const { incre, decre, reset } = counterSlice.actions;

//! STEP 1 : create a store
const myStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

const ReduxApp = () => {
  return (
    <Provider store={myStore}>
      <Counter />
    </Provider>
  );
};

export default ReduxApp;
