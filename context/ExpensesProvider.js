import { createContext, useReducer } from "react"

const DUMMY_DATA = [
  { id: "e1", description: "Groceries", amount: 75.99, date: new Date(2024, 8, 15) },
  { id: "e2", description: "Internet Bill", amount: 45.50, date: new Date(2024, 8, 10) },
  { id: "e3", description: "Gym Membership", amount: 25.00, date: new Date(2024, 8, 5) },
  { id: "e4", description: "Electricity Bill", amount: 110.20, date: new Date(2024, 7, 30) },
  { id: "e5", description: "Dining Out", amount: 60.00, date: new Date(2024, 8, 18) },
];

const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id }, ...state]
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.expenseData};
      const updatedExpenses = [...state];
    updatedExpenses[updatableExpenseIndex] = updatedItem;

    return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_DATA);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD" , payload: expenseData});
  }

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  }

  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id, expenseData } })
  };

  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider;