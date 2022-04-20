import React, { Component } from 'react'
import ContentSideBar from '../../components/common/contentSideBar'
import PageFooter from '../../components/common/pageFooter'
import PageHeader from '../../components/common/pageHeader'
import PageSideBar from '../../components/common/pageSidebar'
import SettingsSideBar from '../../components/common/settingsSideBar'

export class ProjectList extends Component {
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
                            <h2 class="mb-3">Project List</h2>
                            <div class="row">
                                <div class="col-lg grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body">
                                            <button type="button"
                                                class="btn btn-outline-primary btn-icon-text pt-2 pb-2 ps-5 pe-5">
                                                <i class="ti-plus btn-icon-prepend"></i>
                                                Add Project
                                            </button>
                                            <div class="table-responsive">
                                                <table class="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>User</th>
                                                            <th>Product</th>
                                                            <th>Sale</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Jacob</td>
                                                            <td>Photoshop</td>
                                                            <td class="text-danger">
                                                                28.76% <i class="ti-arrow-down"></i>
                                                            </td>
                                                            <td>
                                                                <label class="badge badge-danger">Pending</label>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Messsy</td>
                                                            <td>Flash</td>
                                                            <td class="text-danger">
                                                                21.06% <i class="ti-arrow-down"></i>
                                                            </td>
                                                            <td>
                                                                <label class="badge badge-warning">In progress</label>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>John</td>
                                                            <td>Premier</td>
                                                            <td class="text-danger">
                                                                35.00% <i class="ti-arrow-down"></i>
                                                            </td>
                                                            <td>
                                                                <label class="badge badge-info">Fixed</label>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Peter</td>
                                                            <td>After effects</td>
                                                            <td class="text-success">
                                                                82.00% <i class="ti-arrow-up"></i>
                                                            </td>
                                                            <td>
                                                                <label class="badge badge-success">Completed</label>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Dave</td>
                                                            <td>53275535</td>
                                                            <td class="text-success">
                                                                98.05% <i class="ti-arrow-up"></i>
                                                            </td>
                                                            <td>
                                                                <label class="badge badge-warning">In progress</label>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <PageFooter />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectList