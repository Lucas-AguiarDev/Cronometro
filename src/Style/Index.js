// Importar a biblioteca do StyleSheet
import { StyleSheet } from "react-native";

// Criar variaveis para a estilizaçao 
const Styles = StyleSheet.create({
    ClassePai: {
        flex: 1,
        backgroundColor: 'black'
    },

    ClassePai2: {
        flexDirection: 'row'
    },

    Alinhamento: {
        justifyContent: 'center',  
        alignItems: 'center'
    },

    TextoContador: {
        fontSize: 50,
        color: 'white',
        opacity: .5,
        marginTop: 40,
        fontWeight: 'bold'
    },

    Scroll: {
        flex: 1,
    },

    ScrollTitulo: {
        color: 'white',
        fontSize: 30,
        margin: 10
    },

    ScrollTexto: {
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const ImageLogo = StyleSheet.create({
    Logo: {
        width: 250,
        height: 250,
        margin: 30
    }
})

const Botoes = StyleSheet.create({
    Botao: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 50,
        flex: 1,
        borderRadius: 20,
        margin: 20,

    }
})

export { Styles, ImageLogo, Botoes };