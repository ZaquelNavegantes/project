import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  input:{
    backgroundColor: '#D9D9D9',
    margin: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  title:{
    width: '100%',
    color: '#7EDA10',
    fontWeight: 'bold',
    alignSelf: "center",
    fontSize: 20,
  },
  home__logo:{
    width: '100%',
    fontWeight: 'bold',
    alignSelf: "center",
    paddingBottom: 50,
  },
  logo:{
    width: 100,
    height: 100,
    resizeMode:'contain',
    alignSelf: "center",
  },
  textgreen:{    
    color: '#7EDA10',
    textAlign: 'center',
    marginHorizontal: 75,
    fontSize: 18,
  },
  login__container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login__bg:{
    backgroundColor:"#7FFFD4",
  },
  login__logo:{
    resizeMode:'contain',
    padding: 30,
  },
  //  login__msg:(text='none')=>({
  login__msg:(text='none')=>({
    fontWeight: "bold",
    fontSize: 22,
    color: "red",
    marginTop: 10,
    marginBottom: 15,
    display: text,
  }),
  login__form:{
    width: "80%",
  },
  login__input:{
    backgroundColor:"#fff",
    fontSize: 20,
    padding: 7,
    marginBottom: 15,
    borderRadius: 10,
  },
  login__button:{
    padding: 10,
    alignSelf: "center",
  },
  register__logo:{
    padding:20,
  },
  register__space:{
    paddingHorizontal: 20,
  },
});

export {css};