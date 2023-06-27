import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { Text, View, Button, Image, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { css } from '../../assets/css/css';

export default function ConsultProduct()
{

  const[name, setName]=useState();

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
        <Text>{name}</Text>
      </View>
      <View style={css.login__form}>
      <TextInput
        style={css.login__input}
        placeholder="Digite o nome do produto"
        onChangeText={text=>setName(text)}
      />
      <Button
        title='Buscar'
        color={'#7EDA10'}
      />        
      </View>
    </KeyboardAvoidingView>
  )
}