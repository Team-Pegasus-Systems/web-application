import React, { Component } from 'react'

export class PageSideBar extends Component {
    render() {
        return (
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link" href="../index.html">
                            <i class="icon-grid menu-icon"></i>
                            <span class="menu-title">Dashboard</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="collapse" href="#project-tracker" aria-expanded="false"
                            aria-controls="project-tracker">
                            <i class="icon-layout menu-icon"></i>
                            <span class="menu-title">Project Tracker</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="collapse" id="project-tracker">
                            <ul class="nav flex-column sub-menu">
                                <li class="nav-item">
                                    <a class="nav-link" href="/createProject">Create Projet</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/updateProject">Update Projet</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/viewProject">View Projet</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/projectList">Project List</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="collapse" href="#bug-tracker" aria-expanded="false"
                            aria-controls="bug-tracker">
                            <i class="icon-layout menu-icon"></i>
                            <span class="menu-title">Bug Tracker</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="collapse" id="bug-tracker">
                            <ul class="nav flex-column sub-menu">
                                <li class="nav-item">
                                    <a class="nav-link" href="/createBug">Create Bug</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/updateBug">Update Bug</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/viewBug">View Bug</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/bugList">Bug List</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default PageSideBar