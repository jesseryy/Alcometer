import { StyleSheet, StatusBar } from 'react-native';

const BasicStyle = StyleSheet.create({
    container: {
      marginTop: StatusBar.currentHeight + 5,
      flex: 1,
      backgroundColor: '#ffffff',
      textColor: '#000000',
    },
    header: {
      marginBottom: 15,
      height: 60,
      backgroundColor: '#11f8ed',
      flexDirection: 'row'
    },
    title: {
      fontWeight: 'bold',
      flex: 1,
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 5,
      textDecorationLine: 'underline'
    },
    textInput: {
      fontSize: 15,
      marginTop: 10,
      marginBottom: 10,
      padding: 5,
      width: 'auto',
      textAlign: 'center',
      backgroundColor: '#f0ecec',
      textDecorationLine: 'underline'
    },
    button: {
      margin: 50,
      flexDirection: "row",
      padding: 15,
      backgroundColor: "#11f8ed",
      width: 200,
      borderRadius: 15,
      borderWidth: 3,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      marginBottom: 20,
    },
    buttonText: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    inputs: {
      marginTop: 20,
      marginBottom: 20,
      alignItems: 'center',
    },
    radioButton: {
    alignItems: 'center',
    flexDirection: 'row',
    },
    text: {
    fontSize: 15,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'center'
    },
    result: {
    fontSize: 30,
    fontWeight: 'bold',
  
    },
  
    containerColor: '#11f8ed',
});

const DarkStyle = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight + 5,
    flex: 1,
    backgroundColor: '#000000',
    textColor: '#ffffff',
  },
  header: {
    marginBottom: 15,
    height: 60,
    backgroundColor: '#11f8ed',
    flexDirection: 'row'
  },
  title: {
    fontWeight: 'bold',
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    textDecorationLine: 'underline'
  },
  textInput: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    width: 'auto',
    textAlign: 'center',
    backgroundColor: '#f0ecec',
    textDecorationLine: 'underline'
  },
  button: {
    margin: 50,
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#11f8ed",
    width: 200,
    borderRadius: 15,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  inputs: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  radioButton: {
  alignItems: 'center',
  flexDirection: 'row',
  },
  text: {
  fontSize: 15,
  fontWeight: 'bold',
  textDecorationLine: 'underline',
  marginBottom: 10,
  marginTop: 10,
  color: '#ffffff',
  alignSelf: 'center'
  },
  result: {
  fontSize: 30,
  fontWeight: 'bold',

  },

  containerColor: '#11f8ed',
});

  export {BasicStyle, DarkStyle };