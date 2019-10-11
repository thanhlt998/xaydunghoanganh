import React, { Component } from 'react';


class Contact extends Component {
    componentDidMount() {
        document.title = 'Liên hệ';
        const script = document.createElement("script");
        script.src = "/js/main.js";
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        return (
            <div className="site-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8 mb-5">
                            <form action="mailto:ctytmhoanganh@gmail.com" className="p-5 bg-white">
                                <div className="row form-group">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label className="font-weight-bold" for="fullname">Họ và tên</label>
                                        <input type="text" id="fullname" className="form-control" name="fullname" placeholder="Họ và tên" />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="font-weight-bold" for="email">Email</label>
                                        <input type="email" id="email" className="form-control" name="email" placeholder="Địa chỉ email" />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="font-weight-bold" for="message">Tin nhắn</label>
                                        <textarea name="message" id="message" cols="30" rows="5" className="form-control"
                                            placeholder="Gửi lời chào tới chúng tôi"></textarea>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <input type="submit" value="Gửi" className="btn btn-primary" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4">
                            <div className="p-4 mb-3 bg-white">
                                <h3 className="h5 text-black mb-3">Thông tin liên hệ</h3>
                                <p className="mb-0 font-weight-bold">Địa chỉ</p>
                                <p className="mb-4">266 Trường Chinh, Phường Tân Hưng Thuận, Quận 12, TP Hồ Chí Minh</p>
                                <p className="mb-0 font-weight-bold">Điện thoại</p>
                                <p className="mb-4"><a href="tel:028 62569196">028 62569196</a></p>
                                <p className="mb-0 font-weight-bold">Địa chỉ email</p>
                                <p className="mb-0"><a href="mailto:ctytmhoanganh@gmail.com">ctytmhoanganh@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;