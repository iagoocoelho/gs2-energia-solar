import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Slider from "@react-native-community/slider";
import { useNavigation } from "@react-navigation/native";

const fornecedores: Fornecedor[] = [
  { id: 1, kwh: 7, preco: 50 },
  { id: 2, kwh: 8, preco: 60 },
  { id: 3, kwh: 15, preco: 100 },
  { id: 4, kwh: 10, preco: 80 },
  { id: 5, kwh: 5, preco: 30 },
  { id: 6, kwh: 1, preco: 15 },
  { id: 7, kwh: 3, preco: 20 },
  { id: 8, kwh: 4, preco: 25 },
  { id: 9, kwh: 2, preco: 10 },
  { id: 10, kwh: 6, preco: 40 },
];

type Fornecedor = {
  id: number;
  kwh: number;
  preco: number;
};

type Combinacao = {
  combinacao: Fornecedor[];
  custo: number;
};

export default function BuscaScreen() {
  const [kwh, setKwh] = useState<number>(10);
  const [combinacoes, setCombinacoes] = useState<Combinacao[]>([]);

  const navigation = useNavigation();

  const handleBuscar = () => {
    const resultados = gerarCombinacoes(kwh);
    setCombinacoes(resultados);
  };

  const handleContratar = (item: Combinacao) => {
    navigation.navigate("payment", {
      combinacao: item.combinacao,
      custo: item.custo,
      totalKwh: item.combinacao.reduce((acc, f) => acc + f.kwh, 0),
    });
  };

  const gerarCombinacoes = (kwh: number) => {
    // TO DO: Ordernar prioriorizando os fornecedores primeiro fornecedores impulsionados e depois mais baratos
    const resultados: Combinacao[] = [];
    const toleranciaKWh = 1;
    const fornecedoresOrdenados = fornecedores.sort(
      (a, b) => a.preco - b.preco
    );

    for (let i = 0; i < fornecedoresOrdenados.length; i++) {
      let restante = kwh;
      let combinacao = [];
      let custoTotal = 0;

      for (let j = i; j < fornecedoresOrdenados.length; j++) {
        const fornecedor = fornecedoresOrdenados[j];
        if (fornecedor.kwh <= restante) {
          combinacao.push(fornecedor);
          custoTotal += fornecedor.preco;
          restante -= fornecedor.kwh;
        }
      }

      const totalKwh = combinacao.reduce((sum, f) => sum + f.kwh, 0);

      if (totalKwh >= kwh - toleranciaKWh && totalKwh <= kwh + toleranciaKWh) {
        resultados.push({ combinacao, custo: custoTotal });
      }
    }

    return resultados.sort((a, b) => a.custo - b.custo); // Ordena por custo crescente
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione o consumo (KWh/mês):</Text>
      <Text style={styles.value}>{kwh} KWh</Text>

      <Slider
        style={{ width: 300, height: 40 }}
        minimumValue={5}
        maximumValue={50}
        step={1}
        onValueChange={setKwh}
        minimumTrackTintColor="#1E90FF"
        maximumTrackTintColor="#000000"
      />

      <TouchableOpacity style={styles.button} onPress={handleBuscar}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      <FlatList
        data={combinacoes}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>
              Combinação:{" "}
              {item.combinacao.map((f) => `${f.kwh}KWh`).join(" + ")}
            </Text>
            <Text style={styles.cardText}>Custo Mensal: R$ {item.custo}</Text>
            <Text style={styles.cardText}>
              Total KWh da Combinação:{" "}
              {item.combinacao.reduce((acc, f) => acc + f.kwh, 0)}KWh
            </Text>

            <TouchableOpacity
              style={styles.contractButton}
              onPress={() => handleContratar(item)}
            >
              <Text style={styles.contractButtonText}>Contratar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#1E90FF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
  contractButton: {
    marginTop: 10,
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  contractButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
