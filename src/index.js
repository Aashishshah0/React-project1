import React from 'react';
import ReactDOM from 'react-dom/client';
import Ok from './nested'
import './index.css';
import {header} from './navbar.jsx';
function Astened() { 
    return <h2>BookChor</h2>
} 

function Main() {
    return (
        <div>
            <header></header>
            <Astened></Astened>
            <Ok></Ok>
            <Astened></Astened>
            <Ok></Ok>
            <Astened></Astened>
            <Ok></Ok>
            <Astened></Astened>
            <Ok></Ok>
            <Astened></Astened>
            <Ok></Ok>
            <Astened></Astened>
            <Ok></Ok>
            <Astened></Astened>
            <Ok></Ok>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (<Main></Main>);