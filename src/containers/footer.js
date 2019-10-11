import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-4">
                            <div className="row">
                                <div className="col">
                                    <h3 className="footer-heading mb-4">Công ty</h3>
                                    <ul className="list-unstyled">
                                        <div className="row">
                                            <li className="col-6"><Link to="about">Giới thiệu</Link></li>
                                            <li className="col-6"><Link to="services">Dịch vụ</Link></li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-lg-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3 className="footer-heading mb-4">Địa chỉ</h3>
                                    <p> 266 Trường Chinh, Phường Tân Hưng Thuận, <br />Quận 12, TP Hồ Chí Minh</p>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="footer-heading mb-4">Liên hệ</h3>
                                    <p>Tel. <a href="tel:+ (84) 028 62569196">+ (84) 028 62569196</a> <br />
                                        Mail. <a href="mailto:ctytmhoanganh@gmail.com">ctytmhoanganh@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                        </div> */}
                        <div className="col">
                            <h3 className="footer-heading mb-4 text-center">Địa chỉ</h3>
                            <p className='text-center'> 266 Trường Chinh, <br/>Phường Tân Hưng Thuận, <br />Quận 12, TP Hồ Chí Minh</p>
                        </div>
                        <div className='col'>
                            <h3 className="footer-heading mb-4 text-center">Liên hệ</h3>
                            <p className='text-center'>Tel. <a href="tel:+ (84) 028 62569196">+ (84) 02862569196</a> | <a href="tel:0988848099">0988848099</a> <br />
                                Mail. <a href="mailto:ctytmhoanganh@gmail.com">ctytmhoanganh@gmail.com</a>
                            </p>
                        </div>

                    </div>
                    <div className="row pt-5 text-center">
                        <div className="col-md-12">
                            <p>
                                Copyright by Cong ty TNHH thuong mai va xay dung Hoang Anh &copy;
                    <script data-cfasync="false"
                                    src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
                                <script>document.write(new Date().getFullYear());</script>
                            </p>
                        </div>

                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;