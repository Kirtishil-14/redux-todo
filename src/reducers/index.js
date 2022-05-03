import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import changeNum from "./addSub";
import showName from "./showName";

export default combineReducers({
  todos,
  visibilityFilter,
  changeNum,
  showName,
});
