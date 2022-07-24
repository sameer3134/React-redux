import changeTheNumber from "./Updown";
import changeNumber from "./Downup";

import { combineReducers } from "redux";

const rootreducers = combineReducers(
    {
        changeTheNumber,
        changeNumber
    }
);

export default rootreducers;