import React, { useState, useEffect }from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { Text, View, Button, Image, TextInput, KeyboardAvoidingView, Platform, } from 'react-native';
import { css } from '../../assets/css/css';

export default function RecoverPassword(props)
{
  
  const[email, setEmail]=useState();

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
        <Text>{email}</Text>
      </View>
      <View>
        <View>
          <TextInput
            style={css.login__input}
            placeholder="Digite seu email"
            onChangeText={text=>setEmail(text)}
          />
            <Button
              title='Enviar'
              color={'#7EDA10'}
            />
          
        </View>
        <View>
          <Text style={css.login__button}>
            <Button
              title='Fazer login'
              color={'#7EDA10'}
              onPress={()=>props.navigation.navigate('Login')}
            />
          </Text>      
          <Text style={css.login__button}>
            <Button
              title='Não tenho conta'
              color={'#7EDA10'}
              onPress={()=>props.navigation.navigate('Usuario')}
            />
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>    
  )
}