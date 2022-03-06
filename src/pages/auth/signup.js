import React, { Component } from 'react'

export class SignUpPage extends Component {
    render() {
        return (
            <div class="container-scroller">
                <div class="container-fluid page-body-wrapper full-page-wrapper">
                    <div class="content-wrapper d-flex align-items-center auth px-0">
                        <div class="row w-100 mx-0">
                            <div class="col-lg-4 mx-auto">
                                <div class="auth-form-light text-left py-5 px-4 px-sm-5 ">
                                    <div class="brand-logo text-center">
                                        <img src="../../images/logo.svg" style={{ width: 200 }} alt="logo" />
                                    </div>
                                    <h4 class="text-center">New here?</h4>
                                    <h6 class="font-weight-light text-center">Signing up is easy. It only takes a few steps</h6>
                                    <form class="pt-3">
                                        <div class="form-group">
                                            <input type="text" class="form-control form-control-lg" id="firstName" placeholder="First name" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control form-control-lg" id="lastName" placeholder="Last Name" />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-lg" id="email" placeholder="Email" />
                                        </div>
                                        <div class="form-group">
                                            <input type="number" class="form-control form-control-lg" id="mobile" placeholder="Mobile" />
                                        </div>
                                        <div class="form-group">
                                            <select class="form-control" id="gender">
                                                <option>Gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <select class="form-control form-control-lg" id="role">
                                                <option>Role</option>
                                                <option>Admin</option>
                                                <option>Moderator</option>
                                                <option>Developer</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <input type="file" name="img[]" class="file-upload-default" />
                                            <div class="input-group col-xs-12">
                                                <input type="text" class="form-control file-upload-info" disabled placeholder="Upload Image" />
                                                <span class="input-group-append">
                                                    <button class="file-upload-browse btn btn-primary" type="button">Upload</button>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-lg" id="password" placeholder="Password" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-lg" id="confirmPassword"
                                                placeholder="Confirm Password" />
                                        </div>
                                        <div class="mb-4">
                                            <div class="form-check">
                                                <label class="form-check-label text-muted">
                                                    <input type="checkbox" class="form-check-input" />
                                                    I agree to all Terms & Conditions
                                                </label>
                                            </div>
                                        </div>
                                        <div class="mt-3">
                                            <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                                                href="../../index.html">SIGN UP</a>
                                        </div>
                                        <div class="text-center mt-4 font-weight-light">
                                            Already have an account? <a href="login.html" class="text-primary">Login</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUpPage