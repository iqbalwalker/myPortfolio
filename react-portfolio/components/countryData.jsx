import React, { Component, useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import CountryFlag from 'react-country-flag';


const Countries = ({count, showCountries}) => {
    const [countryData, setCountryData] = useState({});
    const [err, setErr] = useState('No data');
    const [location, setLocation] = useState({});
   
    const getCoordinates = ()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                setLocation({latitude : position.coords.latitude, longitude : position.coords.longitude});
            });
        }
        
    };
    async function fetchCountries(){
        
        try{
        
        const lat = location.latitude, long = location.longitude;
        const API_KEY = "bae0a696bcc344d28f3eb4933820da14";
        const url = 'https://api.opencagedata.com/geocode/v1/json?q=' + lat + '+' + long +'&key='+ API_KEY;
        const response = await axios.get(url);
        setCountryData(response.data);
        console.log(url);
        }catch(error){
          const errmsg = error.message;
          setErr(errmsg);
        }
        
    };
  
    
    useEffect(()=>{
    getCoordinates();
    if (count > 2){
        fetchCountries();
    }else{
        getCoordinates();
    }
    
   
    },[]);
   
    const data = [countryData.results];
    return ( 
      
        <div>
        {(data.length) !== 0 ? (
        <>
        <h1><CountryFlag className="" countryCode={countryData.results[0].components['ISO_3166-1_alpha-2']} svg />
        {countryData.results[0].components['ISO_3166-1_alpha-2']}</h1>
        </>)
        : (<p>{err}</p>)}
      </div>
     );
}
 
export default Countries;