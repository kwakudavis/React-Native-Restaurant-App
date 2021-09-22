import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';
import  {withNavigation} from 'react-navigation';

/////Navigation wrapper has been wrapped around component, essentially, this is 
//just like passing the navigation prop to the Result List component in order to 
//enable it to direct a navigation to another screen

const ResultsList = ({title, results, navigation}) => {
  if(!results.length){
    return null;
  }
    return(
       <View style={styles.container}>
          
      <Text style={styles.title}>{title}</Text>
  <FlatList
   showsHorizontalScrollIndicator={false}
   horizontal = {true}
   data={results}
   keyExtractor={(results)=>results.id}
   renderItem = {({item}) => {
      return (
        
        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
        <ResultsDetail result ={item}/>
        </TouchableOpacity>
    );
   }}
   />
    </View>);

};

const styles= StyleSheet.create({

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,

  },

  container: {
    marginBottom:  10
  }
});


export default withNavigation(ResultsList);