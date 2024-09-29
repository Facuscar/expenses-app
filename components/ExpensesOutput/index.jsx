import { StyleSheet, View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  const DUMMY_DATA = [
    { id: "e1", description: "Groceries", amount: 75.99, date: new Date(2024, 8, 15) },
    { id: "e2", description: "Internet Bill", amount: 45.50, date: new Date(2024, 8, 10) },
    { id: "e3", description: "Gym Membership", amount: 25.00, date: new Date(2024, 8, 5) },
    { id: "e4", description: "Electricity Bill", amount: 110.20, date: new Date(2024, 7, 30) },
    { id: "e5", description: "Dining Out", amount: 60.00, date: new Date(2024, 8, 18) },
  ];

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_DATA} period={expensesPeriod} />
      <ExpensesList expenses={DUMMY_DATA} />
    </View>
  )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  }
})
