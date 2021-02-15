import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import {Modalize} from 'react-native-modalize';

const BottomModalPassword = ({modalizeRef}) => {
  const closeModal = () => {
    !modalizeRef.current?.close();
  };

  return (
    <Modalize
      ref={modalizeRef}
      snapPoint={350}
      handleStyle={styles.handleStyle}
      keyboardAvoidingBehavior={'height'}>
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>esqueceu sua senha?</Text>
        <Text style={styles.text}>
          enviaremos a recuperação para o seu email
        </Text>
        <TextInput
          style={styles.input}
          placeholder="email"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={closeModal}>
            enviar
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Modalize>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
  },
  text: {
    marginBottom: 30,
    fontSize: 25,
    color: '#b7b7b7',
    textAlign: 'center',
  },
  input: {
    width: '90%',
    color: '#b7b7b7',
    fontSize: 20,
    marginBottom: 40,
    borderBottomColor: '#b7b7b7',
    borderBottomWidth: 1,
  },
  button: {
    width: '60%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#6be965',
  },
  buttonText: {
    fontSize: 20,
  },
  handleStyle: {
    top: 30,
    backgroundColor: '#b7b7b7',
  },
});

export default BottomModalPassword;
