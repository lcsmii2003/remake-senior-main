import React, { FC, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    ImageBackground,
    ScrollView,
} from "react-native";
import {
    useNavigation,
    NavigationProp,
    useFocusEffect,
} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoadingScreenBaby } from "../../LoadingScreen";

// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import {
    Child,
    calculateAge,
    AssessmentDetails,
}
    from "../../../components/page/PR/HomePR";
import { LinearGradient } from "expo-linear-gradient";

export const HowToUse: FC = () => {
    const navigation = useNavigation<NavigationProp<any>>();
    const [children, setChildren] = useState<Child[]>([]); // กำหนดประเภทเป็น array ของ Child
    const [assessmentDetails, setAssessmentDetails] = useState<
        AssessmentDetails[]
    >([]);
    const [loading, setLoading] = useState<boolean>(true);

    useFocusEffect(
        React.useCallback(() => {
            const fetchChildDataForParent = async () => {
                try {
                    const parent_id = await AsyncStorage.getItem("userId");
                    const token = await AsyncStorage.getItem("userToken");

                    if (!parent_id) {
                        console.error("Parent ID is missing.");
                        return;
                    }

                    setLoading(true);
                    const response = await fetch(
                        `https://senior-test-deploy-production-1362.up.railway.app/api/childs/get-child-data?parent_id=${parent_id}`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );

                    if (response.ok) {
                        const jsonResponse = await response.json();

                        if (jsonResponse.children) {
                            const updatedChildren: Child[] = jsonResponse.children.map(
                                (child: Child) => {
                                    const { years, months } = calculateAge(child.birthday);
                                    const imageUrl = `https://senior-test-deploy-production-1362.up.railway.app/${child.childPic}`;
                                    return {
                                        ...child,
                                        age: `${years} ปี ${months} เดือน`,
                                        childPic: imageUrl,
                                    };
                                }
                            );

                            setTimeout(() => {
                                setChildren(updatedChildren);
                                setLoading(false);
                            }, 100); // set delay

                            const allAssessments = jsonResponse.children.map(
                                (child: any) => child.assessments || []
                            );
                            setAssessmentDetails(allAssessments.flat());
                            console.log("Assessments fetched:", allAssessments);
                        } else {
                            console.log("No children found.");
                            setChildren([]);
                            setAssessmentDetails([]);
                            setLoading(false);
                        }
                    } else {
                        console.error(
                            `Error fetching data: ${response.status} ${response.statusText}`
                        );
                        setLoading(false);
                    }
                } catch (error) {
                    console.error("Error fetching child data:", error);
                    setLoading(false);
                }
            };

            fetchChildDataForParent();
        }, [])
    );

    // === ( LoadingScreen ) ===
    if (loading) {
        return <LoadingScreenBaby />;
    }

    const whenGotoAddChild = () => {
        navigation.navigate("addchild");
    };

    const whenGotoDetail = (child: Child) => {
        navigation.navigate("childdetail", { child });
    };

    const whenGotoAssessment = (child: Child) => {
        navigation.navigate("assessment", { child });
    };

    // navigate goBack
    const goBack = () => {
        navigation.goBack();
    };

    return (
        <ImageBackground
            source={require("../../../assets/background/bg2.png")}
            style={styles.background}
        >
            <Text style={styles.header}>คู่มือการใช้งาน</Text>
            <View style={styles.midSection}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.ScrollView}
                >
                    <View style={styles.howtousesection}>
                        <Image
                            source={require("../../../assets/images/howtouse.png")}
                            style={styles.howtouseImage}
                            resizeMode="contain"
                        />
                    </View>
                </ScrollView>

                
            </View>
            {/* Bottom Section */}
            <View style={styles.buttonContainer}>
                <Pressable style={styles.backButton} onPress={goBack}>
                    <Image
                        source={require("../../../assets/icons/back.png")}
                        style={styles.Icon}
                    />
                </Pressable>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    Container: {
        width: "100%",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 20,
        flexDirection: "row",
        //borderWidth: 2,
    },
    ScrollView: {
        width: "100%",
        //borderWidth: 2,
        //borderRadius: 30,
    },
    midSection: {
        width: "95%",
        height: "70%",
        //marginTop: 5,
        //marginBottom: 15,
        //flexDirection: "row",
        //alignItems: "center",
        justifyContent: "center",
        //borderWidth: 2,
    },

    howtousesection: {
        alignItems: "center",
        width: "100%",
        height: "auto",
        //borderWidth:1,
    },
    howtouseImage: {
        width: "100%",
        height: 918,
        //borderRadius:30,

    },
    bottomSection: {
        width: "auto",
        height: "15%",
        paddingTop: 30,
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        alignItems: "center",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 80,
        marginBottom: 20,
    },
    buttonContainer: {
        position: "absolute",
        bottom:40,
        flex:1,
        alignItems:"center",
        paddingHorizontal: 20,
        width: "80%",
        //borderWidth:1,
    },
    backButton: {
        backgroundColor: "#cce9fe",
        padding: 10,
        borderRadius: 30,
        width: "60%",
        alignItems: "center",
    },
    Icon: {
        width: 30,
        height: 30,
    },

    // ----------------------------------------------------------------------------------
    IntroContainer: {
        width: "95%",
        marginLeft: 4,
        marginTop: 5,
        backgroundColor: "#ffffff",
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    profileCardIntro: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#000",
        padding: 10,
        borderRadius: 30,
        width: "90%",
        height: 130,
        marginHorizontal: "auto",
        marginTop: 10,
    },
    detailButtonIntro: {
        width: "80%",
        marginLeft: 18,
        marginTop: 10,
        backgroundColor: "#B2AAFF",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 6,
        paddingVertical: 5,
        paddingHorizontal: 8,
        borderRadius: 25,
        alignItems: "center",
    },
    detailTextIntro: {
        fontSize: 14,
        color: "#fff",
        padding: 2,
    },
    TextIntro: {
        fontSize: 16,
        fontWeight: "bold",
    },
});
