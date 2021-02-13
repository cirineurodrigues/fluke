import React, {useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import BottomModalPassword from '../BottomModalPassword';

import {Container} from './styles';

const FormLogin = ({navigation}) => {
  const modalizeRef = useRef(null);

  const openModal = () => {
    modalizeRef.current?.open();
  };

  return (
    <Container>
      <View style={styles.logo}>
        <View style={styles.circle} />
        <Text style={styles.fluke}>fluke</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="email"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TextInput
          style={styles.input}
          placeholder="senha"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TouchableOpacity onPress={openModal}>
          <Text style={styles.password}>esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={styles.buttonText}>entrar</Text>
      </TouchableOpacity>
      <BottomModalPassword modalizeRef={modalizeRef} />
    </Container>
  );
};

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    marginRight: 5,
    marginTop: 12,
    borderRadius: 50,
    backgroundColor: '#6be965',
  },
  fluke: {
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  button: {
    width: screenWidth,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#6be965',
  },
  buttonText: {
    fontSize: 25,
    letterSpacing: 1,
  },
  formContainer: {
    width: '90%',
    flex: 3,
    marginBottom: 70,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    color: '#b7b7b7',
    fontSize: 20,
    marginBottom: 40,
    borderBottomColor: '#b7b7b7',
    borderBottomWidth: 1,
  },
  password: {
    fontSize: 20,
    color: '#b7b7b7',
    borderBottomColor: '#b7b7b7',
    borderBottomWidth: 1,
  },
});

export default FormLogin;
