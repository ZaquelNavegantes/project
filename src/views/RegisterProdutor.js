import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { Text, View, Button, Image, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { css } from '../../assets/css/css';

export default function RegisterProdutor(props)
{
  
  const[fazenda, setFazenda]=useState(null);
  const[name, setName]=useState(null);
  const[email, setEmail]=useState(null);
  const[cpf, setCpf]=useState(null);
  const[password, setPassword]=useState(null);
  const[display, setDisplay]=useState('none');

  async function RegisterProdutor(){
    props.navigation.navigate('Login');
    let response = await fetch('http://192.168.43.166:3000/RegisterProdutor',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fazenda:fazenda,
        name:name,
        email:email,
        cpf:cpf,
        password:password,
      })
    });
  }

  async function redireciona(){
    await props.navigation.navigate('Login');
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
        </View>
        <View>
        <Text style={css.login__msg()}>
          Não foi possível cadastra usuário
        </Text>
        </View>
        <View style={css.login__form}>
          <TextInput
            style={css.login__input}
            placeholder="Digite o nome da sua fazenda"
            onChangeText={text=>setFazenda(text)}
          />
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
            onPress={()=>RegisterProdutor()}
            color={'#7EDA10'}
          />
          <Text style={css.login__button}>
            <Button
              title='Fazer login'
              onPress={
                ()=>props.navigation.navigate('Login')}
              //onPress={()=>props.navigation.navigate('RegisterProduct')}
              color={'#7EDA10'}
            />
          </Text>                               
        </View>
    </KeyboardAvoidingView>
  )
}