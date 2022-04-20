import React, { Component } from 'react'

export class HomePage extends Component {
    render() {
        return (
            <div>
                <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="col-lg-6 align-self-center">
                                        <div class="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <h2>The Best Tool To Track Bugs In Any Project</h2>
                                                    <p><strong>Falcon Solutions</strong> bug tracking tool provides you the facility to track bugs in any project without any complexity</p>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="white-button first-button scroll-to-section">
                                                        <a href="/signup" style={{ fontSize: 20 }}>Join Free </a>
                                                    </div>
                                                    <div class="white-button scroll-to-section">
                                                        <a href="/signin" style={{ fontSize: 20 }}>Sign In </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                            <img src="../../assets/images/logo.svg" alt="" style={{ height: 500 }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage