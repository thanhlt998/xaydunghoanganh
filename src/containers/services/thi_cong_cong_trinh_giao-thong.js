import React, { Component } from 'react';


class ThiCongCongTrinhGiaoThongService extends Component {
    componentDidMount() {
        document.title = "Thi công công trình giao thông";
    }

    render() {
        return (
            <div>
                <div className="site-blocks-cover overlay inner-page" style={{ backgroundImage: "url(/images/7.png)" }} data-aos="fade"
                    data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-7">
                                <span className="sub-text">Các dịch vụ sẽ khiến khách hàng hài lòng</span>
                                <h1><strong>THI CÔNG CÔNG TRÌNH GIAO THÔNG</strong></h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section">
                    <div className="container">
                        <div className="row mb-5 justify-content-center">
                            <div className="col-md-6 text-center">
                                <h3 className="display-4 text-black mb-1">Thi công công trình giao thông</h3>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <h4>Với sự nỗ lực phấn đấu, tạo uy tín bằng chất lượng và tiến độ công trình công ty Hoàng Anh
                                    phấn đấu trở thành đơn vị mũi nhọn trong ngành xây dựng. Với phương châm hợp tác cùng phát
                                    triển,
                                    Công ty hy vọng ngày càng nhận được hợp tác hơn nữa của các đơn vị trong, ngoài ngành và
                            nước ngoài để Hoàng Anh luôn là thương hiệu tin cậy trong hiện tại và tương lai.</h4>
                                <p>
                                    Với nhu cầu phát triển hệ thống cơ sở hạ tầng, tạo tiền đề cho sự phát triển kinh tế, Công
                                    ty Hoàng Anh tự hào được đóng góp sức mình trong việc thi công những công trình cầu đường,
                                    hạ tầng kỹ thuật của Tp. Hồ Chí Minh. Đặc biệt các công trình đã đưa vào sử dụng là một dấu
                                    ấn khẳng định sự đảm bảo về kỹ thuật, mỹ thuật.
                        </p>
                            </div>
                            <div className="row">
                                <div className="offset-md-2 col-md-8">
                                    <img src="data_images/services/origin/thi_cong_cong_trinh_giao_thong.jpg" alt=""
                                        className="img-fluid mb-3" />
                                    <img width="100%" src="data_images/services/origin/thi cong 2.jpg" alt="" className="img-fluid" />
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

export default ThiCongCongTrinhGiaoThongService;