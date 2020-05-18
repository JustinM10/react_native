import React from 'react';

import { StyleSheet, 
         Text, 
         View,
         TextInput,
         TouchableOpacity,
         Image 
} from 'react-native';

export default class RegForm extends React.Component {
  render() {
    return (
      <View style={styles.regform}>
        <View style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
         <Image source={require('../img/sumo.png')} 
              style={styles.Image}
              style={{width: '40%', height: 150, resizeMode : 'center', justifyContent:'center', alignItems: 'center' }}/>
        </View>

          <Text style={styles.header}> Sumo Registration </Text>

          <TextInput style={styles.TextInput} placeholder="First Name"
                      underlineColorAndroid={"transparent"} />
                      
          <TextInput style={styles.TextInput} placeholder="Last Name"
                      underlineColorAndroid={"transparent"} />

         <TextInput style={styles.TextInput} placeholder="Email"
                      underlineColorAndroid={"transparent"} />

          <TextInput style={styles.TextInput} placeholder="Password" secureTextEntry={true}
                      underlineColorAndroid={"transparent"} />

          <TouchableOpacity style={styles.button}>
              <Text style={styles.btntext}> Sign up </Text>
          </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
    alignSelf: 'stretch',    
  },

  header: {
    fontSize: 24,
    fontSize: 28,
    color: '#fff',
    paddingBottom: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 40,
    borderBottomColor: '#59cbbd',
    fontStyle: 'italic',
    borderBottomWidth: 1.5,
  },

  TextInput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 10,
    color: '#fff',
    borderBottomColor: 'orange',
    borderBottomWidth: 1,
  },
  
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
  },

  btntext: {
    color: '#fff',
    fontWeight: 'bold',
  },
  
  image: {
    justifyContent: 'center',
    alignSelf: 'center'
  }
});
