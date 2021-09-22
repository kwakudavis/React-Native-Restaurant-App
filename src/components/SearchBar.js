import React from  'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar  = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundstyle}>
        <Feather name="search" size={30} style={styles.iconStyle} />
        <TextInput placeholder="SEARCH"  style={styles.inputStyle
        
        }
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        onEndEditing={()=>{onTermSubmit()}}/>
    </View>
  );

};




const styles = StyleSheet.create({
  backgroundstyle : {
    backgroundColor: '#F0EEEE',
    height: 40,
    borderRadius:5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop:15,
    marginBottom:10
  },
  inputStyle: 
  {
  
    fontSize:18,
    borderColor: '#F0EEEE',
    flex:1
  

  },

  iconStyle:{
    fontSize:35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;
