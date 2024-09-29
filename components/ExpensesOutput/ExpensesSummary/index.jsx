import { Text, View } from "react-native";

const ExpensesSummary = ({ expenses, period }) => {
  const expensesSum = expenses.reduce((acc, expenses) => {
    return acc + expenses.amount
  }, 0);
  
  return (
    <View>
      <Text>{period}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  )
}

export default ExpensesSummary;