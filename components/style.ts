import { StyleSheet } from "react-native"

export const theme = {
    background: '#010101',
    tint: 'yellow',
    text: '#FFF',
    button: '#333333',
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.background,
        flex: 1,
        
    },
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
        fontWeight: "200",
        color: theme.text,
    },
    textInputContainer: {
        height: 50,
        backgroundColor: "#222",
        alignSelf: "stretch",
        paddingHorizontal: 16,
        marginTop: 10, 
        borderRadius: 8,
        color: theme.text,
    }
})