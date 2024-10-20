import { View } from "react-native"

import Input from "./Input";

const ExpenseForm = () => {
  const amountChangedHandler = () => {

  }

  return (
    <View>
      <Input label="Amount" textInputProps={{ 
        keyboardType: "decimal-pad",
        onChangeText: amountChangedHandler,
       }} />
      <Input label="Date" textInputProps={{
        placeholder: "YYYY-MM-DD",
        maxLength: 10,
        onChangeText: () => {},
      }} />
      <Input label="Description" textInputProps={{
        
      }} />
    </View>
  )
}

export default ExpenseForm;