import Button from "@/components/Button";
import { Input } from "@/components/input";
import { botao, conteiner, geo, text } from "@/constants/CSS/Styles";
import { router } from "expo-router";
import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/plus-jakarta-sans";

export default function cadastro() {
  const [loaded] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_800ExtraBold,
  });

  return (
    <KeyboardAvoidingView style={conteiner.bg}>
      <View
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: 150,
          backgroundColor: "rgba(13, 0, 255, 0.07)",
        }}
      />
      <View
        style={{
          position: "absolute",
          bottom: -100,
          left: -100,
          width: 300,
          height: 300,
          borderRadius: 150,
          backgroundColor: "rgba(13, 0, 255, 0.07)",
        }}
      />

      <Text style={[text.g3, { marginBottom: "-20" }]}> Crie sua conta </Text>
      <Text style={[text.pp]}> cadastre-se e sinta o movimento </Text>
      {/* BOTÕES GOOGLE E APPLE */}
      <View style={conteiner.universal}>
        {/* GOOGLE */}
        <Pressable
          style={({ pressed }) => [
            botao.fullSize,
            botao.googleButton,
            pressed && botao.pressed,
          ]}
        >
          <FontAwesome5 name="google" size={20} color="#4285F4" />

          <Text style={[botao.buttonText, botao.googleText]}>
            Continuar com Google
          </Text>
        </Pressable>
      </View>
      {/*FIM DO CONTEINER BOTÕES GOOGLE E APPLE */}
      {/* FORMULÁRIO DE LOGIN */}
      <ScrollView style={conteiner.universal}>
        <View
          style={{
            marginBottom: 40,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/*View de boas vindas*/}
          <View style={geo.linha}></View>
          <Text style={text.pp}>OU COM E-MAIL</Text>
          <View style={geo.linha}></View>
        </View>

        {/*Fim do View de boas vindas*/}

        {/* NOME COMPLETO */}
        <Text style={text.p}>NOME COMPLETO</Text>
        <Input placeholder="Digite seu nome" placeholderTextColor="#b3b3b3" />

        {/* EMAIL */}
        <Text style={text.p}>E-MAIL</Text>
        <Input placeholder="Digite seu email" placeholderTextColor="#b3b3b3" />

        {/* CPF */}
        <Text style={text.p}>CPF</Text>
        <Input placeholder="000.000.000-00" placeholderTextColor="#b3b3b3" />

        {/* SENHA */}
        <Text style={[text.p]}>SENHA</Text>
        <Input
          placeholder="Digite sua senha"
          placeholderTextColor="#b3b3b3"
          secureTextEntry
        />
        {/* BOTÃO ENTRAR */}
        <Button
          title="Entrar"
          variant="primary"
          onPress={() => router.push("/home")}
        />
        {/* CADASTRO */}
        <Text style={[text.p, { textAlign: "center", marginTop: 15 }]}>
          Já tem uma conta?{" "}
          <Text
            style={[text.p, text.link]}
            onPress={() => router.push("/cadastro")}
          >
            Entrar
          </Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
