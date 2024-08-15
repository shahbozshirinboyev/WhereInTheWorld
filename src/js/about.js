import '../css/main.css';
import './mode';
import request from './request'
import { createCountrieInfo } from './updateUI';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const country = urlParams.get('country');
const countryAPI = `https://restcountries.com/v3.1/name/${country}`;

request(countryAPI).then((data) => {
    createCountrieInfo(data[0]);
}).catch((err) => {
    alert(err.message)
})
