import { StyleSheet, Text, View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const ExpensesOutput = ({ expenses, expensesPeriod, fallbackText }) => {
  const noExpenses = expenses.length === 0 

  return (
    <View style={styles.container}>
      {noExpenses ? 
      <Text style={styles.infoText}>{fallbackText}</Text> 
      : (
        <>
          <ExpensesSummary expenses={expenses} period={expensesPeriod} />
          <ExpensesList expenses={expenses} />
        </>
      )}

    </View>
  )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  }
})
