import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpensesContext } from "../context/ExpensesProvider";

const AllExpensesScreen = () => {
  const expensesContext = useContext(ExpensesContext)
  return (<ExpensesOutput expensesPeriod={"All time"} expenses={expensesContext.expenses}/>)
}

export default AllExpensesScreen;