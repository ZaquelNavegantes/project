import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { Text, View, Button, Image, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { css } from '../../assets/css/css';

export default function ScreenSelect(props)
{
  /*
  const[email, setEmail]=useState('.com');
  const[temp, setTemp]=useState('aqui');

  async function autentication(){
    let response = await fetch('http://192.168.43.166:3000/ScreenSelect',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email:email
      })
    });
  }

  setTemp('afdosjfosjdfo');

  */
  return(
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[css.login__container, css.login__bg]}>
      <View>
        <Text style={css.title}>
          <Image
            source={require('../../assets/img/icon.png')}
          />
          AGRO
        </Text>
        <Text></Text>
      </View>
      <Text style={css.register__logo}>
        <Text>
        <View style={css.register__space}>
          <Image
            source={require('../../assets/img/consumidor.png')}
            style={css.logo}
          />
          <Button
            title='Consumidor'
            color={'#7EDA10'}
            onPress={()=>props.navigation.navigate('Categorias')}
          />
        </View>
        </Text>
        <Text>
        <View style={css.register__space}>
        <Image
            source={require('../../assets/img/produtor.png')}
            style={css.logo}
          />
          <Button
            title='Produtor'
            color={'#7EDA10'}
            onPress={()=>props.navigation.navigate('MenuProductCopy')}
          />
        </View>
        </Text>
        
      </Text>
      </KeyboardAvoidingView>
  )
}