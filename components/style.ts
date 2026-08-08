import { StyleSheet } from "react-native"

export const theme = {
    background: '#OAOAOA',
    tint: 'yellow',
    text: 'white',
    button: '#333333',
}

export const styles = StyleSheet.create({
    containerButton: {
        backgroundColor: theme.button,
        height: 60,
        width: "90%",
        margin: 16,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    titleButton: {
        fontSize: 20,
        color: theme.text,
        fontWeight: "600",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: theme.text,
    }
})