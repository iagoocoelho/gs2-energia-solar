import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

type Anuncio = {
  id: string;
  fornecedor: string;
  kwPorMes: number;
  valorPorKwh: number;
};

const TelaListaAnuncios = () => {
  const [anuncios, setAnuncios] = useState<Anuncio[]>([]);

  useEffect(() => {
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
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.fornecedor}</Text>
        <Text style={styles.text}>KWh/mês: {item.kwPorMes} KWh</Text>
        <Text style={styles.text}>Valor por KWh: R$ {item.valorPorKwh}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Anúncios na Sua Região</Text>
      <Text style={styles.subHeader}>
        Compare fornecedores para otimizar seu consumo sustentável
      </Text>

      <FlatList
        data={anuncios}
        renderItem={renderAnuncio}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity
        style={styles.createButton}
        onPress={() => alert("Criar Anúncio")}
      >
        <Text style={styles.createButtonText}>Quero criar meu anúncio!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F4FFF8",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#105f53",
    marginBottom: 20,
    fontFamily: "LatoBold",
  },
  subHeader: {
    fontSize: 16,
    color: "#6B6B6B",
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    marginBottom: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000c1",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#3C3C3C",
    marginBottom: 8,
  },
  createButton: {
    backgroundColor: "#45C4B0",
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  createButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default TelaListaAnuncios;
