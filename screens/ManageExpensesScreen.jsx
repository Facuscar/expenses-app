import { useLayoutEffect } from "react";
import { Text } from "react-native";

const ManageExpenses = ({ route, navigation }) => {
  const expenseId = route.params?.expenseId;

  const isEditing = !!expenseId;

  
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, []);


  return (
    <Text>
      ManageExpenses
    </Text>
  )
}

export default ManageExpenses;