import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import {reducer as formReducer} from "redux-form";
import registerReducer from "./registerReducer";

export default combineReducers({
    form: formReducer,
    registration: registerReducer,
    authentication: loginReducer,
});