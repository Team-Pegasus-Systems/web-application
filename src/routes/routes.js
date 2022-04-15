import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home/home';
import SignInPage from '../pages/auth/signin';
import SignUpPage from '../pages/auth/signup';
import Dashboard from '../pages/dashboard/dashboard';
import ViewBug from '../pages/bugManagement/viewBug';
import CreateBug from '../pages/bugManagement/createBug';
import UpdateBug from '../pages/bugManagement/updateBug';
import BugList from '../pages/bugManagement/bugList';

export class PageRoutes extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/signin' element={<SignInPage />} />
                    <Route path='/signup' element={<SignUpPage />} />
                    <Route path='/createBug' element={<CreateBug />} />
                    <Route path='/updateBug' element={<UpdateBug />} />
                    <Route path='/bugList' element={<BugList />} />
                    <Route path='/viewBug' element={<ViewBug />} />
                </Routes>
            </Router>
        )
    }
}

export default PageRoutes