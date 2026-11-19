import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Navbar from "@/components/NavBar";

export default function NavbarLayout() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {/* Conteúdo das páginas */}
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "fade",
        }}
      />

      {/* Navbar flutuante */}
      <View style={[styles.navbarContainer, { bottom: insets.bottom + 12 }]}>
        <Navbar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  navbarContainer: {
    position: "absolute",
    left: 16,
    right: 16,
    zIndex: 100,
    elevation: 10,
  },
});
