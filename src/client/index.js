import React from 'react';
import ReactDom from 'react-dom';
import './assets/css/index.css'

const template = <div className="home">Hello <img src="/assets/images/logo.jpeg"/></div>
ReactDom.render(template, document.getElementById('root'));

