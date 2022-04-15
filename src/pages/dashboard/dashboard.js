import React, { Component } from 'react'

export class Dashboard extends Component {
    render() {
        return (
            <div class="container-scroller">
                <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                    <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                        <a class="navbar-brand brand-logo mr-5" href="../index.html"><img src="../../assets/images/logo.svg" class="mr-2"
                            alt="logo" /></a>
                        <a class="navbar-brand brand-logo-mini" href="../index.html"><img src="../../assets/images/logo-mini.svg"
                            alt="logo" /></a>
                    </div>
                    <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                        <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                            <span class="icon-menu"></span>
                        </button>
                        <ul class="navbar-nav mr-lg-2">
                            <li class="nav-item nav-search d-none d-lg-block">
                                <div class="input-group">
                                    <div class="input-group-prepend hover-cursor" id="navbar-search-icon">
                                        <span class="input-group-text" id="search">
                                            <i class="icon-search"></i>
                                        </span>
                                    </div>
                                    <input type="text" class="form-control" id="navbar-search-input" placeholder="Search now"
                                        aria-label="search" aria-describedby="search" />
                                </div>
                            </li>
                        </ul>
                        <ul class="navbar-nav navbar-nav-right">
                            <li class="nav-item dropdown">
                                <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#"
                                    data-toggle="dropdown">
                                    <i class="icon-bell mx-0"></i>
                                    <span class="count"></span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                                    aria-labelledby="notificationDropdown">
                                    <p class="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                                    <a class="dropdown-item preview-item">
                                        <div class="preview-thumbnail">
                                            <div class="preview-icon bg-success">
                                                <i class="ti-info-alt mx-0"></i>
                                            </div>
                                        </div>
                                        <div class="preview-item-content">
                                            <h6 class="preview-subject font-weight-normal">Application Error</h6>
                                            <p class="font-weight-light small-text mb-0 text-muted">
                                                Just now
                                            </p>
                                        </div>
                                    </a>
                                    <a class="dropdown-item preview-item">
                                        <div class="preview-thumbnail">
                                            <div class="preview-icon bg-warning">
                                                <i class="ti-settings mx-0"></i>
                                            </div>
                                        </div>
                                        <div class="preview-item-content">
                                            <h6 class="preview-subject font-weight-normal">Settings</h6>
                                            <p class="font-weight-light small-text mb-0 text-muted">
                                                Private message
                                            </p>
                                        </div>
                                    </a>
                                    <a class="dropdown-item preview-item">
                                        <div class="preview-thumbnail">
                                            <div class="preview-icon bg-info">
                                                <i class="ti-user mx-0"></i>
                                            </div>
                                        </div>
                                        <div class="preview-item-content">
                                            <h6 class="preview-subject font-weight-normal">New user registration</h6>
                                            <p class="font-weight-light small-text mb-0 text-muted">
                                                2 days ago
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="nav-item nav-profile dropdown">
                                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                                    <img src="../../assets/images/faces/face28.jpg" alt="profile" />
                                </a>
                                <div class="dropdown-menu dropdown-menu-right navbar-dropdown"
                                    aria-labelledby="profileDropdown">
                                    <a class="dropdown-item">
                                        <i class="ti-settings text-primary"></i>
                                        Settings
                                    </a>
                                    <a class="dropdown-item">
                                        <i class="ti-power-off text-primary"></i>
                                        Logout
                                    </a>
                                </div>
                            </li>
                            <li class="nav-item nav-settings d-none d-lg-flex">
                                <a class="nav-link" href="#">
                                    <i class="icon-ellipsis"></i>
                                </a>
                            </li>
                        </ul>
                        <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                            data-toggle="offcanvas">
                            <span class="icon-menu"></span>
                        </button>
                    </div>
                </nav>
                <div class="container-fluid page-body-wrapper">
                    <div class="theme-setting-wrapper">
                        <div id="settings-trigger"><i class="ti-settings"></i></div>
                        <div id="theme-settings" class="settings-panel">
                            <i class="settings-close ti-close"></i>
                            <p class="settings-heading">SIDEBAR SKINS</p>
                            <div class="sidebar-bg-options selected" id="sidebar-light-theme">
                                <div class="img-ss rounded-circle bg-light border mr-3"></div>Light
                            </div>
                            <div class="sidebar-bg-options" id="sidebar-dark-theme">
                                <div class="img-ss rounded-circle bg-dark border mr-3"></div>Dark
                            </div>
                            <p class="settings-heading mt-2">HEADER SKINS</p>
                            <div class="color-tiles mx-0 px-4">
                                <div class="tiles success"></div>
                                <div class="tiles warning"></div>
                                <div class="tiles danger"></div>
                                <div class="tiles info"></div>
                                <div class="tiles dark"></div>
                                <div class="tiles default"></div>
                            </div>
                        </div>
                    </div>
                    <div id="right-sidebar" class="settings-panel">
                        <i class="settings-close ti-close"></i>
                        <ul class="nav nav-tabs border-top" id="setting-panel" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="todo-tab" data-toggle="tab" href="#todo-section" role="tab"
                                    aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="chats-tab" data-toggle="tab" href="#chats-section" role="tab"
                                    aria-controls="chats-section">CHATS</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="setting-content">
                            <div class="tab-pane fade show active scroll-wrapper" id="todo-section" role="tabpanel"
                                aria-labelledby="todo-section">
                                <div class="add-items d-flex px-3 mb-0">
                                    <form class="form w-100">
                                        <div class="form-group d-flex">
                                            <input type="text" class="form-control todo-list-input" placeholder="Add To-do" />
                                            <button type="submit" class="add btn btn-primary todo-list-add-btn"
                                                id="add-task">Add</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="list-wrapper px-3">
                                    <ul class="d-flex flex-column-reverse todo-list">
                                        <li>
                                            <div class="form-check">
                                                <label class="form-check-label">
                                                    <input class="checkbox" type="checkbox" />
                                                    Team review meeting at 3.00 PM
                                                </label>
                                            </div>
                                            <i class="remove ti-close"></i>
                                        </li>
                                        <li>
                                            <div class="form-check">
                                                <label class="form-check-label">
                                                    <input class="checkbox" type="checkbox" />
                                                    Prepare for presentation
                                                </label>
                                            </div>
                                            <i class="remove ti-close"></i>
                                        </li>
                                        <li>
                                            <div class="form-check">
                                                <label class="form-check-label">
                                                    <input class="checkbox" type="checkbox" />
                                                    Resolve all the low priority tickets due today
                                                </label>
                                            </div>
                                            <i class="remove ti-close"></i>
                                        </li>
                                        <li class="completed">
                                            <div class="form-check">
                                                <label class="form-check-label">
                                                    <input class="checkbox" type="checkbox" checked />
                                                    Schedule meeting for next week
                                                </label>
                                            </div>
                                            <i class="remove ti-close"></i>
                                        </li>
                                        <li class="completed">
                                            <div class="form-check">
                                                <label class="form-check-label">
                                                    <input class="checkbox" type="checkbox" checked />
                                                    Project review
                                                </label>
                                            </div>
                                            <i class="remove ti-close"></i>
                                        </li>
                                    </ul>
                                </div>
                                <h4 class="px-3 text-muted mt-5 font-weight-light mb-0">Events</h4>
                                <div class="events pt-4 px-3">
                                    <div class="wrapper d-flex mb-2">
                                        <i class="ti-control-record text-primary mr-2"></i>
                                        <span>Feb 11 2018</span>
                                    </div>
                                    <p class="mb-0 font-weight-thin text-gray">Creating component page build a js</p>
                                    <p class="text-gray mb-0">The total number of sessions</p>
                                </div>
                                <div class="events pt-4 px-3">
                                    <div class="wrapper d-flex mb-2">
                                        <i class="ti-control-record text-primary mr-2"></i>
                                        <span>Feb 7 2018</span>
                                    </div>
                                    <p class="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
                                    <p class="text-gray mb-0 ">Call Sarah Graves</p>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
                                <div class="d-flex align-items-center justify-content-between border-bottom">
                                    <p class="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
                                    <small
                                        class="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal">See
                                        All</small>
                                </div>
                                <ul class="chat-list">
                                    <li class="list active">
                                        <div class="profile"><img src="../../assets/images/faces/face1.jpg" alt="image" /><span
                                            class="online"></span></div>
                                        <div class="info">
                                            <p>Thomas Douglas</p>
                                            <p>Available</p>
                                        </div>
                                        <small class="text-muted my-auto">19 min</small>
                                    </li>
                                    <li class="list">
                                        <div class="profile"><img src="../../assets/images/faces/face2.jpg" alt="image" /><span
                                            class="offline"></span></div>
                                        <div class="info">
                                            <div class="wrapper d-flex">
                                                <p>Catherine</p>
                                            </div>
                                            <p>Away</p>
                                        </div>
                                        <div class="badge badge-success badge-pill my-auto mx-2">4</div>
                                        <small class="text-muted my-auto">23 min</small>
                                    </li>
                                    <li class="list">
                                        <div class="profile"><img src="../../assets/images/faces/face3.jpg" alt="image" /><span
                                            class="online"></span></div>
                                        <div class="info">
                                            <p>Daniel Russell</p>
                                            <p>Available</p>
                                        </div>
                                        <small class="text-muted my-auto">14 min</small>
                                    </li>
                                    <li class="list">
                                        <div class="profile"><img src="../../assets/images/faces/face4.jpg" alt="image" /><span
                                            class="offline"></span></div>
                                        <div class="info">
                                            <p>James Richardson</p>
                                            <p>Away</p>
                                        </div>
                                        <small class="text-muted my-auto">2 min</small>
                                    </li>
                                    <li class="list">
                                        <div class="profile"><img src="../../assets/images/faces/face5.jpg" alt="image" /><span
                                            class="online"></span></div>
                                        <div class="info">
                                            <p>Madeline Kennedy</p>
                                            <p>Available</p>
                                        </div>
                                        <small class="text-muted my-auto">5 min</small>
                                    </li>
                                    <li class="list">
                                        <div class="profile"><img src="../../assets/images/faces/face6.jpg" alt="image" /><span
                                            class="online"></span></div>
                                        <div class="info">
                                            <p>Sarah Graves</p>
                                            <p>Available</p>
                                        </div>
                                        <small class="text-muted my-auto">47 min</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Start Navbar --> */}
                    <nav class="sidebar sidebar-offcanvas" id="sidebar">
                        <ul class="nav">
                            <li class="nav-item">
                                <a class="nav-link" href="../index.html">
                                    <i class="icon-grid menu-icon"></i>
                                    <span class="menu-title">Dashboard</span>
                                </a>
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
                                        <li class="nav-item"> <a class="nav-link" href="#">Bug
                                            List</a></li>
                                        <li class="nav-item"> <a class="nav-link" href="#">Create Bug</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    {/* <!-- End Navbar --> */}
                    <div class="main-panel">
                        <div class="content-wrapper">
                            <div class="row">
                                <div class="col-md-12 grid-margin">
                                    <div class="row">
                                        <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                                            <h3 class="font-weight-bold">Welcome Sample Name</h3>
                                        </div>
                                        <div class="col-12 col-xl-4">
                                            <div class="justify-content-end d-flex">
                                                <h5><i class="ti-calendar"></i> 01/01/2022</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row" style={{ marginBottom: -20 }}>
                                <div class="col-md-6 grid-margin stretch-card">
                                    <div class="card" style={{ height: 390, paddingBottom: 75 }}>
                                        <div class="card-body ">
                                            <h4 class="card-title">To Do Lists</h4>
                                            <div class="list-wrapper pt-2">
                                                <ul class="d-flex flex-column-reverse todo-list todo-list-custom">
                                                    <li>
                                                        <div class="form-check form-check-flat">
                                                            <label class="form-check-label">
                                                                <input class="checkbox" type="checkbox" />
                                                                Done task
                                                            </label>
                                                        </div>
                                                        <i class="remove ti-close"></i>
                                                    </li>
                                                    <li class="completed">
                                                        <div class="form-check form-check-flat">
                                                            <label class="form-check-label">
                                                                <input class="checkbox" type="checkbox" checked />
                                                                Todo Task
                                                            </label>
                                                        </div>
                                                        <i class="remove ti-close"></i>
                                                    </li>
                                                    <li class="completed">
                                                        <div class="form-check form-check-flat">
                                                            <label class="form-check-label">
                                                                <input class="checkbox" type="checkbox" checked />
                                                                Todo Task
                                                            </label>
                                                        </div>
                                                        <i class="remove ti-close"></i>
                                                    </li>
                                                    <li class="completed">
                                                        <div class="form-check form-check-flat">
                                                            <label class="form-check-label">
                                                                <input class="checkbox" type="checkbox" checked />
                                                                Todo Task
                                                            </label>
                                                        </div>
                                                        <i class="remove ti-close"></i>
                                                    </li>
                                                    <li class="completed">
                                                        <div class="form-check form-check-flat">
                                                            <label class="form-check-label">
                                                                <input class="checkbox" type="checkbox" checked />
                                                                Todo Task
                                                            </label>
                                                        </div>
                                                        <i class="remove ti-close"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="add-items d-flex mb-0 mt-2">
                                                <input type="text" class="form-control todo-list-input"
                                                    placeholder="Add new task" />
                                                <button
                                                    class="add btn btn-icon text-primary todo-list-add-btn bg-transparent"><i
                                                        class="icon-circle-plus"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 grid-margin transparent">
                                    <div class="row">
                                        <div class="col-md-6 mb-4 stretch-card transparent">
                                            <div class="card card-dark-blue">
                                                <div class="card-body">
                                                    <p class="mb-4">Completed Projects</p>
                                                    <p class="fs-30 mb-2">0</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4 stretch-card transparent">
                                            <div class="card card-dark-blue">
                                                <div class="card-body">
                                                    <p class="mb-4">New Projects</p>
                                                    <p class="fs-30 mb-2">0</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 mb-4 stretch-card transparent">
                                            <div class="card card-dark-blue">
                                                <div class="card-body">
                                                    <p class="mb-4">Pending Projects</p>
                                                    <p class="fs-30 mb-2">0</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4 stretch-card transparent">
                                            <div class="card card-dark-blue">
                                                <div class="card-body">
                                                    <p class="mb-4">Ongoing Projects</p>
                                                    <p class="fs-30 mb-2">0</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 mb-4 stretch-card transparent">
                                            <div class="card card-light-blue">
                                                <div class="card-body">
                                                    <p class="mb-4">Registered Developers</p>
                                                    <p class="fs-30 mb-2">0</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4 stretch-card transparent">
                                            <div class="card card-light-blue">
                                                <div class="card-body">
                                                    <p class="mb-4">Registered Moderators</p>
                                                    <p class="fs-30 mb-2">0</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body">
                                            <p class="card-title mb-0">Projects</p>
                                            <div class="table-responsive">
                                                <table class="table table-striped table-borderless">
                                                    <thead>
                                                        <tr>
                                                            <th>Project</th>
                                                            <th>Identified Bugs</th>
                                                            <th>Completed Bugs</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Sample</td>
                                                            <td>Sample</td>
                                                            <td>Sample</td>
                                                            <td class="font-weight-medium">
                                                                <div class="badge badge-success">Completed</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Sample</td>
                                                            <td>Sample</td>
                                                            <td>Sample</td>
                                                            <td class="font-weight-medium">
                                                                <div class="badge badge-danger">Completed</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Sample</td>
                                                            <td>Sample</td>
                                                            <td>Sample</td>
                                                            <td class="font-weight-medium">
                                                                <div class="badge badge-warning">Pending</div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 grid-margin stretch-card">
                                    <div class="card position-relative">
                                        <div class="card-body">
                                            <div id="detailedReports"
                                                class="carousel slide detailed-report-carousel position-static pt-2"
                                                data-ride="carousel">
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                        <div class="row">
                                                            <div
                                                                class="col-md-12 col-xl-3 d-flex flex-column justify-content-start">
                                                                <div class="ml-xl-4 mt-3">
                                                                    <p class="card-title">Detailed Reports</p>
                                                                    <h1 class="text-primary">Project Name</h1>
                                                                    <h3 class="font-weight-500 mb-xl-4 text-primary">Company
                                                                        Name</h3>
                                                                    <p class="mb-2 mb-xl-0">The detailed report of the project
                                                                        is shown here</p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-12 col-xl-9">
                                                                <div class="row">
                                                                    <div class="col-md-6 border-right">
                                                                        <div class="table-responsive mb-3 mb-md-0 mt-3">
                                                                            <table class="table table-borderless report-table">
                                                                                <tr>
                                                                                    <td class="text-muted">Sample</td>
                                                                                    <td class="w-100 px-0">
                                                                                        <div class="progress progress-md mx-4">
                                                                                            <div class="progress-bar bg-primary"
                                                                                                role="progressbar"
                                                                                                style={{ width: 70 }}
                                                                                                aria-valuenow="70"
                                                                                                aria-valuemin="0"
                                                                                                aria-valuemax="100"></div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <h5 class="font-weight-bold mb-0">0
                                                                                        </h5>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-muted">Sample</td>
                                                                                    <td class="w-100 px-0">
                                                                                        <div class="progress progress-md mx-4">
                                                                                            <div class="progress-bar bg-warning"
                                                                                                role="progressbar"
                                                                                                style={{ width: 30 }}
                                                                                                aria-valuenow="30"
                                                                                                aria-valuemin="0"
                                                                                                aria-valuemax="100"></div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <h5 class="font-weight-bold mb-0">0
                                                                                        </h5>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-muted">Sample</td>
                                                                                    <td class="w-100 px-0">
                                                                                        <div class="progress progress-md mx-4">
                                                                                            <div class="progress-bar bg-danger"
                                                                                                role="progressbar"
                                                                                                style={{ width: 95 }}
                                                                                                aria-valuenow="95"
                                                                                                aria-valuemin="0"
                                                                                                aria-valuemax="100"></div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <h5 class="font-weight-bold mb-0">0
                                                                                        </h5>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-muted">Sample</td>
                                                                                    <td class="w-100 px-0">
                                                                                        <div class="progress progress-md mx-4">
                                                                                            <div class="progress-bar bg-info"
                                                                                                role="progressbar"
                                                                                                style={{ width: 60 }}
                                                                                                aria-valuenow="60"
                                                                                                aria-valuemin="0"
                                                                                                aria-valuemax="100"></div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <h5 class="font-weight-bold mb-0">0
                                                                                        </h5>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-muted">Sample</td>
                                                                                    <td class="w-100 px-0">
                                                                                        <div class="progress progress-md mx-4">
                                                                                            <div class="progress-bar bg-primary"
                                                                                                role="progressbar"
                                                                                                style={{ width: 40 }}
                                                                                                aria-valuenow="40"
                                                                                                aria-valuemin="0"
                                                                                                aria-valuemax="100"></div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <h5 class="font-weight-bold mb-0">0
                                                                                        </h5>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-muted">Sample</td>
                                                                                    <td class="w-100 px-0">
                                                                                        <div class="progress progress-md mx-4">
                                                                                            <div class="progress-bar bg-danger"
                                                                                                role="progressbar"
                                                                                                style={{ width: 75 }}
                                                                                                aria-valuenow="75"
                                                                                                aria-valuemin="0"
                                                                                                aria-valuemax="100"></div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <h5 class="font-weight-bold mb-0">0
                                                                                        </h5>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 mt-3">
                                                                        <canvas id="north-america-chart"></canvas>
                                                                        <div id="north-america-legend"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="carousel-item">
                                                        <div class="row">
                                                            <div
                                                                class="col-md-12 col-xl-3 d-flex flex-column justify-content-start">
                                                                <div class="ml-xl-4 mt-3">
                                                                    <p class="card-title">Detailed Reports</p>
                                                                    <h1 class="text-primary">Project Name</h1>
                                                                    <h3 class="font-weight-500 mb-xl-4 text-primary">Company
                                                                        Name</h3>
                                                                    <p class="mb-2 mb-xl-0">The detailed report of the project
                                                                        is shown here</p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-12 col-xl-9">
                                                                <div class="row">
                                                                    <div class="col-md-6 border-right">
                                                                        <div class="table-responsive mb-3 mb-md-0 mt-3">
                                                                            <table class="table table-borderless report-table">
                                                                                <tr>
                                                                                    <td class="text-muted">Sample</td>
                                                                                    <td class="w-100 px-0">
                                                                                        <div class="progress progress-md mx-4">
                                                                                            <div class="progress-bar bg-primary"
                                                                                                role="progressbar"
                                                                                                style={{ width: 70 }}
                                                                                                aria-valuenow="70"
                                                                                                aria-valuemin="0"
                                                                                                aria-valuemax="100"></div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <h5 class="font-weight-bold mb-0">0
                                                                                        </h5>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-muted">Sample</td>
                                                                                    <td class="w-100 px-0">
                                                                                        <div class="progress progress-md mx-4">
                                                                                            <div class="progress-bar bg-warning"
                                                                                                role="progressbar"
                                                                                                style={{ width: 30 }}
                                                                                                aria-valuenow="30"
                                                                                                aria-valuemin="0"
                                                                                                aria-valuemax="100"></div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <h5 class="font-weight-bold mb-0">0
                                                                                        </h5>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-muted">Sample</td>
                                                                                    <td class="w-100 px-0">
                                                                                        <div class="progress progress-md mx-4">
                                                                                            <div class="progress-bar bg-danger"
                                                                                                role="progressbar"
                                                                                                style={{ width: 95 }}
                                                                                                aria-valuenow="95"
                                                                                                aria-valuemin="0"
                                                                                                aria-valuemax="100"></div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <h5 class="font-weight-bold mb-0">0
                                                                                        </h5>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-muted">Sample</td>
                                                                                    <td class="w-100 px-0">
                                                                                        <div class="progress progress-md mx-4">
                                                                                            <div class="progress-bar bg-info"
                                                                                                role="progressbar"
                                                                                                style={{ width: 60 }}
                                                                                                aria-valuenow="60"
                                                                                                aria-valuemin="0"
                                                                                                aria-valuemax="100"></div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <h5 class="font-weight-bold mb-0">0
                                                                                        </h5>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-muted">Sample</td>
                                                                                    <td class="w-100 px-0">
                                                                                        <div class="progress progress-md mx-4">
                                                                                            <div class="progress-bar bg-primary"
                                                                                                role="progressbar"
                                                                                                style={{ width: 40 }}
                                                                                                aria-valuenow="40"
                                                                                                aria-valuemin="0"
                                                                                                aria-valuemax="100"></div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <h5 class="font-weight-bold mb-0">0
                                                                                        </h5>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-muted">Sample</td>
                                                                                    <td class="w-100 px-0">
                                                                                        <div class="progress progress-md mx-4">
                                                                                            <div class="progress-bar bg-danger"
                                                                                                role="progressbar"
                                                                                                style={{ width: 75 }}
                                                                                                aria-valuenow="75"
                                                                                                aria-valuemin="0"
                                                                                                aria-valuemax="100"></div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <h5 class="font-weight-bold mb-0">0
                                                                                        </h5>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 mt-3">
                                                                        <canvas id="south-america-chart"></canvas>
                                                                        <div id="south-america-legend"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a class="carousel-control-prev" href="#detailedReports" role="button"
                                                    data-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                                <a class="carousel-control-next" href="#detailedReports" role="button"
                                                    data-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 stretch-card grid-margin">
                                    <div class="card">
                                        <div class="card-body">
                                            <p class="card-title mb-0">Projects Overview</p>
                                            <div class="table-responsive">
                                                <table class="table table-borderless">
                                                    <thead>
                                                        <tr>
                                                            <th class="pl-0  pb-2 border-bottom">Project Name</th>
                                                            <th class="border-bottom pb-2">Completion</th>
                                                            <th class="border-bottom pb-2">Remaining</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="pl-0">Project Name</td>
                                                            <td>
                                                                <p class="mb-0"><span
                                                                    class="font-weight-bold mr-2">0</span>(0.00%)</p>
                                                            </td>
                                                            <td class="text-muted">00</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="pl-0">Project Name</td>
                                                            <td>
                                                                <p class="mb-0"><span
                                                                    class="font-weight-bold mr-2">0</span>(0.00%)</p>
                                                            </td>
                                                            <td class="text-muted">00</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="pl-0">Project Name</td>
                                                            <td>
                                                                <p class="mb-0"><span
                                                                    class="font-weight-bold mr-2">0</span>(0.00%)</p>
                                                            </td>
                                                            <td class="text-muted">00</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="pl-0">Project Name</td>
                                                            <td>
                                                                <p class="mb-0"><span
                                                                    class="font-weight-bold mr-2">0</span>(0.00%)</p>
                                                            </td>
                                                            <td class="text-muted">00</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="pl-0">Project Name</td>
                                                            <td>
                                                                <p class="mb-0"><span
                                                                    class="font-weight-bold mr-2">0</span>(0.00%)</p>
                                                            </td>
                                                            <td class="text-muted">00</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 stretch-card grid-margin">
                                    <div class="row">
                                        <div class="col-md-12 grid-margin stretch-card">
                                            <div class="card">
                                                <div class="card-body">
                                                    <p class="card-title">Project Completions</p>
                                                    <div class="charts-data">
                                                        <div class="mt-3">
                                                            <p class="mb-0">Project Name</p>
                                                            <div class="d-flex justify-content-between align-items-center">
                                                                <div class="progress progress-md flex-grow-1 mr-4">
                                                                    <div class="progress-bar bg-inf0" role="progressbar"
                                                                        style={{ width: 95 }} aria-valuenow="95" aria-valuemin="0"
                                                                        aria-valuemax="100"></div>
                                                                </div>
                                                                <p class="mb-0">0</p>
                                                            </div>
                                                        </div>
                                                        <div class="mt-3">
                                                            <p class="mb-0">Project Name</p>
                                                            <div class="d-flex justify-content-between align-items-center">
                                                                <div class="progress progress-md flex-grow-1 mr-4">
                                                                    <div class="progress-bar bg-inf0" role="progressbar"
                                                                        style={{ width: 95 }} aria-valuenow="95" aria-valuemin="0"
                                                                        aria-valuemax="100"></div>
                                                                </div>
                                                                <p class="mb-0">0</p>
                                                            </div>
                                                        </div>
                                                        <div class="mt-3">
                                                            <p class="mb-0">Project Name</p>
                                                            <div class="d-flex justify-content-between align-items-center">
                                                                <div class="progress progress-md flex-grow-1 mr-4">
                                                                    <div class="progress-bar bg-inf0" role="progressbar"
                                                                        style={{ width: 95 }} aria-valuenow="95" aria-valuemin="0"
                                                                        aria-valuemax="100"></div>
                                                                </div>
                                                                <p class="mb-0">0</p>
                                                            </div>
                                                        </div>
                                                        <div class="mt-3">
                                                            <p class="mb-0">Project Name</p>
                                                            <div class="d-flex justify-content-between align-items-center">
                                                                <div class="progress progress-md flex-grow-1 mr-4">
                                                                    <div class="progress-bar bg-inf0" role="progressbar"
                                                                        style={{ width: 95 }} aria-valuenow="95" aria-valuemin="0"
                                                                        aria-valuemax="100"></div>
                                                                </div>
                                                                <p class="mb-0">0</p>
                                                            </div>
                                                        </div>
                                                        <div class="mt-3">
                                                            <p class="mb-0">Project Name</p>
                                                            <div class="d-flex justify-content-between align-items-center">
                                                                <div class="progress progress-md flex-grow-1 mr-4">
                                                                    <div class="progress-bar bg-inf0" role="progressbar"
                                                                        style={{ width: 95 }} aria-valuenow="95" aria-valuemin="0"
                                                                        aria-valuemax="100"></div>
                                                                </div>
                                                                <p class="mb-0">0</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 stretch-card grid-margin grid-margin-md-0">
                                            <div class="card data-icon-card-primary">
                                                <div class="card-body">
                                                    <p class="card-title text-white">Meeting Alerts</p>
                                                    <div class="row">
                                                        <div class="col-8 text-white">
                                                            <h3>0</h3>
                                                            <p class="text-white font-weight-500 mb-0">There are no upcoming
                                                                meetings</p>
                                                        </div>
                                                        <div class="col-4 background-icon">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 stretch-card grid-margin">
                                    <div class="card">
                                        <div class="card-body">
                                            <p class="card-title">Notifications</p>
                                            <ul class="icon-data-list">
                                                <li>
                                                    <div class="d-flex">
                                                        <img src="../../assets/images/faces/face5.jpg" alt="user" />
                                                        <div>
                                                            <p class="text-info mb-1">Name</p>
                                                            <p class="mb-0">Sample message</p>
                                                            <small>01:00 am</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex">
                                                        <img src="../../assets/images/faces/face5.jpg" alt="user" />
                                                        <div>
                                                            <p class="text-info mb-1">Name</p>
                                                            <p class="mb-0">Sample message</p>
                                                            <small>01:00 am</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex">
                                                        <img src="../../assets/images/faces/face5.jpg" alt="user" />
                                                        <div>
                                                            <p class="text-info mb-1">Name</p>
                                                            <p class="mb-0">Sample message</p>
                                                            <small>01:00 am</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex">
                                                        <img src="../../assets/images/faces/face5.jpg" alt="user" />
                                                        <div>
                                                            <p class="text-info mb-1">Name</p>
                                                            <p class="mb-0">Sample message</p>
                                                            <small>01:00 am</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer class="bg-white text-center text-lg-start bg-light text-muted">
                            <section>
                                <div class="container text-center text-md-start mt-5">
                                    <div class="row mt-3">
                                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                            <h6 class="text-uppercase fw-bold mb-4">Pegasus Systems</h6>
                                            <p>
                                                Here you can manage the tracking of bugs in your system and chat in a intra company network
                                            </p>
                                        </div>
                                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                            <h6 class="text-uppercase fw-bold mb-4">
                                                Products
                                            </h6>
                                            <p>
                                                <a href="#!" class="text-reset">Angular</a>
                                            </p>
                                            <p>
                                                <a href="#!" class="text-reset">React</a>
                                            </p>
                                            <p>
                                                <a href="#!" class="text-reset">Vue</a>
                                            </p>
                                            <p>
                                                <a href="#!" class="text-reset">Laravel</a>
                                            </p>
                                        </div>
                                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                            <h6 class="text-uppercase fw-bold mb-4">
                                                Useful links
                                            </h6>
                                            <p>
                                                <a href="#!" class="text-reset">Pricing</a>
                                            </p>
                                            <p>
                                                <a href="#!" class="text-reset">Settings</a>
                                            </p>
                                            <p>
                                                <a href="#!" class="text-reset">Orders</a>
                                            </p>
                                            <p>
                                                <a href="#!" class="text-reset">Help</a>
                                            </p>
                                        </div>
                                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                            <h6 class="text-uppercase fw-bold mb-4">
                                                Contact
                                            </h6>
                                            <p> No, Street, City</p>
                                            <p>
                                                info@example.com
                                            </p>
                                            <p>+ 94 77 31 23 548</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard