import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/IconButton"
import { GlobalStyles } from "../constants/styles";
import Button from "../components/Button";

const ManageExpenses = ({ route, navigation }) => {
  const expenseId = route.params?.expenseId;

  const isEditing = !!expenseId;

  
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, []);

  const handleDeleteItem = () => {

  }

  const handleCancel = () => {

  }

  const handleConfirm = () => {

  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button mode="flat" onPress={handleCancel} style={styles.button}>Cancel</Button>
        <Button onPress={handleConfirm} style={styles.button}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  }
})