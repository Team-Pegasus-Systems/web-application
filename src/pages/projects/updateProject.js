import React, { Component } from 'react'
import ContentSideBar from '../../components/common/contentSideBar'
import PageFooter from '../../components/common/pageFooter'
import PageHeader from '../../components/common/pageHeader'
import PageSideBar from '../../components/common/pageSidebar'
import SettingsSideBar from '../../components/common/settingsSideBar'

export class UpdateProject extends Component {
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
                                        <div class="card-body">
                                            <h4 class="card-title">Basic form elements</h4>
                                            <p class="card-description">
                                                Basic form elements
                                            </p>
                                            <form class="forms-sample">
                                                <div class="form-group">
                                                    <label for="exampleInputName1">Name</label>
                                                    <input type="text" class="form-control" id="exampleInputName1"
                                                        placeholder="Name" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputEmail3">Email address</label>
                                                    <input type="email" class="form-control" id="exampleInputEmail3"
                                                        placeholder="Email" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputPassword4">Password</label>
                                                    <input type="password" class="form-control" id="exampleInputPassword4"
                                                        placeholder="Password" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleSelectGender">Gender</label>
                                                    <select class="form-control" id="exampleSelectGender">
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label>Single select box using select 2</label>
                                                    <select class="js-example-basic-single w-100">
                                                        <option value="AL">Alabama</option>
                                                        <option value="WY">Wyoming</option>
                                                        <option value="AM">America</option>
                                                        <option value="CA">Canada</option>
                                                        <option value="RU">Russia</option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label>File upload</label>
                                                    <input type="file" name="img[]" class="file-upload-default" />
                                                    <div class="input-group col-xs-12">
                                                        <input type="text" class="form-control file-upload-info" disabled
                                                            placeholder="Upload Image" />
                                                        <span class="input-group-append">
                                                            <button class="file-upload-browse btn btn-primary"
                                                                type="button">Upload</button>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputCity1">City</label>
                                                    <input type="text" class="form-control" id="exampleInputCity1"
                                                        placeholder="Location" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleTextarea1">Textarea</label>
                                                    <textarea class="form-control" id="exampleTextarea1" rows="4"></textarea>
                                                </div>
                                                <button type="submit" class="btn btn-primary mr-2">Submit</button>
                                                <button class="btn btn-light">Cancel</button>
                                            </form>
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

export default UpdateProject