import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem vindo ao Energia Solar!</Text>
      <Link href="/pricing" style={styles.button}>
        Entrar
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  button: {
    fontSize: 30,
    marginTop: 50,
    textTransform: "uppercase",
    color: "#fff",
  },
});
