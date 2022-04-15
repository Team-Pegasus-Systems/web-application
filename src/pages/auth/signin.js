import React, { Component } from "react";
import axios from 'axios';

export class SignInPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			password: "",
			email: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		const { id, value } = e.target;
		this.setState({
			[id]: value
		})
	}
	handleSubmit(e) {
		const {
			password,
			email
		} = this.state;
		if (password && email) {
			axios.post("http://localhost:5000/api/user/signIn", {
				email: email,
				password: password
			})
				.then(res => {
					if (res.data.status == "success") {
						console.log(res.data.token)
						// localStorage.setItem("x-falcon-token", res.data.token)
					} else {
						alert(res.data.result);
					}
				})
				.catch(err => {
					alert("An error occured while creating the account");
				})
		} else {
			alert("Fill the empty fields to proceed");
		}
	}
	render() {
		return (
			<div class="container-scroller">
				<div class="container-fluid page-body-wrapper full-page-wrapper">
					<div class="content-wrapper d-flex align-items-center auth px-0 ">
						<div class="row w-100 mx-0">
							<div class="col-lg-4 mx-auto">
								<div class="auth-form-light text-left py-5 px-4 px-sm-5 text-center">
									<div class="brand-logo ">
										<img
											src="../../assets/images/logo.svg"
											style={{ width: 200 }}
											alt="logo"
										/>
									</div>
									<h4>Hello! let's get started</h4>
									<h6 class="font-weight-light">Sign in to continue.</h6>
									<form class="pt-3">
										<div class="form-group">
											<input
												type="email"
												class="form-control form-control-lg"
												id="email"
												placeholder="Username"
												onChange={this.handleChange}
											/>
										</div>
										<div class="form-group">
											<input
												type="password"
												class="form-control form-control-lg"
												id="password"
												placeholder="Password"
												onChange={this.handleChange}
											/>
										</div>
										<div class="mt-3">
											<a
												class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
												onClick={this.handleSubmit}
											>
												SIGN IN
											</a>
										</div>
										<div class="my-2 d-flex justify-content-between align-items-center">
											<div class="form-check">
												<label class="form-check-label text-muted">
													<input type="checkbox" class="form-check-input" />
													Keep me signed in
												</label>
											</div>
										</div>
										<div class="text-center mt-4 font-weight-light">
											Don't have an account?{" "}
											<a href="register.html" class="text-primary">
												Create
											</a>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SignInPage;
