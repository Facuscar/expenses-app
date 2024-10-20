import { StyleSheet, Text, TextInput, View } from "react-native"
import { GlobalStyles } from "../../../constants/styles";

const Input = ({ label, textInputProps, newStyle }) => {
  return (
    <View style={[styles.inputWrapper, newStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={[styles.input, textInputProps.multiline && styles.multilineInput]} {...textInputProps} />
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
  inputWrapper: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
  },
  multilineInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  }
})