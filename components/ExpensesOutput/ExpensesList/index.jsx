import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

const renderExpenseItem = (itemData) => {
  return <ExpenseItem description={itemData.item.description} date={itemData.item.date} amount={itemData.item.amount} />
}

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList renderItem={renderExpenseItem} data={expenses} keyExtractor={(item) => item.description} />
  )
}

export default ExpensesList;