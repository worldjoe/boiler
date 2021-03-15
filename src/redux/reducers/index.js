import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import documents from "./documents";

export default combineReducers({ documents, visibilityFilter });