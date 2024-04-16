import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>hello world. i am bhumika</Text>
            <Button title="Learn More" color="#841584" onPress={() => console.log("Button clicked")}>
                Click me
            </Button>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
