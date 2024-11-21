import { useNavigation } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  TouchableOpacity,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { router } from "expo-router";
import UIButton from "@/components/ui/Button";

type PaymentRouteParams = {
  combinacao: string;
  custo: number;
  totalKwh: number;
};

const Payment = () => {
  const route = useRoute<RouteProp<{ params: PaymentRouteParams }>>();
  const { combinacao, custo, totalKwh } = route.params;

  const handleFinalizarPagamento = () => {
    Alert.alert(
      "Pagamento realizado com sucesso!",
      "Obrigado pela contratação.",
      [{ onPress: () => router.replace("/") }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Pedido</Text>

      <View style={styles.summary}>
        <Text style={styles.text}>
          <Text style={styles.boldText}>
            Total de KWh:
          </Text>{" "}
          {totalKwh} KWh
        </Text>
        <Text style={styles.text}>
          <Text style={styles.boldText}>Custo Total:</Text> R$ {custo}
        </Text>
      </View>

      <Text style={styles.subTitle}>Fornecedores:</Text>
      <FlatList
        data={JSON.parse(combinacao)}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => (
          <Text style={styles.text}>
            <Text style={styles.boldText}>Fornecedor {item.id}:</Text>{" "}
            {item.kwh} KWh - R$ {item.preco}
          </Text>
        )}
      />

      <UIButton
        onPress={handleFinalizarPagamento}
        title="Finalizar Pagamento"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F4FFF8",
    marginTop: 50,
    paddingTop: 70,
  },
  title: {
    fontSize: 24,
    color: "#105f53",
    marginBottom: 20,
    fontWeight: "bold",
  },
  summary: {
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 24,
    color: "#105f53",
    marginBottom: 10,
    fontWeight: "bold",
  },
  text: {
    fontSize: 22,
    color: "#3C3C3C",
    marginBottom: 10,
  },
  boldText: {
    fontSize: 18,
    color: "#3C3C3C",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },
});

export default Payment;
