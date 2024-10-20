import { Text, TextInput, View } from "react-native"

const Input = ({ label, textInputProps }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputProps} />
    </View>
  )
}

export default Input;