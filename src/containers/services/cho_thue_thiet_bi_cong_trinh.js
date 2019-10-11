import React, { Component } from 'react';

class ChoThueThietBiCongTrinhService extends Component {
    componentDidMount() {
        document.title = "Cho thuê thiết bị công trình";
    }

    render() {
        return (
            <div>
                <div className="site-blocks-cover overlay inner-page"
                    style={{ backgroundImage: 'url(/images/more/1.jpg)' }}
                    data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-7">
                                <span className="sub-text">Các dịch vụ sẽ khiến khách hàng hài lòng</span>
                                <h1><strong>CHO THUÊ THIẾT BỊ CÔNG TRÌNH</strong></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section pb-0">
                    <div className="container">
                        <div className="row mb-5 justify-content-center">
                            <div className="col-md-6 text-center">
                                <h3 className="display-4 text-black mb-1">Cho thuê thiết bị công trình</h3>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <p>Công ty <strong>Hoàng Anh</strong> chuyên cho thuê thiết bị công trình các loại, giá rẻ nhất
                                    HCM,
                            chất lượng uy tín hàng đầu.</p>
                                <p>Cho thuê thiết bị xây dựng theo dự án, đáp ứng tiêu chuẩn ISO 9001:2008, gồm:

                                </p>
                                <ul>
                                    <li>Thiết bị: Vận thăng, xe cẩu, xe nâng, máy phát điện.</li>
                                    <li>Xe công trình loại: Xe đào, Xe ủi, Xe ben, Xe xúc lật, Xe bồn, Xe tải.</li>
                                </ul>
                                <p>Sự lựa chọn hoàn hảo cho các dịch vụ: <em className="text-danger">Chuyên nghiệp - Tin cậy - An
                                toàn!</em></p>
                            </div>
                        </div>
                        <div className="row pb-5">
                            <div className="col">
                                <div className="text-danger font-weight-bold mb-1">LIÊN HỆ NGAY VỚI CHÚNG TÔI ĐỂ NHẬN ĐƯỢC TƯ VẤN VÀ
                            PHỤC VỤ TỐT NHẤT.</div>
                                <div className="text-danger font-weight-bold">HOTLINE: 0988 848 099 - 0989 270-130. 0934 131 099
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChoThueThietBiCongTrinhService;