import { createStore } from "redux";
import { reducer, rootReducer } from "./Reducer";


export const store = createStore(rootReducer);
// console.log(store);