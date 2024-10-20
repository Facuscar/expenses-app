import { StyleSheet, Text, View } from "react-native"

import Input from "./Input";
import { useState } from "react";

const ExpenseForm = () => {
  const [inputValues, setInputValues] = useState({ amount: '', date: '', description: ''});

  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    setInputValues((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: enteredValue,
      };
    });
  };

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
  }
})