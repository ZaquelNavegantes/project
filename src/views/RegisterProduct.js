import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { Text, View, Button, Image, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { css } from '../../assets/css/css';

export default function RegisterProduct()
{

  const[name, setName]=useState();
  const[description, setDescription]=useState();
  const[validity, setValidity]=useState();
  const[value, setValue]=useState();

  async function RegisterProduto(){
    let response = await fetch('http://192.168.43.166:3000/RegisterProduto',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name:name,
        description:description,
        validity:validity,
        value:value,
      })
    });
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
      <View style={css.login__form}>
        <TextInput
          style={css.login__input}
          placeholder="Digite o nome do produto"
          onChangeText={text=>setName(text)}
        />
        <TextInput
          style={css.login__input}
          placeholder="Digite uma descrição"
          onChangeText={text=>setDescription(text)}
        />
        <TextInput
          style={css.login__input}
          placeholder="Digite a validade do produto"
          onChangeText={text=>setValidity(text)}
        />
        <TextInput
          style={css.login__input}
          placeholder="Digite o valor unitário"
          onChangeText={text=>setValue(text)}
        />
          <Button
            title='Cadastrar'
            color={'#7EDA10'}
            onPress={()=>RegisterProduto()}
          />
      </View>
    </KeyboardAvoidingView>
  )
}