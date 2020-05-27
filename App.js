import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Appbar, TextInput, Button, IconButton, Colors } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';
import { getCurrentPositionAsync } from 'expo-location';
import Axios from 'axios';

export default class patrulhaCanina extends React.Component {

  constructor() {
    super()
    this.state = {
      initialPosition: {
        latitude: 48.8584,
        longitude: 2.2945,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      },
    }
  }

  foraBolsonaro = () => alert("#ForaBolsonaro");

  setLocation = () => {
    getCurrentPositionAsync({
      enableHighAccuracy: true
    }).then((coords) => {
      this.setState({
        initialPosition: {
          latitude: coords.coords.latitude,
          longitude: coords.coords.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        }
      })
    })
  }

  sendReport = () => {
    Axios.post("http://patrulhaaglomeracao.com.br/denuncia", {})
      .then(() => {
        this.foraBolsonaro
      })
  }

  render() {
    return (
      <>
        {/* HEADER DO TOPO */}
        <Appbar.Header>
          <Appbar.Content title="Patrulha da Aglomeração" />
        </Appbar.Header>
        {/* FIM HEADER DO TOPO */}
        <View style={styles.container}>
          <View style={styles.containerButtons}>
            <View style={styles.viewButtons}>
              <View style={styles.viewButtonCamera}>
                {/* BOTÃO CÂMERA */}
                <IconButton icon="camera" color={Colors.blue500} size={75} onPress={this.foraBolsonaro} />
              </View>
              <View style={styles.viewButtonMap}>
                {/* BOTÃO MAP */}
                <IconButton icon="map-marker" color={Colors.blue500} size={75} onPress={this.setLocation} />
              </View>
            </View>
          </View>
          <View style={styles.viewCameraMap}>
            <View style={styles.viewCamera}>
              {/* IMAGEM */}
              <Image style={styles.map} source={require('./assets/aglomeracao.jpg')} />
            </View>
            <View style={styles.viewMap}>
              {/* MAP */}
              <MapView style={styles.map}
                region={this.state.initialPosition}>
                <Marker coordinate={this.state.initialPosition} />
              </MapView>
            </View>
          </View>
          {/* INPUT NÚMERO DE PESSOAS */}
          <TextInput style={styles.input} label='Número de pessoas' />
          {/* BOTÃO ALERTAR AUTORIDADES */}
          <Button mode="contained" onPress={this.sendReport} style={styles.button}>Notificar Autoridade</Button>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: "80%",
    paddingHorizontal: 110
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerButtons: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  button: {
    marginTop: 20,
    width: "80%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center"
  },
  viewCameraMap: {
    margin: 20,
    width: "80%",
    height: "40%",
    flexDirection: "row",
  },
  viewCamera: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  viewMap: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  map: {
    width: "100%",
    height: "100%"
  },
  viewButtons: {
    flexDirection: "row",
    width: "80%"
  },
  viewButtonCamera: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  viewButtonMap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
}) 