import React from 'react';
import './App.css';

import { Article, Brand, Cta, Feature, Navbar } from './components';
import { Footer, Blog, Possibility, Features, Header, WhatGPT3 } from './containers';


function App() {
    return ( 
       <div className='App'>
         <div className='gradient-bg'>
            <Navbar/>
            <Header/>
         </div>
         <Brand/>
         <WhatGPT3/>
         <Features/>
         <Possibility/>
         <Cta/>
         <Blog/>
         <Footer/>
       </div> 
    );
}

export default App;