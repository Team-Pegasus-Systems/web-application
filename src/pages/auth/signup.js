import React, { Component } from 'react'
import axios from 'axios';

export class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            secondName: "",
            password: "",
            confirmPassword: "",
            age: "",
            gender: "",
            mobile: "",
            email: "",
            role: "",
            profileImage: null,
            conditions: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
    }
    handleChange(e) {
        const { id, value } = e.target;
        this.setState({
            [id]: value
        })
    }
    handleFileChange(e) {
        const { files } = e.target;
        this.setState({
            profileImage: files[0] || null
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        const {
            firstName,
            secondName,
            password,
            confirmPassword,
            age,
            gender,
            mobile,
            email,
            role,
            profileImage,
        } = this.state;
        if (!this.state.conditions) {
            alert("Please agree with our terms and conditions");
            return;
        }
        if (firstName && secondName && password && confirmPassword && age && gender && mobile && email && role && profileImage) {
            // && password & confirmPassword && age && gender && mobile && email && role && profileImage
            if (confirmPassword == password) {
                let form = new FormData();
                form.append("firstName", firstName);
                form.append("secondName", secondName);
                form.append("password", password);
                form.append("age", age);
                form.append("gender", gender);
                form.append("mobile", mobile);
                form.append("email", email);
                form.append("role", role);
                form.append("image", profileImage);
                axios.post("http://localhost:5000/api/user/availability", { email: email })
                    .then(res => {
                        if (res.data.status == "success") {
                            axios.post("http://localhost:5000/api/user", form)
                                .then(res => {
                                    if (res.data.status == "success") {
                                        console.log("success", res.data.token)
                                        // localStorage.setItem("x-falcon-token", res.data.token)
                                        // successful scenario
                                    } else {
                                        console.log("unsuccessful", res.data.status)
                                        //  unsuccessful scenario
                                    }
                                })
                                .catch(err => {
                                    alert("An error occured while creating the account");
                                })
                        } else {
                            alert(res.data.result);
                        }
                    })
                    .catch(err => {
                        alert("An error occured while creating the account");
                    })
            } else {
                alert("Password is not matching with the confirm password! Please re-enter the password confirmation")
            }
        } else {
            alert("Fill the empty fields to proceed");
        }
    }
    render() {
        return (
            <div class="container-scroller">
                <div class="container-fluid page-body-wrapper full-page-wrapper">
                    <div class="content-wrapper d-flex align-items-center auth px-0">
                        <div class="row w-100 mx-0">
                            <div class="col-lg-4 mx-auto">
                                <div class="auth-form-light text-left py-5 px-4 px-sm-5 ">
                                    <div class="brand-logo text-center">
                                        <img src="../../assets/images/logo.svg" style={{ width: 200 }} alt="logo" />
                                    </div>
                                    <h4 class="text-center">New here?</h4>
                                    <h6 class="font-weight-light text-center">Signing up is easy. It only takes a few steps</h6>
                                    <form class="pt-3">
                                        <div class="form-group">
                                            <input type="text" class="form-control form-control-lg" id="firstName" placeholder="First name" onChange={this.handleChange} />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control form-control-lg" id="secondName" placeholder="Last Name" onChange={this.handleChange} />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-lg" id="email" placeholder="Email" onChange={this.handleChange} />
                                        </div>
                                        <div class="form-group">
                                            <input type="number" class="form-control form-control-lg" id="mobile" placeholder="Mobile" onChange={this.handleChange} />
                                        </div>
                                        <div class="form-group">
                                            <input type="number" class="form-control form-control-lg" id="age" placeholder="Age" onChange={this.handleChange} />
                                        </div>
                                        <div class="form-group">
                                            <select class="form-control" id="gender" onChange={this.handleChange} >
                                                <option value={null}>Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <select class="form-control form-control-lg" id="role" onChange={this.handleChange} >
                                                <option value={null}>Role</option>
                                                <option value="ADMIN">Admin</option>
                                                <option value="MODERATOR">Moderator</option>
                                                <option value="EXT_DEV">Developer</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <input class="form-control" type="file" id="profileImage" onChange={this.handleFileChange} />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-lg" id="password" placeholder="Password" onChange={this.handleChange} />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-lg" id="confirmPassword"
                                                placeholder="Confirm Password" onChange={this.handleChange} />
                                        </div>
                                        <div class="mb-4">
                                            <div class="form-check">
                                                <label class="form-check-label text-muted">
                                                    <input type="checkbox" class="form-check-input" id="conditions" onChange={this.handleChange} />
                                                    I agree to all Terms & Conditions
                                                </label>
                                            </div>
                                        </div>
                                        <div class="mt-3">
                                            <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                                                href="../../index.html" onClick={this.handleSubmit}>SIGN UP</a>
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