import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";

const RecentExpenses = () => {
  return <ExpensesOutput expensesPeriod={"Last 7 days"} expenses={DUMMY_DATA} />
}

export default RecentExpenses;