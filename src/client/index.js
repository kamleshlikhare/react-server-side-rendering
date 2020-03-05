import React from 'react';
import ReactDom from 'react-dom';
import './assets/css/index.css'
import logo from './assets/images/boat.png'

const template = <div className="home">Hello <img src={logo}/></div>
ReactDom.render(template, document.getElementById('root'));

