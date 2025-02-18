import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpensesContext } from "../context/ExpensesProvider";
import { getDateMinusDays } from "../utils/date";

const RecentExpenses = () => {
  const expensesContext = useContext(ExpensesContext);
  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  })

  return <ExpensesOutput expensesPeriod={"Last 7 days"} expenses={recentExpenses} fallbackText={"There are no expenses in the last 7 days"} />
}

export default RecentExpenses;