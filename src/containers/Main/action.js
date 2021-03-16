import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  addExpense: ["payload"],
  deleteExpense: ["payload"],
  getBudget: null,
  getExpenses: null,
});

export const MainTypes = Types;
export default Creators;
