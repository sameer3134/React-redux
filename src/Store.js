import { createStore } from "redux";
import rootreducers from "./Reducers/Index";


const store = createStore(rootreducers)

export default store