import React from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { Text, View, Button, Image, TextInput, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import { css } from '../../assets/css/css';

export default function ListCarne()
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
    <ScrollView>
    <View>
      <Text style={css.register__logo}>
        <Text>
          <View style={css.register__space}>
            <Image
              source={require('../../assets/img/icon.png')}
              style={css.logo}
            />
            <Button
              title='item 4'
              color={'#7EDA10'}
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
              title='item 4'
              color={'#7EDA10'}
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
              title='item 4'
              color={'#7EDA10'}
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
              title='item 4'
              color={'#7EDA10'}
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
              title='item 4'
              color={'#7EDA10'}
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
              title='item 4'
              color={'#7EDA10'}
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
              title='item 4'
              color={'#7EDA10'}
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
              title='item 4'
              color={'#7EDA10'}
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
              title='item 4'
              color={'#7EDA10'}
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
              title='item 4'
              color={'#7EDA10'}
            />
          </View>
        </Text>
      </Text>
  </View>
  </ScrollView>
  </KeyboardAvoidingView>
  )
}