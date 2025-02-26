import React, { FC } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import {LoadingScreenCuteBaby} from "../components/LoadingScreen"
export const Welcome: FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const whenGotoRegister = () => {
    navigation.navigate("register");
  };
  const whenGotoLogin = () => {
    navigation.navigate("login");
  };

  return (
    <>
      <ImageBackground
        source={require("../assets/background/bg1.png")}
        style={styles.background}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Welcome to</Text>
            <Text style={styles.headerText}>DekDek</Text>
          </View>

          <View style={styles.logo}>
          <LoadingScreenCuteBaby/>
          </View>

          <View style={styles.bottomSection}>
          <View style={styles.buttonContainer}>
            <Pressable onPress={whenGotoLogin} style={styles.button}>
              <Text style={styles.buttonText}>SIGN IN</Text>
            </Pressable>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable onPress={whenGotoRegister} style={styles.button}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </Pressable>
          </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    height:"80%",
    width:"100%",
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems:"center",
    //borderWidth:1,
    flexDirection:"column",
  },
  header: {
    flexDirection:"column",
    width:200,
    height:"auto",
    //borderWidth:1,
    alignItems: "center",
    position:"absolute",
    top:270,
  },
  
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    //borderWidth:1,
    position:"absolute",
    bottom:410,
    
  },
  title: {
    // position:"absolute",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
    textAlign:"center",
    //borderWidth:1,
  },
    headerText:{
      fontSize: 35,
      fontWeight: "bold",
      textAlign:"center",
    },
  bottomSection:{
    width:"100%",
    position:"absolute",
    bottom:270,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
   // borderWidth:1,
  },
  button: {
    width: "60%",
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
  },
});
