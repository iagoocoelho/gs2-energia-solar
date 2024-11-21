import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
} from "react-native";

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  textColor?: string;
  style?: ViewStyle;
  disabled?: boolean;
}

const UIButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, disabled && styles.buttonDisabled]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#45C4B0",
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  buttonDisabled: {
    backgroundColor: "#A8A8A8",
  } as ViewStyle,
  text: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  } as TextStyle,
});

export default UIButton;
