import React from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { Text, View, Button, TextInput } from 'react-native';
import { css } from './assets/css/css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/views/Home';
import Login from './src/views/Login';
import RecoverPassword from './src/views/RecoverPassword';
import RegisterConsumidor from './src/views/RegisterConsumidor';
import RegisterProdutor from './src/views/RegisterProdutor';
import RegisterSelect from './src/views/RegisterSelect';
import MenuProduct from './src/views/MenuProduct';
import Categories from './src/views/Categories';
import RegisterProduct from './src/views/RegisterProduct';
import EditProduct from './src/views/EditProduct';
import DeleteProduct from './src/views/DeleteProduct';
import ConsultProduct from './src/views/ConsultProduct';
import ListHortifruti from './src/views/ListHortifruti';
import ListLaticinio from './src/views/ListLaticinio';
import ListCarne from './src/views/ListCarne';
import ListNoz from './src/views/ListNoz';
import ScreenSelect from './src/views/ScreenSelect';
import MenuProductCopy from './src/views/MenuProductCopy';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown:false}} component={Home} />
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen name="Recuperar senha" options={{headerShown:false}} component={RecoverPassword} /> 
        <Stack.Screen name="Consultar produto" options={{headerShown:false}} component={ConsultProduct} /> 
        <Stack.Screen name="Excluir produto" options={{headerShown:false}} component={DeleteProduct} /> 
        <Stack.Screen name="Editar produto" options={{headerShown:false}} component={EditProduct} /> 
        <Stack.Screen name="Cadastrar produto" options={{headerShown:false}} component={RegisterProduct} /> 
        <Stack.Screen name="Categorias" options={{headerShown:false}} component={Categories} /> 
        <Stack.Screen name="Produto" options={{headerShown:false}} component={MenuProduct} /> 
        <Stack.Screen name="Usuario" options={{headerShown:false}} component={RegisterSelect} /> 
        <Stack.Screen name="Produtor" options={{headerShown:false}} component={RegisterProdutor} /> 
        <Stack.Screen name="Consumidor" options={{headerShown:false}} component={RegisterConsumidor} /> 
        <Stack.Screen name="Hortifruti" options={{headerShown:false}} component={ListHortifruti} /> 
        <Stack.Screen name="Laticinio" options={{headerShown:false}} component={ListLaticinio} /> 
        <Stack.Screen name="Carnes" options={{headerShown:false}} component={ListCarne} /> 
        <Stack.Screen name="Nozes" options={{headerShown:false}} component={ListNoz} /> 
        <Stack.Screen name="ScreenSelect" options={{headerShown:false}} component={ScreenSelect}/>
        <Stack.Screen name="MenuProductCopy" options={{headerShown:false}} component={MenuProductCopy}/>        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


