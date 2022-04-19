import React, { Component } from 'react'
import ContentSideBar from '../../components/common/contentSideBar'
import PageHeader from '../../components/common/pageHeader'
import PageSideBar from '../../components/common/pageSidebar'
import SettingsSideBar from '../../components/common/settingsSideBar'

export class Dashboard extends Component {
    render() {
        return (
            <div class="container-scroller">
                <PageHeader />
                <div class="container-fluid page-body-wrapper">
                    <SettingsSideBar />
                    <ContentSideBar />
                    <PageSideBar />
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