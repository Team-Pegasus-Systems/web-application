import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInPage from '../pages/auth/signin';
import SignUpPage from '../pages/auth/signup';
import HomePage from '../pages/home/home';

export class PageRoutes extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/signin' element={<SignInPage />} />
                    <Route path='/signup' element={<SignUpPage />} />
                </Routes>
            </Router>
        )
    }
}

export default PageRoutes