import React from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { Text, View, Button, Image, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { css } from '../../assets/css/css';


export default function Home(props)
{
  console.log(props)
  return(
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={[css.login__container, css.login__bg]}>
      <View>
        <Text style={css.title}>
          DO CAMPO PARA CIDADE
        </Text>
        <Text style={css.home__logo}>
          <Image
            source={require('../../assets/img/iconBackground.png')}
          />
        </Text>
        <Text style={css.login__button}>
        <Button
          title='Começar'
          onPress={()=>props.navigation.navigate('Login')}
          color={'#7EDA10'}
        />
        </Text>
      
        <Text style={css.textgreen}>
          Semeamos tecnologia para você colher mais vida no campo
        </Text>    
      </View>
    </KeyboardAvoidingView>

  )
}