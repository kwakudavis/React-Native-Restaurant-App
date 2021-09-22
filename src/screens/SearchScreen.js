import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  ////////// Similar to component did mount, it Runs the arrow function exactly one time after rendering
  //useEffect(()=>{
  // searchApi('pasta');
  //}, []);

  ////////// Similar to component did mount, it Runs the arrow function exactly one time after rendering, or anytime the value changes
  /** 
useEffect(()=>{
    searchApi('pasta');
}, [term]);
*/
  const filterResultsByPrice = (price) => {
    // price == '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    //flex 1 property was used to fit view onto the present screen or you can use an empty tag '<>', and react native will allow elements to show in harmony.
    //<View style={{flex:1}}>

    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text> {errorMessage} </Text> : null}

      <ScrollView>

        <ResultsList
          
          results={filterResultsByPrice('$')}
          title="Cost Effective"
        />
        <ResultsList

          results={filterResultsByPrice('$$')}
          title="Bit Pricier"
        />
        <ResultsList
          
          results={filterResultsByPrice('$$$')}
          title="Bit Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
