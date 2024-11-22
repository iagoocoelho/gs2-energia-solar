import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

type Anuncio = {
  id: string;
  kwPorMes: number;
  valorPorKwh: number;
  ativo: boolean;
};

const MyAnnouncements = () => {
  const [anuncios, setAnuncios] = useState<Anuncio[]>([
    {
      id: "1",
      kwPorMes: 100,
      valorPorKwh: 0.25,
      ativo: true,
    },
    {
      id: "2",
      kwPorMes: 50,
      valorPorKwh: 0.3,
      ativo: true,
    },
    {
      id: "3",
      kwPorMes: 150,
      valorPorKwh: 0.2,
      ativo: false,
    },
  ]);

  const handleImpulsionar = (id: string) => {
    // Alert.alert("Impulsionar Anúncio", `Anúncio ${id} será editado.`);
    return false;
  };

  const handleExcluir = (id: string) => {
    // Alert.alert("Excluir Anúncio", `Anúncio ${id} será excluído.`);

    return false;
  };

  const renderAnuncio = ({ item }: { item: Anuncio }) => (
    <View style={styles.card}>
      <Text style={[styles.title, !item.ativo && styles.titleInactive]}>
        Anúncio {item.id}
      </Text>
      <Text style={[styles.text, !item.ativo && styles.textInactive]}>
        KWh/mês: {item.kwPorMes} KWh
      </Text>
      <Text style={[styles.text, !item.ativo && styles.textInactive]}>
        Valor por KWh: R$ {item.valorPorKwh}
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "red" },
            !item.ativo && styles.buttonDisabled,
          ]}
          onPress={() => handleExcluir(item.id)}
          activeOpacity={0.8}
          disabled={!item.ativo}
        >
          <Entypo name="trash" size={26} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            !item.ativo && styles.buttonDisabled,
            { flexDirection: "row" },
          ]}
          onPress={() => handleImpulsionar(item.id)}
          activeOpacity={0.8}
          disabled={!item.ativo}
        >
          <Text style={styles.buttonText}>IMPULSIONAR</Text>
          <MaterialIcons name="rocket-launch" size={26} color="white" />
        </TouchableOpacity>
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
    backgroundColor: "#F4FFF8",
    marginTop: 50,
    paddingTop: 70,
  },
  header: {
    fontSize: 28,
    fontFamily: "LatoBold",
    color: "#105f53",
    marginBottom: 20,
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
  titleInactive: {
    color: "#6b6b6b63",
  },
  text: {
    fontSize: 16,
    color: "#3C3C3C",
    marginBottom: 8,
  },
  textInactive: {
    color: "#6b6b6b63",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#45C4B0",
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    marginRight: 10,
    fontWeight: "bold",
  },
  buttonDisabled: {
    backgroundColor: "#A8A8A8",
  },
});

export default MyAnnouncements;
