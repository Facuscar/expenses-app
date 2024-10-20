import { StyleSheet, Text, View } from "react-native"

import Input from "./Input";

const ExpenseForm = () => {
  const amountChangedHandler = () => {

  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          textInputProps={{ 
            keyboardType: "decimal-pad",
            onChangeText: amountChangedHandler,
          }} 
          newStyle={styles.rowInput}
          />
        <Input
          label="Date" 
          textInputProps={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => {},
            
          }}
          newStyle={styles.rowInput}
          />
      </View>
      <Input label="Description" textInputProps={{
        multiline: true,
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