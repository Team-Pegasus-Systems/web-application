import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home/home';
import SignInPage from '../pages/auth/signin';
import SignUpPage from '../pages/auth/signup';
import Dashboard from '../pages/dashboard/dashboard';
import ViewBug from '../pages/bugs/viewBug';
import CreateBug from '../pages/bugs/createBug';
import UpdateBug from '../pages/bugs/updateBug';
import BugList from '../pages/bugs/bugList';
import CreateProject from '../pages/projects/createProject';
import UpdateProject from '../pages/projects/updateProject';
import ProjectList from '../pages/projects/projectList';
import ViewProject from '../pages/projects/viewProject';

export class PageRoutes extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    {/* Auth Routes */}
                    <Route path='/' element={<HomePage />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/signin' element={<SignInPage />} />
                    <Route path='/signup' element={<SignUpPage />} />
                    {/* Bug Management Routes */}
                    <Route path='/createBug' element={<CreateBug />} />
                    <Route path='/updateBug' element={<UpdateBug />} />
                    <Route path='/bugList' element={<BugList />} />
                    <Route path='/viewBug' element={<ViewBug />} />
                    {/* Project Management Routes */}
                    <Route path='/createProject' element={<CreateProject />} />
                    <Route path='/updateProject' element={<UpdateProject />} />
                    <Route path='/projectList' element={<ProjectList />} />
                    <Route path='/viewProject' element={<ViewProject />} />
                </Routes>
            </Router>
        )
    }
}

export default PageRoutes