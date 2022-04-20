import React, { Component } from 'react'
import ContentSideBar from '../../components/common/contentSideBar'
import PageFooter from '../../components/common/pageFooter'
import PageHeader from '../../components/common/pageHeader'
import PageSideBar from '../../components/common/pageSidebar'
import SettingsSideBar from '../../components/common/settingsSideBar'

export class UpdateProfile extends Component {
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
                                <div class="col-12 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body text-center">
                                            <h4 class="card-title" style={{ fontSize: 30 }}>Update Profile</h4>
                                            <div class="row justify-content-center">
                                                <form class="pt-3 col-5">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control form-control-lg" id="firstName" placeholder="First name" />
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control form-control-lg" id="secondName" placeholder="Last Name" />
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="email" class="form-control form-control-lg" id="email" placeholder="Email" />
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="number" class="form-control form-control-lg" id="mobile" placeholder="Mobile" />
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="number" class="form-control form-control-lg" id="age" placeholder="Age" />
                                                    </div>
                                                    <div class="form-group">
                                                        <select class="form-control" id="gender"  >
                                                            <option value={null}>Gender</option>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <select class="form-control form-control-lg" id="role"  >
                                                            <option value={null}>Role</option>
                                                            <option value="ADMIN">Admin</option>
                                                            <option value="MODERATOR">Moderator</option>
                                                            <option value="EXT_DEV">Developer</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <input class="form-control" type="file" id="profileImage" />
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="password" class="form-control form-control-lg" id="password" placeholder="Password" />
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="password" class="form-control form-control-lg" id="confirmPassword"
                                                            placeholder="Confirm Password" />
                                                    </div>
                                                    <div class="mt-3">
                                                        <a class="btn btn-block btn-primary  font-weight-medium auth-form-btn" style={{ fontSize: 20 }}>Update</a>
                                                    </div>
                                                </form>
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

export default UpdateProfile