import React, { Component } from 'react';


class VanChuyenMayMocService extends Component {
    componentDidMount() {
        document.title = "Vận chuyển máy móc";
    }

    render() {
        return (
            <div>
                <div className="site-blocks-cover overlay inner-page" style={{ backgroundImage: "url(/images/5.jpeg)" }} data-aos="fade"
                    data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-7">
                                <span className="sub-text">Các dịch vụ sẽ khiến khách hàng hài lòng</span>
                                <h1><strong>VẬN CHUYỂN MÁY MÓC CÔNG TRÌNH HCM</strong></h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section pb-0">
                    <div className="container">
                        <div className="row mb-5 justify-content-center">
                            <div className="col-md-6 text-center">
                                <h3 className="display-4 text-black mb-1">Vận chuyển máy móc công trình</h3>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <p>Công ty <strong>Hoàng Anh</strong> chuyên nhận chở máy móc công trình với chi phí thấp nhất,
                                    uy
                            tín và chất lượng nhất.<br />
                                    <span className="text-danger">HOTLINE: <a href="tel:0988 848 099">0988 848 099</a> - <a
                                        href="tel:0989 270 130">0989 270 130</a> - <a href="0934 131 099">0934 131
                                    099</a></span>
                                </p>
                                <p>Công ty HOÀNG ANH xin cảm ơn Quý khách
                                    hàng đã quan tâm và ủng hộ cty chúng tôi trong thời gian qua,chúng tôi chuyên:
                                </p>
                                <ul>
                                    <li>Chở máy xúc, máy đào, xe lu, xe ủi, si lô, bồn ống, biến áp, máy cẩu.</li>
                                    <li>Chở máy công trình, nồi hơi, rô bốt, xe san gạt, xe xúc lật.</li>
                                    <li>Chở máy khoan cọc nhồi, máy nghiền đá, trạm trộn, máy biến thế.</li>
                                    <li>nhận chở ghép hàng hóa máy móc công trình đi các tỉnh bắc nam.</li>
                                    <li>Chở bồn tròn, lu tròn, máy móc, hàng hóa siêu trường - siêu trọng.</li>
                                    <li>Chở container 20f, 40f, Flatrack, hàng quá khổ, quá tải.</li>
                                </ul>
                                <p className="text-danger">"HÃY GỌI CHO TÔI ĐỂ CÓ GIÁ RẺ NHẤT THỊ TRƯỜNG!"</p>
                            </div>
                        </div>
                        <div className="row pb-5">
                            <div className="col">
                                <div className="text-danger font-weight-bold mb-1">LIÊN HỆ NGAY VỚI CHÚNG TÔI ĐỂ NHẬN ĐƯỢC TƯ VẤN VÀ
                            PHỤC VỤ TỐT NHẤT.</div>
                                <div className="text-danger font-weight-bold">HOTLINE: 0988 848 099 - 0989 270-130. 0934 131 099</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VanChuyenMayMocService;