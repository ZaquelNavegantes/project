import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { Text, View, Button, Image, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { css } from '../../assets/css/css';

export default function RegisterConsumidor(props)
{

  const[name, setName]=useState(null);
  const[email, setEmail]=useState(null);
  const[cpf, setCpf]=useState(null);
  const[password, setPassword]=useState(null);

  async function RegisterConsumidor(){
    let response = await fetch('http://192.168.43.166:3000/RegisterConsumidor',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name:name,
        email:email,
        cpf:cpf,
        password:password,
      })
    });
    redireciona();
  }

  function redireciona(){
    props.navigation.navigate('Login');
  }

  return(
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[css.login__container, css.login__bg]}>
        <View style={css.login__logo}>
          <Text style={css.title}>
            <Image
              source={require('../../assets/img/icon.png')}
            />
            AGRO
          </Text>
          <Text>
            {name} - {email} - {cpf} - {password}
          </Text>
        </View>
        <View>
        <Text style={css.login__msg()}>
          Usuário ou senha inválidos
        </Text>
        </View>
        <View style={css.login__form}>
          <TextInput
            style={css.login__input}
            placeholder="Digite seu nome"
            onChangeText={text=>setName(text)}
          />
          <TextInput
            style={css.login__input}
            placeholder="Digite seu email"
            onChangeText={text=>setEmail(text)}
          />
          <TextInput
            style={css.login__input}
            placeholder="Digite seu cpf"
            onChangeText={text=>setCpf(text)}
          />
          <TextInput
            style={css.login__input}
            placeholder="Digite sua senha"
            secureTextEntry={true}
            onChangeText={text=>setPassword(text)}
          />
            <Button
              title='Cadastrar'
              onPress={()=>RegisterConsumidor()}
              //onPress={()=>props.navigation.navigate('Categorias')}
              color={'#7EDA10'}
            />
          <Text style={css.login__button}>
            <Button
              title='Fazer login'
              onPress={()=>props.navigation.navigate('Login')}
              color={'#7EDA10'}
            />
          </Text>
        </View>
    </KeyboardAvoidingView>
  )
}