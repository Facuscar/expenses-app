import { FlatList, Text } from "react-native";

const renderExpense = (itemData) => {
  return <Text>{itemData.item.description}</Text>
}

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList renderItem={renderExpense} data={expenses} keyExtractor={(item) => item.description} />
  )
}

export default ExpensesList;