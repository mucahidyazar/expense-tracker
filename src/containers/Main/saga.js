import { delay, put, select, takeEvery } from "redux-saga/effects";
import { MainTypes } from "./action";
import { makeSelectBudget, makeSelectTotalExpenses } from "./selectors";

export function* addExpenseSagaWarcher() {
  console.log("object");
  yield takeEvery(MainTypes.ADD_EXPENSE, addExpenseSaga);
}

export function* addExpenseSaga(expense) {
  const totalExpenses = yield select(makeSelectTotalExpenses);
  const budget = yield select(makeSelectBudget);
  const remaining = budget - totalExpenses;

  if (remaining < expense.payload.cost) {
    alert("You cant buy anymore!");
    return;
  }
}

export function* currentUserSaga() {
  while (true) {
    yield delay(1000);
    console.log("User saga loop");
  }
}
