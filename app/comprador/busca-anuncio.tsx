import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Slider from "@react-native-community/slider";
import { router } from "expo-router";
import UIButton from "@/components/ui/Button";

type Fornecedor = {
  id: number;
  kwh: number;
  preco: number;
};

type Combinacao = {
  combinacao: Fornecedor[];
  custo: number;
};

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

export default function BuscaScreen() {
  const [kwh, setKwh] = useState<number>(10);
  const [combinacoes, setCombinacoes] = useState<Combinacao[]>([]);

  const handleBuscar = () => {
    const resultados = gerarCombinacoes(kwh);
    setCombinacoes(resultados);
  };

  const handleContratar = (item: Combinacao) => {
    router.replace({
      pathname: "/comprador/pagamento",
      params: {
        combinacao: JSON.stringify(item.combinacao),
        custo: item.custo,
        totalKwh: item.combinacao.reduce((acc, f) => acc + f.kwh, 0),
      },
    });
  };

  const gerarCombinacoes = (kwh: number) => {
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
      <Text style={styles.header}>Selecione o Consumo (KWh/mês):</Text>
      <Text style={styles.subHeader}>{kwh} KWh</Text>

      <Slider
        style={styles.slider}
        minimumValue={5}
        maximumValue={50}
        step={1}
        onValueChange={setKwh}
        minimumTrackTintColor="#105f53"
        maximumTrackTintColor="#3C3C3C"
      />

      <UIButton onPress={handleBuscar} title="Buscar" />

      {combinacoes.length > 0 && (
        <Text style={styles.titleList}>Lista de Combinações:</Text>
      )}

      <FlatList
        data={combinacoes}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Combinação {index + 1}</Text>
            <Text style={styles.text}>
              {item.combinacao.map((f) => `${f.kwh} KWh`).join(" + ")}
            </Text>
            <Text style={styles.text}>Custo Mensal: R$ {item.custo}</Text>
            <Text style={styles.text}>
              Total KWh: {item.combinacao.reduce((acc, f) => acc + f.kwh, 0)}{" "}
              KWh
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
    padding: 20,
    backgroundColor: "#F4FFF8",
    marginTop: 50,
    paddingTop: 70,
  },
  header: {
    fontSize: 24,
    color: "#105f53",
    marginBottom: 20,
    fontFamily: "LatoBold",
  },
  subHeader: {
    fontSize: 16,
    color: "#6B6B6B",
    marginBottom: 20,
  },
  titleList: {
    fontSize: 22,
    color: "#105f53",
    margin: 20,
    fontFamily: "LatoBold",
  },
  slider: {
    width: "100%",
    height: 40,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#105f53",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000c1",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#3C3C3C",
    marginBottom: 8,
  },
  contractButton: {
    marginTop: 10,
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  contractButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});
