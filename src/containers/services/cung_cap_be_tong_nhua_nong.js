import React, { Component } from 'react';

class CungCapBeTongNhuaNongService extends Component {
    componentDidMount() {
        document.title = "Cung cấp bê tông nhựa nóng";
    }

    render() {
        return (
            <div>
                <div className="site-blocks-cover overlay inner-page"
                    style={{ backgroundImage: 'url(/images/products/tram_tron_be_tong/2.jpg)' }}
                    data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-7">
                                <span className="sub-text">Các dịch vụ sẽ khiến khách hàng hài lòng</span>
                                <h1 className='text-uppercase'><strong>Cung cấp bê tông nhựa nóng</strong></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section pb-0">
                    <div className="container">
                        <div className="row mb-5 justify-content-center">
                            <div className="col-md-6 text-center">
                                <h3 className="display-4 text-black mb-1">Cung cấp bê tông nhựa nóng</h3>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <p>Công ty sản xuất trực tiếp <strong className='text-danger'>BÊ TÔNG NHỰA NÓNG</strong> tại trạm của chúng tôi nên đảm bảo chất lượng tốt nhất, nhiệt độ đảm bảo và giá cả tốt nhất cho khách hàng.</p>
                                <p>Trạm trộn bê tông nhựa nóng SPECO với công suất 120 tấn/h
                                </p>
                                <div className='row'>
                                    <div className="offset-md-2 col-md-8">
                                        <img width="100%"
                                            src="/images/products/tram_tron_be_tong/1.jpg" alt=""
                                            className="img-fluid my-4" />
                                        <img width="100%"
                                            src="/images/products/tram_tron_be_tong/2.jpg" alt=""
                                            className="img-fluid my-4" />
                                        <img width="100%"
                                            src="/images/products/tram_tron_be_tong/3.jpg" alt=""
                                            className="img-fluid my-4" />
                                        <img width="100%"
                                            src="/images/products/tram_tron_be_tong/4.jpg" alt=""
                                            className="img-fluid my-4" />
                                    </div>
                                </div>
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

export default CungCapBeTongNhuaNongService;