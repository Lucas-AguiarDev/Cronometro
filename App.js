// Importar bibliotecas e componentes para o projeto
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

// Importar a estilizaçao do projeto
import { Styles, ImageLogo, Botoes } from './src/Style/Index';

// Criar classes para renderizar  no projeto
export default class App extends Component {

  state = {
    botaoLeft: 'INICIAR',
    botaoRight: 'ZERAR',
    contador: 0,
    temporizador: null,
    ultimaVolta: 0
  }

  iniciar = () => {
    if (this.temporizador != null) {
      clearInterval(this.temporizador)
      this.temporizador = null
      this.setState({botaoLeft: 'INICIAR'})
    }
    else {
      this.temporizador = setInterval(() => { this.setState({ contador: this.state.contador + 1 }) }, 1000)
      this.setState({botaoLeft: 'PAUSAR'})
      this.setState({botaoRight: 'SALVAR E ZERAR'})
    }
    
  }

  zerar = () => {
    if (this.temporizador != null) {
      clearInterval(this.temporizador)
      this.temporizador = null
    }
    this.setState({ultimaVolta: this.state.contador})
    this.setState({contador: 0})

    
  }

  render() {

    // Caminho da imagem Logo
    let LogoLocal = require('./src/Images/LogoCronometro.png')

    return (

      <View style={[Styles.ClassePai, Styles.Alinhamento]}>

        <Image
          style={[ImageLogo.Logo, ImageLogo.Alinhamento]}
          source={LogoLocal}
        />

        <Text style={[Styles.TextoContador]}>{this.state.contador} s</Text>

        <View style={[Styles.ClassePai2]}>
          <TouchableOpacity style={[Botoes.Botao]} onPress={this.iniciar}>
            <Text>{this.state.botaoLeft}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[Botoes.Botao]} onPress={this.zerar}>
            <Text>{this.state.botaoRight}</Text>
          </TouchableOpacity>
        </View>


        <ScrollView style={[Styles.Scroll]}>
          <Text style={[Styles.ScrollTitulo]}>VOLTAS REGISTRADAS</Text>

          <Text style={[Styles.ScrollTitulo]}>ÚLTIMA VOLTA REGISTRADA:     {this.state.ultimaVolta}</Text>
        </ScrollView>

      </View>
    )
  }
}

