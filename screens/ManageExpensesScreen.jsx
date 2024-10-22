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

  const selectedExpense = expensesContext.expenses.find((expense) => expense.id === expenseId);
  
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, []);

  const handleCancel = () => {
    navigation.goBack();
  }

  const handleConfirm = (expenseData) => {
    isEditing ? expensesContext.updateExpense(expenseId, expenseData) : expensesContext.addExpense(expenseData) 
    handleCancel();
  }

  const handleDeleteItem = () => {
    expensesContext.deleteExpense(expenseId)
    handleCancel();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm onCancel={handleCancel} isEditing={isEditing} onSubmit={handleConfirm} selectedExpense={selectedExpense} />
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