import { StyleSheet, Text, View } from "react-native"

import Input from "./Input";
import Button from "../Button";
import { useState } from "react";

const ExpenseForm = ({ onCancel, onSubmit, isEditing }) => {
  const [inputValues, setInputValues] = useState({ amount: '', date: '', description: ''});

  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    setInputValues((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: enteredValue,
      };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    onSubmit(expenseData)
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          textInputProps={{ 
            keyboardType: "decimal-pad",
            onChangeText: (enteredText) => inputChangedHandler('amount', enteredText),
            value: inputValues.amount,
          }} 
          newStyle={styles.rowInput}
          />
        <Input
          label="Date" 
          textInputProps={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: (enteredText) => inputChangedHandler('date', enteredText),
            value: inputValues.date,
          }}
          newStyle={styles.rowInput}
          />
      </View>
      <Input label="Description" textInputProps={{
        multiline: true,
        onChangeText: (enteredText) => inputChangedHandler('description', enteredText),
        value: inputValues.description,
      }} />
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