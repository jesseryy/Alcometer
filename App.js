import { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View, Alert } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { RadioButton, Switch } from 'react-native-paper';
import { BasicStyle, DarkStyle } from './styles/style';

export default function App() {

  const [style, setStyle] = useState(false)
  const [weight, setWeight] = useState(0);
  const [bot, setBot] = useState(0);
  const [h, setH] = useState(0);
  const [gender, setGender] = useState('Male');
  const [result, setResult] = useState(0);
  
  const currentStyle = style ? DarkStyle : BasicStyle;

  
  function calculateResult(){

    const lit = bot * 0.33;
    const gram = lit * 8 * 4.5;
    const burn = weight / 10;
    const gramsl = gram - burn * h;
    const weightAlert =() => {
      Alert.alert('Weight parameter can not be empty.')
    }
    
    if (weight === 0) {
      setResult(weightAlert)
    }

  
    if (gender === 'Male') {
      setResult(gramsl / (weight * 0.7))
    }
    else if (gender === 'Female'){
      setResult(gramsl / (weight * 0.6))
    }
  }

  function resultcolor(){
    if(result>= 0.5 && result <1){
      return{
        color: '#d8db04'
      }
    }
    if(result>=1){
      return{
        color: '#ff0000'
      }
    }
    if(result<0.5){
      return{
        color: '#2bff00'
      }
    }
  }

  if(result < 0){
    setResult(0)
  }


  return (
    <ScrollView style={currentStyle.container}>
      <View style={currentStyle.header}>
      <Switch
    value={style}
    onValueChange={ style => setStyle(style) }
    />
        <Text style={currentStyle.title}>
          Alcometer
        </Text>
      </View>
    <View styles={currentStyle.inputs}>
      <Text style={currentStyle.text}>Weight</Text>
    </View>
    <View>
      <TextInput 
      style={currentStyle.textInput}
      keyboardType='decimal-pad'
      value={weight.toString()}
      onChangeText={setWeight}/>
    </View>
    <View style={currentStyle.inputs}>
      <Text style={currentStyle.text}>Bottles</Text>
      <NumericInput
        value={bot}
        onChange={v => setBot(v)}
        minValue={0}
        containerStyle={{backgroundColor: currentStyle.containerColor}}
        rounded/>
       </View> 
       <View style={currentStyle.inputs}>
      <Text style={currentStyle.text}>Hours</Text>
      <NumericInput  
      value={h}
      onChange={v => setH(v)}
      minValue={0}
      containerStyle={{backgroundColor: currentStyle.containerColor}}
      rounded/>
    </View>
    <View style={currentStyle.inputs}>
      <RadioButton.Group value={gender} onValueChange={g => setGender(g)}>
        <View style={currentStyle.radioButton}>
        <RadioButton value='Male'
        style={currentStyle.radioButton}/>
        <Text style={currentStyle.text}>Male</Text>
        </View>
        <View style={currentStyle.radioButton}>
        <RadioButton value='Female'/>
        <Text style={currentStyle.text}>Female</Text>
        </View>
      </RadioButton.Group>
      </View>
      <View style={currentStyle.inputs}>
      <Text style={[currentStyle.result, resultcolor()]}>{result.toFixed(2)}</Text>
      </View>
      <View style={currentStyle.inputs}>
      <Pressable 
      style={currentStyle.button}
      onPress={calculateResult}>
        <Text style={currentStyle.buttonText}>Calculate</Text>
      </Pressable>
      </View>
    </ScrollView>
  );
  }

