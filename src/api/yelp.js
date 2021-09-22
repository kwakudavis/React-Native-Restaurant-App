import React from 'react';
import axios from 'axios';


export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer Bo-9TMIail2eTvSkdHYel3JKoGN8P-BkSpaoiSynamcbku8dyttyMLrm9zU7Yvw-91SpXU1aSpQvnFsU_AFOzU_DnmCDlUEvDorkAnluNRSJivVWe1bSD5Nr0e9BYXYx'
  }
});