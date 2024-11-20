import { Text, View, StyleSheet, TextInput, Alert } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }
    Alert.alert("Sucesso", "Login efetuado com sucesso!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem vindo ao Energia Solar!</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Digite seu email"
          placeholderTextColor="#A8A8A8"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#A8A8A8"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
      </View>

      <Link href="/compras/announcements" style={styles.button}>
        Entrar
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4FFF8",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    marginTop: 50,
    paddingHorizontal: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#105f53",
    fontFamily: "LatoBold",
    fontSize: 22,
  },
  button: {
    fontSize: 30,
    marginTop: 30,
    textTransform: "uppercase",
    color: "#45C4B0",
  },
  input: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    color: "#1B5E20",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
});
