import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import './App.css';
import ListView from './ListView';
import Profile from './Profile';
import {fetchData} from './Api';

import {Route, Switch} from 'react-router-dom';

// This function creates a datapoint object, with
// the first row of the spreadsheet as its fields
const createObject = (headers, arr) => {
  let obj = {};
  headers.forEach((header, i) => {
    if (header.toLowerCase() == 'comments') // remove all comments fields to avoid name clash
      return;
    obj[header] = arr[i];
  });
  return obj;
}


function App() {


  const [data, setData] = useState([]);

  const updateFormsData = () => {
    fetchData().then((ogData) =>{
      const headers = ogData.values.shift();
      const newdata = ogData.values.map(elem => createObject(headers, elem));
      setData(newdata);
      console.log('arr of arr: ', newdata);
    })
  };

  // update once initially
  useEffect(() => {
    updateFormsData();
    setInterval(updateFormsData, 50000); // every fifty secs periodic update
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Project Title</h1>
        </header>
        <Switch>
          {/* default page */}
          <Route exact path='/' component = {() => <ListView items={data}/>}/>
          {/* matches `/user/:id` as well */}
          <Route path='/user' component = {Profile}/>
        </Switch>
      </div>
  );
}

export default App;
