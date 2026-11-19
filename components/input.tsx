import { Background } from "expo-router/build/react-navigation/index.js";
import { TextInput, TextInputProps } from "react-native";

export function Input({ ...rest }: TextInputProps) {
  return <TextInput style={style.TextInput} {...rest} />;
}

const style = {
  TextInput: {
    width: "100%",
    height: 60,
    backgroundColor: "rgba(187, 184, 255, 0.13)",
    borderColor: "rgba(0, 30, 255, 0.04)",
    borderRadius: 30,
    borderWidth: 1,
    padding: 10,
    marginBottom: 30,
    marginTop: 10,
  },
};
