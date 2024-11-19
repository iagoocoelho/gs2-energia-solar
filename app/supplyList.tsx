import React, { useState } from "react";
import { View, Text, FlatList, Button, StyleSheet, Alert } from "react-native";

type Anuncio = {
  id: string;
  kwPorMes: number;
  valorPorKwh: number;
  contaBancaria: string;
};

const SupplyList = () => {
  const [anuncios, setAnuncios] = useState<Anuncio[]>([
    {
      id: "1",
      kwPorMes: 100,
      valorPorKwh: 0.25,
      contaBancaria: "Conta: 123-456-789",
    },
    {
      id: "2",
      kwPorMes: 50,
      valorPorKwh: 0.3,
      contaBancaria: "Conta: 987-654-321",
    },
    {
      id: "3",
      kwPorMes: 150,
      valorPorKwh: 0.2,
      contaBancaria: "Conta: 456-789-012",
    },
  ]);

  const handleImpulsionar = (id: string) => {
    Alert.alert("Impulsionar Anúncio", `Anúncio ${id} será editado.`);

    // TO DO: Add icone de foguete
  };

  const handleExcluir = (id: string) => {
    Alert.alert("Excluir Anúncio", `Anúncio ${id} será excluído.`);

    // TO DO: Tornar "DISABLED"
  };

  const renderAnuncio = ({ item }: { item: Anuncio }) => (
    <View style={styles.card}>
      <Text style={styles.title}>Anúncio {item.id}</Text>
      <Text style={styles.text}>KWh/mês: {item.kwPorMes} KWh</Text>
      <Text style={styles.text}>Valor por KWh: R$ {item.valorPorKwh}</Text>
      <Text style={styles.text}>Conta Bancária: {item.contaBancaria}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Desativar"
          onPress={() => handleExcluir(item.id)}
          color="red"
        />
        <Button
          title="Impulsionar"
          onPress={() => handleImpulsionar(item.id)}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meus Anúncios</Text>
      <FlatList
        data={anuncios}
        renderItem={renderAnuncio}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    padding: 15,
    marginBottom: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default SupplyList;
