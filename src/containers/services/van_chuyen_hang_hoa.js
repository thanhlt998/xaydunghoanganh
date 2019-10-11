import React, { Component } from 'react';


class VanChuyenHangHoaService extends Component {
    componentDidMount() {
        document.title = "Vận chuyển hàng hóa";
    }

    render() {
        return (
            <div>
                <div className="site-blocks-cover overlay inner-page" style={{ backgroundImage: "url(/images/4.jpeg)" }} data-aos="fade"
                    data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-7">
                                <span className="sub-text">Các dịch vụ sẽ khiến khách hàng hài lòng</span>
                                <h1><strong>VẬN CHUYỂN HÀNG HÓA BẰNG ĐƯỜNG BỘ VÀ ĐƯỜNG THỦY</strong></h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section pb-0">
                    <div className="container">
                        <div className="row mb-5 justify-content-center">
                            <div className="col-md-6 text-center">
                                <h3 className="display-4 text-black mb-1">Vận chuyển hàng hóa bằng đường bộ và đường thủy</h3>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <h4>Công ty <em>HOÀNG ANH</em> Với kinh nghiệm trong nghề chúng tôi đã nhận vận chuyển thành
                                    công, nhanh
                                    chóng và an toàn nhiều loại hàng hóa bằng đường bộ và đường thủy bằng các phương tiện kỹ
                            thuật hiện đại và đội ngũ chuyên gia giàu kinh nghiệm.</h4>
                                <p>
                                    Với phương trâm hoạt động tạo Uy tín ngay từ ban đầu, chúng tôi xây dựng cách thức hoạt động
                            nhằm <span className="text-danger">"Chuẩn xác trong giao nhận, nhanh chóng trong vận chuyển,
                                hiệu quả với phương thức vận chuyển đa dạng và giá cả hợp lý"</span> nhằm thỏa mãn yêu
                                cầu cao nhất của bạn.
                        </p>
                                <div className="row">
                                    <div className="offset-md-2 col-md-8">
                                        <img src="/images/more/2.jpg" alt="" className="img-fluid mb-3" />
                                    </div>
                                </div>
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

export default VanChuyenHangHoaService;