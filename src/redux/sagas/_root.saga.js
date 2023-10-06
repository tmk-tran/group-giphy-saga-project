import { all } from "redux-saga/effects";
import categorySaga from "./category.saga";

export default function* () {
  yield all([categorySaga()]);
}
