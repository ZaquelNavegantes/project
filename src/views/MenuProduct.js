import React from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { Text, View, Button, Image, TextInput, KeyboardAvoidingView, Platform, } from 'react-native';

import { css } from '../../assets/css/css';

export default function MenuProduct(props)
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
      
      <View>
      <Text style={css.register__logo}>
        <Text>
          <View style={css.register__space}>
            <Image
              source={require('../../assets/img/cadastrar.png')}
              style={css.logo}
            />
            <Button
              title='Cadastrar'
              color={'#7EDA10'}
              onPress={()=>props.navigation.navigate('Cadastrar produto')}
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
              title='Alterar'
              color={'#7EDA10'}
              onPress={()=>props.navigation.navigate('Editar produto')}
            />
          </View>
        </Text>
      </Text>
      
      <Text style={css.register__logo}>
        <Text>
          <View style={css.register__space}>
            <Image
              source={require('../../assets/img/consumidor.png')}
              style={css.logo}
            />
            <Button
              title='Consultar'
              color={'#7EDA10'}
              onPress={()=>props.navigation.navigate('Consultar produto')}
            />
          </View>
        </Text>
        <Text>
          <View style={css.register__space}>
            <Image
              source={require('../../assets/img/descartar.png')}
              style={css.logo}
            />
            <Button
              title='Excluir'
              color={'#7EDA10'}
              onPress={()=>props.navigation.navigate('Excluir produto')}
            />
          </View>
        </Text>
      </Text>
      </View>
    </KeyboardAvoidingView>
      
    
  )
}