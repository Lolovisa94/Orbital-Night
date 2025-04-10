import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/layout';
import { ThemeProvider } from '@mui/material';
import Theme from './theme';
import Home from './components/home';


function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/api') // Call your Express server
            .then((response) => response.json())
            .then((data) => setMessage(data.message))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <ThemeProvider theme={Theme}>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                    </Routes>
                </Layout>
            </Router>
      </ThemeProvider>
    );
}

export default App;