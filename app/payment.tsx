import { useNavigation } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, FlatList, Alert, Button } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

type PaymentRouteParams = {
  combinacao: { id: number; kwh: number; preco: number }[];
  custo: number;
  totalKwh: number;
};

const Payment = () => {
  const route = useRoute<RouteProp<{ params: PaymentRouteParams }>>();
  const { combinacao, custo, totalKwh } = route.params;
  const navigation = useNavigation();

  const handleFinalizarPagamento = () => {
    Alert.alert(
      "Pagamento realizado com sucesso!",
      "Obrigado pela contratação.",
      [{ onPress: () => navigation.navigate("index") }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Pedido</Text>
      <Text style={styles.text}>Total de KWh: {totalKwh} KWh</Text>
      <Text style={styles.text}>Custo Total: R$ {custo}</Text>

      <Text style={styles.subTitle}>Fornecedores:</Text>
      <FlatList
        data={combinacao}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => (
          <Text style={styles.text}>
            Fornecedor {item.id}: {item.kwh} KWh - R$ {item.preco}
          </Text>
        )}
      />

      <Button title="Finalizar Pagamento" onPress={handleFinalizarPagamento} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Payment;
