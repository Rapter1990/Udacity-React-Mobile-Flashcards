import { createStore } from "redux";
import reducer from "./reducer";
import middleware from "./middleware";

export default store = createStore(reducer, middleware);