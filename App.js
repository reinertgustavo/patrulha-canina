import * as React from 'react';
import { Appbar, TextInput, Button, IconButton, Colors } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export default class MyComponent extends React.Component {

  _foraBolsonaro = () => alert("#ForaBolsonaro");

  render() {
    return (
      <>
        {/* HEADER DO TOPO */}
        <Appbar.Header>
          <Appbar.Content
            title="Patrulha da Aglomeração"
          />
        </Appbar.Header>
        {/* BOTÃO CÂMERA */}
        <View style={styles.container}>
          <IconButton style={styles.iconbutton}
            icon="camera"
            color={Colors.red500}
            size={75}
            onPress={this._foraBolsonaro}
          />
          {/* INPUT ENDEREÇO */}
          <TextInput style={styles.input}
            label='Endereço'
          />
          {/* MAP */}
          <MapView style={styles.map}></MapView>
          {/* INPUT NÚMERO DE PESSOAS */}
          <TextInput style={styles.input}
            label='Número de pessoas'
          />
          {/* BOTÃO ALERTAR AUTORIDADES */}
          <Button mode="contained" onPress={this._foraBolsonaro} style={styles.button}>
            Notificar Autoridade
          </Button>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: "80%",
  },
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  iconbutton: {
    marginTop: 10
  },
  button: {
    marginTop: 20
  },
  map: {
    margin: "5%",
    width: "80%",
    height: "40%"
  }
}) 