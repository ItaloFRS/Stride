import { botao, conteiner, image, text } from "@/constants/CSS/Styles";
import { router } from "expo-router";
import { useVideoPlayer } from "expo-video";
import { Animated, Image, Text, TouchableOpacity, View } from "react-native";

const videoSource = require("../assets/video/Video_Hero.mp4");

export default function index() {
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.muted = true;
    player.play();
  });

  return (
    <View style={conteiner.containerOb}>
      <Image
        source={require("../assets/image/Ass/Assinatura_ST_branca.png")}
        style={[{ zIndex: 1 }, image.imageAss]}
        resizeMode="cover"
      />

      <Image
        source={require("../assets/image/Fotos/Corrida Urbana com Pisadas Azuis.png")}
        style={image.imageBG}
        resizeMode="cover"
        blurRadius={0}
      />

      <Animated.View style={conteiner.conteinerOnbording}>
        <TouchableOpacity
          style={[
            botao.Onbording,
            { backgroundColor: "rgba(0, 8, 250, 0.95)" },
          ]}
          onPress={() => router.push("/login")}
        >
          <Text
            style={[
              text.g,
              {
                color: "#ffffff",
              },
            ]}
          >
            Entrar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            botao.Onbording,
            { backgroundColor: "rgba(255, 255, 255, 0.95)" },
          ]}
          onPress={() => router.push("/cadastro")}
        >
          <Text
            style={[
              text.g,
              {
                color: "#000000",
              },
            ]}
          >
            Criar conta
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
