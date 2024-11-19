import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

type Anuncio = {
  id: string;
  fornecedor: string;
  kwPorMes: number;
  valorPorKwh: number;
};

const TelaListaAnuncios = () => {
  const [anuncios, setAnuncios] = useState<Anuncio[]>([]);

  useEffect(() => {
    // Simulando a chamada da API para carregar os anúncios da região do comprador
    const fetchAnuncios = async () => {
      const anunciosData: Anuncio[] = [
        {
          id: "1",
          fornecedor: "Fornecedor A",
          kwPorMes: 100,
          valorPorKwh: 0.25,
        },
        {
          id: "2",
          fornecedor: "Fornecedor B",
          kwPorMes: 50,
          valorPorKwh: 0.3,
        },
        {
          id: "3",
          fornecedor: "Fornecedor C",
          kwPorMes: 150,
          valorPorKwh: 0.22,
        },
      ];
      setAnuncios(anunciosData);
    };

    fetchAnuncios();
  }, []);

  const renderAnuncio = ({ item }: { item: Anuncio }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.fornecedor}</Text>
      <Text style={styles.text}>KWh/mês: {item.kwPorMes} KWh</Text>
      <Text style={styles.text}>Valor por KWh: R$ {item.valorPorKwh}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Anúncios na Sua Região</Text>
      <Text style={styles.subHeader}>
        Com base em sua localização, compare outros fornecedores próximos à você antes de criar seu anúncio!
      </Text>

      <FlatList
        data={anuncios}
        renderItem={renderAnuncio}
        keyExtractor={(item) => item.id}
      />

      <Button
        title="Criar Meu Anúncio"
        onPress={() => alert("Navegando para a criação de anúncio!")}
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
  subHeader: {
    fontSize: 16,
    marginBottom: 20,
    color: "#555",
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
});

export default TelaListaAnuncios;
