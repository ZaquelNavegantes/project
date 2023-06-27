import React from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { Text, View, Button, Image, TextInput, KeyboardAvoidingView, Platform, } from 'react-native';
import { css } from '../../assets/css/css';

export default function RegisterSelect(props)
{
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
            onPress={()=>props.navigation.navigate('Consumidor')}
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
            onPress={()=>props.navigation.navigate('Produtor')}
          />
        </View>
        </Text>
        
      </Text>
      </KeyboardAvoidingView>
  )
}