import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  getEmailThunk,
  getPackageInfoThunk,
  getUsageThunk,
} from '../../store/modules/user/thunk';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import BottomModalPassword from '../BottomModalPassword';

import {Container} from './styles';

const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Campo requerido'),
  password: yup.string().required('Campo requerido'),
});

const FormLogin = ({navigation}) => {
  const modalizeRef = useRef(null);
  const [showPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch();

  const {register, setValue, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema),
  });

  const openModal = () => {
    modalizeRef.current?.open();
  };

  const changeState = () => {
    return setShowPassword(!showPassword);
  };

  useEffect(() => {
    register({name: 'email'});
    register({name: 'password'});
  }, [register]);

  const onSubmit = (data) => {
    dispatch(getEmailThunk(data.email));
    dispatch(getPackageInfoThunk(data.email, navigation));
    dispatch(getUsageThunk(data.email, '2020-08-14', '2020-08-21'));
  };

  return (
    <Container>
      <View style={styles.logo}>
        <View style={styles.circle} />
        <Text style={styles.fluke}>fluke</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={[styles.input, errors.email && styles.borderError]}
          placeholder="email"
          autoCorrect={false}
          onChangeText={(value) => setValue('email', value)}
        />
        <Text style={styles.textError}>{errors.email?.message}</Text>
        <View style={styles.passwordInput}>
          <TextInput
            style={[styles.input, errors.password && styles.borderError]}
            placeholder="senha"
            secureTextEntry={showPassword}
            keyboardType={'number-pad'}
            autoCorrect={false}
            onChangeText={(value) => setValue('password', value)}
          />
          <Text style={styles.textError}>{errors.password?.message}</Text>
          <TouchableOpacity style={styles.iconButton} onPress={changeState}>
            {showPassword ? (
              <MaterialCommunityIcons
                name="eye-off-outline"
                color={'#b7b7b7'}
                size={26}
              />
            ) : (
              <MaterialCommunityIcons
                name="eye-outline"
                color={'#b7b7b7'}
                size={26}
              />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={openModal}>
          <Text style={styles.password}>esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
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
    fontSize: 20,
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
    marginBottom: 5,
    borderBottomColor: '#b7b7b7',
    borderBottomWidth: 1,
  },
  borderError: {
    borderBottomColor: '#F00',
  },
  textError: {
    width: '100%',
    fontWeight: 'bold',
    marginBottom: 35,
    color: '#f00',
    textAlign: 'left',
  },
  passwordInput: {
    width: '100%',
  },
  iconButton: {
    position: 'absolute',
    right: 20,
  },
  password: {
    fontSize: 20,
    color: '#b7b7b7',
    borderBottomColor: '#b7b7b7',
    borderBottomWidth: 1,
  },
});

export default FormLogin;
