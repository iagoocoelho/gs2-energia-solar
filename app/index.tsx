import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";

import { useState } from "react";
import { router } from "expo-router";

export default function Home() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    // MOCK LOGIN
    if (!email || !senha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      // MOCK LOGIN - VENDEDOR
      if (email === "luiz@gmail.com" && senha) {
        return router.replace("/vendedor/meus-anuncios");
      }

      // MOCK LOGIN - COMPRADOR
      if (email === "gabriel@gmail.com" && senha) {
        return router.replace("/comprador/busca-anuncio");
      }
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../assets/images/logo_solara.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.text}>Bem vindo ao Solara!</Text>
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

      {loading ? (
        <ActivityIndicator size="large" color="#45C4B0" />
      ) : (
        <TouchableOpacity
          onPress={handleLogin}
          activeOpacity={0.8}
          disabled={!email || !senha}
        >
          <Text
            style={[styles.button, (!email || !senha) && styles.buttonDisabled]}
          >
            ENTRAR
          </Text>
        </TouchableOpacity>
      )}
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
    elevation: 3,
  },
  imgContainer: {
    marginBottom: 30,
  },
  image: {
    width: 160,
    height: 160,
  },
});
