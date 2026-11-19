import { StyleSheet } from "react-native";

import {
  useFonts,
  PlusJakartaSans_400Regular,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
} from "@expo-google-fonts/plus-jakarta-sans";

export const image = StyleSheet.create({
  imageBG: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: -5,
  },

  imageAss: {
    position: "absolute",
    top: 100,
    left: 18,
    width: 200,
    height: 30,
  },

  AssCentral: {
    marginTop: 30,
    width: 200,
    height: 30,
    marginBottom: "-15",
  },
});

export const conteiner = StyleSheet.create({
  bg: {
    zIndex: 1,
    paddingTop: 50 ,
    flex: 1,
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },

  universal: {
    marginTop: 10,
    width: "90%",
    gap: 12,
    marginBottom: 10,
  },

  containerOb: {
    zIndex: 1,
    flex: 1,
    gap: 20,
    width: "100vw",
    height: "100vh",
    alignItems: "center",
  },

  conteinerOnbording: {
    flex: 1,
    position: "absolute",
    width: "100%",
    bottom: 60,
    flexDirection: "row",
    borderRadius: 999,
    alignItems: "stretch",
    justifyContent: "center",
    opacity: 1,
    gap: 25,
  },
});

export const text = StyleSheet.create({
  pp: {
    fontSize: 10,
    fontFamily: "PlusJakartaSans_400Regular",
    color: "#1C1B1F",
  },
  p: {
    fontSize: 12,
    fontFamily: "PlusJakartaSans_600SemiBold",
    color: "#1C1B1F",
  },
  m: {
    fontSize: 16,
    fontFamily: "PlusJakartaSans_600SemiBold",
    color: "#1C1B1F",
  },
  g: {
    fontSize: 18,
    fontFamily: "PlusJakartaSans_700Bold",
    color: "#0051F9",
  },
  gg: {
    fontSize: 24,
    fontFamily: "PlusJakartaSans_800ExtraBold",
    color: "#0051F9",
  },

  g3: {
    fontSize: 30,
    fontFamily: "PlusJakartaSans_800ExtraBold",
    color: "#0051F9",
  },

  link: {
    color: "#0051F9",
    fontWeight: "bold",
  },
});

export const input = StyleSheet.create({});

export const botao = StyleSheet.create({

  container: {
    marginTop: 175,
    width: "90%",
    gap: 12,
    marginBottom: 10,
  },

  fullSize: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 999,
  },

  Onbording: {
    backdropFilter: "blur(80px)",
    alignItems: "center",
    borderRadius: 999,
    padding: 15,
    width: 160,
  },

  buttonText: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 14,
    marginLeft: 12,
  },

  pressed: {
    transform: [{ scale: 0.95 }],
    opacity: 0.8,
  },

  googleButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    elevation: 2,
  },

  googleText: {
    color: "#1C1B1F",
  },

  appleButton: {
    backgroundColor: "#1C1917",
    elevation: 4,
  },

  appleText: {
    color: "#FFFFFF",
  },
});

export const geo = StyleSheet.create({
  linha: {
    width: "30%",
    height: 1,
    backgroundColor: "#D9D9D9",
    marginHorizontal: 10,
  },
});



