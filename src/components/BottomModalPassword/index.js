import React, {useEffect} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Campo requerido'),
});

const BottomModalPassword = ({modalizeRef}) => {
  const {register, setValue, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    register({name: 'email'});
    register({name: 'password'});
  }, [register]);

  const closeModal = () => {
    !modalizeRef.current?.close();
  };

  const onSubmit = () => {
    closeModal;
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
          style={[styles.input, errors.email && styles.borderError]}
          placeholder="email"
          autoCorrect={false}
          onChangeText={(value) => setValue('email', value)}
        />
        <Text style={styles.textError}>{errors.email?.message}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handleSubmit(onSubmit)}>
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
    marginBottom: 5,
    borderBottomColor: '#b7b7b7',
    borderBottomWidth: 1,
  },
  borderError: {
    borderBottomColor: '#F00',
  },
  textError: {
    width: '90%',
    marginLeft: '5%',
    marginBottom: 35,
    fontWeight: 'bold',
    color: '#f00',
    textAlign: 'left',
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
