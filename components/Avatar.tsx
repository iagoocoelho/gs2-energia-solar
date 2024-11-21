import { usePathname, router } from "expo-router";
import { useEffect, useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

const AppHeader = () => {
  const [username, setUsername] = useState<string>("");
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleAvatarPress = () => {
    router.push("/");
  };

  const checkPathname = () => {
    const regexVendedor = /\/vendedor/;
    const regexComprador = /\/comprador/;

    if (regexVendedor.test(pathname)) {
      return setUsername("Luiz");
    } else if (regexComprador.test(pathname)) {
      return setUsername("Gabriel");
    }

    return setUsername("");
  };

  useEffect(() => {
    checkPathname();
  }, [pathname]);

  if (isHome) return null;

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../assets/images/logo_solara.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.containerName}>
        {username && <Text style={styles.text}>Bem vindo, {username}</Text>}
        <TouchableOpacity
          onPress={handleAvatarPress}
          style={styles.avatarContainer}
        >
          <Image
            source={{
              uri: `https://i.pravatar.cc/150?img=${
                username === "Luiz" ? "2" : "8"
              }`,
            }}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    top: 60,
    paddingHorizontal: 10,
    zIndex: 10,
  },
  text: {
    color: "#45C4B0",
    fontSize: 16,
    marginRight: 10,
  },
  containerName: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#45C4B0",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 25,
  },
  image: {
    width: 35,
    height: 35,
  },
});

export default AppHeader;
