import { Entypo, FontAwesome, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import { View, Pressable, StyleSheet } from "react-native";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <View style={styles.navbar}>
      <Pressable onPress={() => router.navigate("/home")}>
        <MaterialCommunityIcons
          name="home-outline"
          size={28}
          color={pathname === "/home" ? "#2563EB" : "#1e1a2f"}
        />
      </Pressable>

      <Pressable onPress={() => router.navigate("/catalogo")}>
        <MaterialCommunityIcons
          name="shoe-sneaker"
          size={28}
          color={pathname === "/catalogo" ? "#2563EB" : "#1e1a2f"}
        />
      </Pressable>

      <Pressable onPress={() => router.navigate("/carrinho")}>
        <FontAwesome5
          name="shopping-cart"
          size={22}
          color={pathname === "/carrinho" ? "#2563EB" : "#1e1a2f"}
        />
      </Pressable>

      <Pressable onPress={() => router.navigate("/perfil")}>
        <MaterialCommunityIcons
          name="account-outline"
          size={28}
          color={pathname === "/perfil" ? "#2563EB" : "#1e1a2f"}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    paddingVertical: 5,
    borderRadius: 50,
    width: "100%",
    height: 50,
  },
});
