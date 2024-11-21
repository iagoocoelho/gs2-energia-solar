import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { useState } from "react";
import UIButton from "@/components/ui/Button";
// import { router } from "expo-router";

export default function Home() {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");
  const [CodInstalacaoEnergia, setCodInstalacaoEnergia] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};

  const handleChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, "");

    const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(parseFloat(numericValue) / 100);

    setValue(formattedValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cadastre seu fornecimento</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Digite seu nome"
          placeholderTextColor="#A8A8A8"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />

        <TextInput
          placeholder="Digite seu endereço"
          placeholderTextColor="#A8A8A8"
          value={endereco}
          onChangeText={setEndereco}
          style={styles.input}
        />

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
          placeholder="Código de instalação de energia"
          placeholderTextColor="#A8A8A8"
          value={CodInstalacaoEnergia}
          onChangeText={setCodInstalacaoEnergia}
          style={styles.input}
        />

        <TextInput
          style={styles.input}
          value={value}
          onChangeText={handleChange}
          placeholder="Valor mensal (R$ KW/h por mês)"
          placeholderTextColor="#A8A8A8"
          keyboardType="numeric"
        />

        <UIButton
          onPress={handleSubmit}
          title="CADASTRAR"
          disabled={!nome || !endereco || !email || !value || !CodInstalacaoEnergia}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4FFF8",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    paddingTop: 70,
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
  buttonDisabled: {
    color: "#A8A8A8",
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
  },
});
