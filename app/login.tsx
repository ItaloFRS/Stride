import Button from "@/components/Button";
import { Input } from "@/components/input";
import { botao, conteiner, geo, text } from "@/constants/CSS/Styles";
import { router } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/plus-jakarta-sans";

import { image } from "@/constants/CSS/Styles";

export default function login() {
  const [loaded] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_800ExtraBold,
  });

  return (
    <View style={conteiner.bg}>
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
      <Image
        source={require("../assets/image/Ass/Assinatura_ST_azulEletrico.png")}
        style={image.AssCentral}
      />
      <Text style={[text.pp]}> Performance in motion </Text>
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
        {/* EMAIL */}
        <Text style={text.p}>E-MAIL</Text>
        <Input placeholder="Digite seu email" placeholderTextColor="#b3b3b3" />
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
        <Text style={[text.m, { textAlign: "center", marginTop: 20 }]}>
          Não tem uma conta?
          <Text
            style={[text.m, text.link]}
            onPress={() => router.push("/cadastro")}
          >
            Cadastre-se
          </Text>
        </Text>
        <Text
          style={[text.pp, { textAlign: "center", marginTop: 30 }]}
          onPress={() => router.push("/")}
        >
          ESQUECI A SENHA
        </Text>
      </ScrollView>
    </View>
  );
}
