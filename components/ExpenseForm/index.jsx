import { Alert, StyleSheet, Text, View } from "react-native"

import Input from "./Input";
import Button from "../Button";
import { useState } from "react";

const ExpenseForm = ({ onCancel, onSubmit, isEditing, selectedExpense }) => {
  
  const initialExpense = selectedExpense ? {
    amount: { value: selectedExpense.amount.toString(), isValid: true },
    date: { value: selectedExpense.date.toISOString().slice(0, 10), isValid: true },
    description: { value: selectedExpense.description, isValid: true },
  } : {
    amount: { value: '', isValid: true },
    date: { value: '', isValid: true },
    description: { value: '', isValid: true },
  }
  const [inputs, setInputs] = useState(initialExpense);

  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((prevState) => {
        return {
          amount: { value: prevState.amount.value, isValid: amountIsValid },
          date: { value: prevState.date.value, isValid: dateIsValid },
          description: { value: prevState.description.value, isValid: descriptionIsValid },
        }
      })
      return;
    }

    onSubmit(expenseData)
  }

  const formIsInvalid = !inputs.amount.isValid || !inputs.description.isValid || !inputs.date.isValid

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          textInputProps={{ 
            keyboardType: "decimal-pad",
            onChangeText: (enteredText) => inputChangedHandler('amount', enteredText),
            value: inputs.amount.value,
          }} 
          newStyle={styles.rowInput}
          />
        <Input
          label="Date" 
          textInputProps={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: (enteredText) => inputChangedHandler('date', enteredText),
            value: inputs.date.value,
          }}
          newStyle={styles.rowInput}
          />
      </View>
      <Input label="Description" textInputProps={{
        multiline: true,
        onChangeText: (enteredText) => inputChangedHandler('description', enteredText),
        value: inputs.description.value,
      }} />
      {formIsInvalid && (
        <Text>
          Invalid input values, please check input data
        </Text>
        )}
      <View style={styles.buttonsContainer}>
        <Button mode="flat" onPress={onCancel} style={styles.button}>Cancel</Button>
        <Button onPress={submitHandler} style={styles.button}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>
    </View>
  )
}

export default ExpenseForm;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 24, 
  },
  form: {
    marginTop: 40,
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowInput: {
    flex: 1,
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