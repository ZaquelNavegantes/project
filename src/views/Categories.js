import React from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { Text, View, Button, Image, TextInput, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import { css } from '../../assets/css/css';

export default function Categories(props)
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
                source={require('../../assets/img/icon.png')}
                style={css.logo}
              />
              <Button
                title='Hortifruti'
                color={'#7EDA10'}
                onPress={()=>props.navigation.navigate('Hortifruti')}
              />
            </View>
          </Text>
          <Text>
            <View style={css.register__space}>
              <Image
                source={require('../../assets/img/icon.png')}
                style={css.logo}
              />
              <Button
                title='Laticínios'
                color={'#7EDA10'}
                onPress={()=>props.navigation.navigate('Laticinio')}
              />
            </View>
          </Text>
        </Text>
        
        <Text style={css.register__logo}>
          <Text>
            <View style={css.register__space}>
              <Image
                source={require('../../assets/img/icon.png')}
                style={css.logo}
              />
              <Button
                title='Carnes'
                color={'#7EDA10'}
                onPress={()=>props.navigation.navigate('Carnes')}
              />
            </View>
          </Text>
          <Text>
            <View style={css.register__space}>
              <Image
                source={require('../../assets/img/icon.png')}
                style={css.logo}
              />
              <Button
                title='Nozes'
                color={'#7EDA10'}
                onPress={()=>props.navigation.navigate('Nozes')}
              />
            </View>
          </Text>
        </Text>        
      </View>
    </KeyboardAvoidingView>
    
  )
}