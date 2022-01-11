import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import {reducer as formReducer} from "redux-form";
import registerReducer from "./registerReducer";
import postReducer from "./postReducer";

export default combineReducers({
    form: formReducer,
    registration: registerReducer,
    authentication: loginReducer,
    posts: postReducer
});