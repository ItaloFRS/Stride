import { Animated, Image, Text, TouchableOpacity, View } from "react-native";

import { botao, conteiner, image, text } from "@/constants/CSS/Styles";
import { router } from "expo-router";

export default function home() {
  return (
    <View style={conteiner.containerOb}>
      <Image
        source={require("@/assets/image/Fotos/Torre.png")}
        style={image.imageBG}
        resizeMode="cover"
      />

      <Image
        source={require("@/assets/image/Ass/Assinatura_ST_preto.png")}
        style={image.imageAss}
        resizeMode="cover"
      />

      <Animated.View style={[conteiner.conteinerOnbording, { width: "90%"}]}>
        <TouchableOpacity
          style={[
            botao.fullSize,
            { backgroundColor: "rgba(23, 23, 23, 0.84)" },
          ]}
          onPress={() => router.push("/")}
        >
          <Text
            style={[
              text.m,
              {
                color: "#ffffff",
              },
            ]}
          >
            HOME
          </Text>
        </TouchableOpacity>
      </Animated.View>  
    </View>
  );
}
