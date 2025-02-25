// Assessment.tsx
import { FC } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Pressable,
  Text,
  Image,
  ScrollView,
} from "react-native";
import {
  useNavigation,
  NavigationProp,
  RouteProp,
  useRoute,
} from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Child } from "./HomePR";

type AssessmentRouteProp = RouteProp<
  { assessment: { child: Child } },
  "assessment"
>;

export const ChildDetail: FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const route = useRoute<AssessmentRouteProp>();
  const { child } = route.params;

  // navigate
  const whenGotoGM = (child: Child) => {
    navigation.navigate("gm", { child });
  };

  const whenGotoFM = (child: Child) => {
    navigation.navigate("fm", { child });
  };

  const whenGotoRL = (child: Child) => {
    navigation.navigate("rl", { child });
  };

  const whenGotoEL = (child: Child) => {
    navigation.navigate("el", { child });
  };

  const whenGotoPS = (child: Child) => {
    navigation.navigate("sp", { child });
  };

  const whenGotoEditChild = (child : Child) => {
      navigation.navigate("editchild", { child });
    };

  const whenGotoHome = () => {
    navigation.navigate("mainPR");
  };

  // navigate goBack
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require("../../assets/background/bg2.png")}
      style={styles.background}
    >
      {/* Top Section */}
      <View style={styles.topSection}>
        <LinearGradient
                            key={child.child_id}
                            colors={
                              child.gender === "male"
                                ? ["#fff", "#E7F6FF","#D6ECFD"]  // ไล่สีฟ้าสำหรับเด็กผู้ชาย
                                :["#fff", "#FFDEE4","#FFBED6"]  // ไล่สีชมพูสำหรับเด็กผู้หญิง
                            }
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={child.gender === "male" ? styles.profileCardBoy : styles.profileCardGirl}
                          >
          <Image source={{ uri: child.childPic }} style={styles.profileIcon} />
          <View style={styles.profileInfo}>
            <View style={styles.detailsName}>
              <Text style={styles.profileName}>{child.nickName}</Text>
            </View>
            <View style={styles.detailsAge}>
              <Text style={styles.profileAge}>{child.age}</Text>
            </View>
            <Pressable
              key={child.child_id}
              style={
                child.gender === "male"
                  ? styles.detailsButtonBoy
                  : styles.detailsButtonGirl
              }
              onPress={() => whenGotoEditChild(child)}
            >
              <Text style={styles.detailsText}>แก้ไขข้อมูล</Text>
            </Pressable>
          </View>
        </LinearGradient>
      </View>

      {/* Mid Section */}
      <View style={styles.midSection}>
        <ScrollView showsVerticalScrollIndicator={false}>
        {/* GM */}
        <LinearGradient
                        colors={["#fff","#E0F6EE","#D6F1E8"]}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1.5, y: 1 }} 
                        style={styles.detailByAssess}>
            {/* Header */}
         <View style={styles.HeaderOfAssessment}>
            <Text style={styles.HeaderOfAssessmentText}>Gross Motor(GM)</Text>
        </View>
        {/* Body */}
         <View style={styles.BodyOfAssesment}>
            {/* วันที่และข้อ*/}
            <View style={styles.DateNoContainer}>
                {/* วันที่ */}
                <View style={styles.DateContainer}>
                  <View style={styles.DateHeader}>
                    <Text style={styles.DateHeaderText}>วันที่ประเมินล่าสุด</Text>
                  </View>
                  <View style={styles.DateTextContainer}>
                    <Text style={styles.DateText}>0000</Text>
                  </View>
                </View>

                {/* ข้อ */}
                <View style={styles.NoHeaderContainer}>
                <View style={styles.NoHeader}>
                    <Text style={styles.NoHeaderText}>ข้อ</Text>
                </View>
                <View style={styles.NoContainer}>
                    <Text style={styles.NoText}>00</Text>
                </View>
                </View>
            </View>
            {/* อายุล่าสุด */}
            <View style={styles.DevAgeContainer}>
              <View style={styles.DevAgeHeader}>
                <Text style={styles.DevAgeHeaderText}>อายุพัฒนาการล่าสุด</Text>
              </View>
              <View style={styles.DevAgeTextContainer}>
                <Text style={styles.DevAgeText}>0000</Text>
              </View>
            </View>
         </View>
         </LinearGradient>
       
        {/* FM */}
         <LinearGradient
                        colors={["#fff","#E0F6EE","#D6F1E8"]}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1.5, y: 1 }} 
                        style={styles.detailByAssess}>
            {/* Header */}
         <View style={styles.HeaderOfAssessment}>
            <Text style={styles.HeaderOfAssessmentText}>Fine Motor(FM)</Text>
        </View>
        {/* Body */}
         <View style={styles.BodyOfAssesment}>
            {/* วันที่และข้อ*/}
            <View style={styles.DateNoContainer}>
                {/* วันที่ */}
                <View style={styles.DateContainer}>
                  <View style={styles.DateHeader}>
                    <Text style={styles.DateHeaderText}>วันที่ประเมินล่าสุด</Text>
                  </View>
                  <View style={styles.DateTextContainer}>
                    <Text style={styles.DateText}>0000</Text>
                  </View>
                </View>

                {/* ข้อ */}
                <View style={styles.NoHeaderContainer}>
                <View style={styles.NoHeader}>
                    <Text style={styles.NoHeaderText}>ข้อ</Text>
                </View>
                <View style={styles.NoContainer}>
                    <Text style={styles.NoText}>00</Text>
                </View>
                </View>
            </View>
            {/* อายุล่าสุด */}
            <View style={styles.DevAgeContainer}>
              <View style={styles.DevAgeHeader}>
                <Text style={styles.DevAgeHeaderText}>อายุพัฒนาการล่าสุด</Text>
              </View>
              <View style={styles.DevAgeTextContainer}>
                <Text style={styles.DevAgeText}>0000</Text>
              </View>
            </View>
         </View>
         </LinearGradient>

         {/* RL */}
         <LinearGradient
                        colors={["#fff","#E0F6EE","#D6F1E8"]}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1.5, y: 1 }} 
                        style={styles.detailByAssess}>
            {/* Header */}
         <View style={styles.HeaderOfAssessment}>
            <Text style={styles.HeaderOfAssessmentText}>Receptive Language(RL)</Text>
        </View>
        {/* Body */}
         <View style={styles.BodyOfAssesment}>
            {/* วันที่และข้อ*/}
            <View style={styles.DateNoContainer}>
                {/* วันที่ */}
                <View style={styles.DateContainer}>
                  <View style={styles.DateHeader}>
                    <Text style={styles.DateHeaderText}>วันที่ประเมินล่าสุด</Text>
                  </View>
                  <View style={styles.DateTextContainer}>
                    <Text style={styles.DateText}>0000</Text>
                  </View>
                </View>

                {/* ข้อ */}
                <View style={styles.NoHeaderContainer}>
                <View style={styles.NoHeader}>
                    <Text style={styles.NoHeaderText}>ข้อ</Text>
                </View>
                <View style={styles.NoContainer}>
                    <Text style={styles.NoText}>00</Text>
                </View>
                </View>
            </View>
            {/* อายุล่าสุด */}
            <View style={styles.DevAgeContainer}>
              <View style={styles.DevAgeHeader}>
                <Text style={styles.DevAgeHeaderText}>อายุพัฒนาการล่าสุด</Text>
              </View>
              <View style={styles.DevAgeTextContainer}>
                <Text style={styles.DevAgeText}>0000</Text>
              </View>
            </View>
         </View>
         </LinearGradient>

         {/* EL */}
         <LinearGradient
                        colors={["#fff","#E0F6EE","#D6F1E8"]}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1.5, y: 1 }} 
                        style={styles.detailByAssess}>
            {/* Header */}
         <View style={styles.HeaderOfAssessment}>
            <Text style={styles.HeaderOfAssessmentText}>Expressive Language(EL)</Text>
        </View>
        {/* Body */}
         <View style={styles.BodyOfAssesment}>
            {/* วันที่และข้อ*/}
            <View style={styles.DateNoContainer}>
                {/* วันที่ */}
                <View style={styles.DateContainer}>
                  <View style={styles.DateHeader}>
                    <Text style={styles.DateHeaderText}>วันที่ประเมินล่าสุด</Text>
                  </View>
                  <View style={styles.DateTextContainer}>
                    <Text style={styles.DateText}>0000</Text>
                  </View>
                </View>

                {/* ข้อ */}
                <View style={styles.NoHeaderContainer}>
                <View style={styles.NoHeader}>
                    <Text style={styles.NoHeaderText}>ข้อ</Text>
                </View>
                <View style={styles.NoContainer}>
                    <Text style={styles.NoText}>00</Text>
                </View>
                </View>
            </View>
            {/* อายุล่าสุด */}
            <View style={styles.DevAgeContainer}>
              <View style={styles.DevAgeHeader}>
                <Text style={styles.DevAgeHeaderText}>อายุพัฒนาการล่าสุด</Text>
              </View>
              <View style={styles.DevAgeTextContainer}>
                <Text style={styles.DevAgeText}>0000</Text>
              </View>
            </View>
         </View>
         </LinearGradient>

         {/* PS */}
         <LinearGradient
                        colors={["#fff","#E0F6EE","#D6F1E8"]}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1.5, y: 1 }} 
                        style={styles.detailByAssess}>
            {/* Header */}
         <View style={styles.HeaderOfAssessment}>
            <Text style={styles.HeaderOfAssessmentText}>Personal and Social(PS)</Text>
        </View>
        {/* Body */}
         <View style={styles.BodyOfAssesment}>
            {/* วันที่และข้อ*/}
            <View style={styles.DateNoContainer}>
                {/* วันที่ */}
                <View style={styles.DateContainer}>
                  <View style={styles.DateHeader}>
                    <Text style={styles.DateHeaderText}>วันที่ประเมินล่าสุด</Text>
                  </View>
                  <View style={styles.DateTextContainer}>
                    <Text style={styles.DateText}>0000</Text>
                  </View>
                </View>

                {/* ข้อ */}
                <View style={styles.NoHeaderContainer}>
                <View style={styles.NoHeader}>
                    <Text style={styles.NoHeaderText}>ข้อ</Text>
                </View>
                <View style={styles.NoContainer}>
                    <Text style={styles.NoText}>00</Text>
                </View>
                </View>
            </View>
            {/* อายุล่าสุด */}
            <View style={styles.DevAgeContainer}>
              <View style={styles.DevAgeHeader}>
                <Text style={styles.DevAgeHeaderText}>อายุพัฒนาการล่าสุด</Text>
              </View>
              <View style={styles.DevAgeTextContainer}>
                <Text style={styles.DevAgeText}>0000</Text>
              </View>
            </View>
         </View>
         </LinearGradient>
        </ScrollView>
      </View>


      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.backButton} onPress={goBack}>
            <Image
              source={require("../../assets/icons/back.png")}
              style={styles.Icon}
            />
          </Pressable>
          <Pressable onPress={whenGotoHome} style={styles.homeButton}>
            <Image
              source={require("../../assets/icons/home.png")}
              style={styles.Icon}
            />
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    //justifyContent: "center",
    alignItems: "center",
  },
  topSection: {
    flex: 1,
    width: "100%",
    maxHeight:220,
    alignItems: "center",
    //borderWidth:2,
  },
  midSection: {
    flex: 1,
    width: "95%",
    height: "60%",
    alignSelf: "center",  // ใช้แทน alignItems เพื่อไม่ให้ตัดเงา
    //marginTop: 10,
    //paddingBottom: "70%",
    //paddingVertical: 20,
    // borderRadius: 30,
    // shadowColor: "#b5b5b5",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.5,
    // shadowRadius: 10,
    // elevation: 5,
    //justifyContent: "center",
    //alignItems: "center",
    //borderWidth:2,
    
  },
  detailByAssess: {
    flexDirection: "column",
    width: "95%",
    height:"auto",
    marginHorizontal:10,
    marginBottom: 10,
    //borderWidth: 1,
    shadowColor: "#848484",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  
  HeaderOfAssessment:{
    width: "100%",
    paddingVertical:10,
    borderTopRightRadius: 20,
    borderTopLeftRadius:20,
    borderBottomRightRadius:0,
    borderBottomLeftRadius:0,
    backgroundColor: "#8DD9BD",
    //justifyContent: "center",
    //borderWidth:1,
    alignItems:"center",
  },
  HeaderOfAssessmentText:{
    color:"#fff",
    fontSize:17,
    fontWeight: "bold",
    
  },
  BodyOfAssesment:{
    flexDirection:"column",
    //borderWidth:1,
    width:370,
    
  },

  DateNoContainer:{
    flexDirection:"row",
    width:"100%",
    height:35,
    //borderWidth:1,
    marginTop:8,
  },

  DateContainer:{
    flexDirection:"row",
    //borderWidth:1,
    width:"65%",
    borderRadius:8,
    marginLeft:4,
  },

  DateHeader:{
    //flexDirection:"row",
    //borderWidth:1,
    alignItems:"center",
    justifyContent:"center",
    width:"50%",
    backgroundColor:"#CAEEE1",
    borderTopRightRadius: 0,
    borderTopLeftRadius:12,
    borderBottomRightRadius:0,
    borderBottomLeftRadius:12,
    
  },
  DateHeaderText:{
    color: "#000",
    textAlign: "center", 
    width: "100%", 
    paddingVertical:7,
    //fontWeight:"bold",
  },

  DateTextContainer: {
    backgroundColor: "#fff",
    width: "50%",
    borderTopRightRadius: 12,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 0,
    alignItems: "center",  // จัดให้อยู่ตรงกลางแนวนอน
    justifyContent: "center", // จัดให้อยู่ตรงกลางแนวตั้ง
    
  },
  
  DateText: {
    color: "#000",
    textAlign: "center", 
    width: "100%", 
    paddingVertical:7, 
    
  },

  NoHeaderContainer:{
    flexDirection:"row",
    //backgroundColor:"#fff",
    width:"31%",
    borderRadius:8,
    marginRight:4,
    marginLeft:"auto",
  },
  
  NoHeader:{
    //borderWidth:1,
    alignItems:"center",
    justifyContent:"center",
    width:"40%",
    backgroundColor:"#CAEEE1",
    borderTopRightRadius: 0,
    borderTopLeftRadius:12,
    borderBottomRightRadius:0,
    borderBottomLeftRadius:12,

  },
  
  NoHeaderText:{
    color: "#000",
    textAlign: "center", 
    width: "100%", 
    paddingVertical:7,
    //fontWeight:"bold",
  },

  NoContainer:{
    flexDirection:"row",
    width:"60%",
    backgroundColor:"#fff",
    borderTopRightRadius: 12,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 0,
    alignItems: "center",  // จัดให้อยู่ตรงกลางแนวนอน
    justifyContent: "center", // จัดให้อยู่ตรงกลางแนวตั้ง
  },

  NoText:{
    color: "#000",
    textAlign: "center", 
    width: "100%", 
    paddingVertical:7,
  },

  DevAgeContainer:{
    flexDirection:"row",
    //borderWidth:1,
    width:"98%",
    height:35,
    borderRadius:8,
    marginHorizontal:4,
    marginVertical:8,
    //backgroundColor:"#fff",
  },

  DevAgeHeader:{
    alignItems:"center",
    justifyContent:"center",
    width:"40%",
    backgroundColor:"#CAEEE1",
    borderTopRightRadius: 0,
    borderTopLeftRadius:12,
    borderBottomRightRadius:0,
    borderBottomLeftRadius:12,
  },
  DevAgeHeaderText:{
    color: "#000",
    textAlign: "center", 
    width: "100%", 
    paddingVertical:7,
    //fontWeight:"bold",
  },
  DevAgeTextContainer:{
    flexDirection:"row",
    width:"60%",
    backgroundColor:"#fff",
    borderTopRightRadius: 12,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 0,
    alignItems: "center",  // จัดให้อยู่ตรงกลางแนวนอน
    justifyContent: "center", // จัดให้อยู่ตรงกลางแนวตั้ง
  },

  DevAgeText:{
    color: "#000",
    textAlign: "center", 
    width: "100%", 
    paddingVertical:7,
  },





  bottomSection: {
    flexDirection: "row",
    width: "100%",
    paddingTop: 30,
    paddingBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  profileCardGirl: {
    flexDirection: "row",
    width: "90%",
    height: 130,
    alignItems: "center",
    backgroundColor: "#ffd7e5",
    padding: 15,
    borderRadius: 30,
    shadowColor: "#848484",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
    marginTop: 60,
    //borderWidth:2,
  },
  profileCardBoy: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    backgroundColor: "#c5e5fc",
    padding: 10,
    borderRadius: 30,
    shadowColor: "#848484",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
    marginTop: 70,
    //borderWidth:2,
  },
  profileIcon: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderRadius: 50,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  profileAge: {
    fontSize: 14,
    color: "#555",
  },
  detailsButtonGirl: {
    width: "85%",
    marginLeft: 10,
    marginTop: 5,
    backgroundColor: "#FFA2C4",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#ff7aaa",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  detailsButtonBoy: {
    width: "85%",
    marginLeft: 10,
    marginTop: 9,
    backgroundColor: "#98D4FF",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#76c6ff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  detailsName: {
    width: "85%",
    marginLeft: 10,
    marginTop: 5,
    backgroundColor: "#ffffff",
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginVertical: 2,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  detailsAge: {
    width: "85%",
    marginLeft: 10,
    marginTop: 5,
    backgroundColor: "#ffffff",
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginVertical: 2,
    borderRadius: 5,
    alignItems: "center",
  },
  detailsText: {
    fontSize: 12,
    color: "#FFF",
    padding: 2,
  },
  buttonContainer: {
    flexDirection: "row", // จัดปุ่มให้อยู่ในแถวเดียวกัน
    justifyContent: "space-around", // จัดปุ่มให้มีระยะห่างเท่ากัน
    paddingHorizontal: 20, // ระยะห่างด้านข้างของปุ่ม
    width: "80%",
    alignItems: "center",
  },
  backButton: {
    backgroundColor: "#cce9fe",
    padding: 10,
    borderRadius: 30,
    width: "45%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
    
  },
  homeButton: {
    backgroundColor: "#cce9fe",
    padding: 10,
    borderRadius: 30,
    width: "45%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  Icon: {
    width: 30,
    height: 30,
  },
  
  
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    bottom: 5,
    marginTop:10,
    marginBottom:5,
  },
});
