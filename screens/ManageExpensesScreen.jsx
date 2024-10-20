import { useLayoutEffect, useContext } from "react";
import { ExpensesContext } from "../context/ExpensesProvider";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/IconButton"
import { GlobalStyles } from "../constants/styles";
import ExpenseForm from "../components/ExpenseForm";

const ManageExpenses = ({ route, navigation }) => {
  const expensesContext = useContext(ExpensesContext)
  const expenseId = route.params?.expenseId;

  const isEditing = !!expenseId;

  
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, []);

  const handleCancel = () => {
    navigation.goBack();
    expensesContext.deleteExpense(expenseId)
  }

  const handleConfirm = () => {
    const dummyExpense = { description: 'test', amount: 19.99, date: new Date('2024-10-16')};
    handleCancel();
    isEditing ? expensesContext.updateExpense(expenseId, dummyExpense) : expensesContext.addExpense(dummyExpense) 
  }

  const handleDeleteItem = () => {
    handleCancel();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm onCancel={handleCancel} isEditing={isEditing} />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={handleDeleteItem} />
        </View>
        )}
    </View>
  )
}

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
})