import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";

const DUMMY_DATA = [
  { id: "e1", description: "Groceries", amount: 75.99, date: new Date(2024, 8, 15) },
  { id: "e2", description: "Internet Bill", amount: 45.50, date: new Date(2024, 8, 10) },
  { id: "e3", description: "Gym Membership", amount: 25.00, date: new Date(2024, 8, 5) },
  { id: "e4", description: "Electricity Bill", amount: 110.20, date: new Date(2024, 7, 30) },
  { id: "e5", description: "Dining Out", amount: 60.00, date: new Date(2024, 8, 18) },
];

const RecentExpenses = () => {
  return <ExpensesOutput expensesPeriod={"Last 7 days"} expenses={DUMMY_DATA} />
}

export default RecentExpenses;