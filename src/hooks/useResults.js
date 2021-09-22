import {useEffect, useState} from 'react';
import yelp from '../api/yelp';


export default () => {


  const [results, setResults] = useState([]);
  const [errorMessage,setErrorMessage] = useState('');


  const searchApi = async (searchTerm) => {

    try {


       const response = await  yelp.get('/search',{
     params: {
       limit:50,
       term:searchTerm,
       location: 'new york'
     }
   });

     setResults(response.data.businesses);
      
    } catch(err){

     setErrorMessage('something went wrong');

    }
  
   
  }


////////// Similar to component did mount, it Runs the arrow function exactly one time after rendering 
useEffect(()=>{
    searchApi('pasta');
}, []);


return [searchApi, results, errorMessage];

};