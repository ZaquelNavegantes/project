import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { Text, View, Button, Image, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { css } from '../../assets/css/css';

export default function Login(props)
{

  const[display, setDisplay]=useState('none');
  const[email, setEmail]=useState(null);
  const[password, setPassword]=useState(null);

  //Envio de formulário de login

  
  async function sendForm(){
    let response = await fetch('http://192.168.43.166:3000/login',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email:email,
        password:password
      })
    });
      let json = await response.json();
      if(json === 'error'){
        setDisplay('flex');
        setTimeout(()=>{
          setDisplay('none');
        },5000);
      }else{
        props.navigation.navigate('ScreenSelect');
      }
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
          <Text style={css.login__msg(display)}>
            Usuário ou senha inválidos
          </Text>
        </View>
        <View style={css.login__form}>
          <TextInput
            style={css.login__input}
            placeholder="Digite seu email"
            onChangeText={text=>setEmail(text)}
          />
          <TextInput
            style={css.login__input}
            placeholder="Digite sua senha"
            secureTextEntry={true}
            onChangeText={text=>setPassword(text)}
          />
          <Button
            style={css.login__button}
            title='Entrar'
            onPress={()=>sendForm()
            //props.navigation.navigate('Home')
            }
            color={'#7EDA10'}
          />
          <Text style={css.login__button}>
            <Button
              title='Esqueci a senha'
              onPress={()=>props.navigation.navigate('Recuperar senha')}
              color={'#7EDA10'}
            />
          </Text>
          <Text style={css.login__button}>
            <Button
              title='Não tenho conta'
              onPress={()=>props.navigation.navigate('Usuario')}
              color={'#7EDA10'}
            />
          </Text>
        </View>
    </KeyboardAvoidingView>
  )
}