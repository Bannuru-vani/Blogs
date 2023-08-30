// import { combineReducers } from "redux";
// import { blogReducer } from "./blogReducer";

// export default combineReducers({
//   blogReducer,
// });
import { combineReducers } from "redux";
import { blogReducer, individualblogReducer } from "./blogReducer";

const reducers = combineReducers({
  // tablereducers,
  blogReducer,
  individualblogReducer,
});
export default reducers;
