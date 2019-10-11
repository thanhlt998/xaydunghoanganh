import React, { Component } from 'react';

class SelfIntroduction extends Component {
    render() {
        return (
            <div className="site-section border-bottom bg-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h2 className="text-danger h1 font-weight-bold text-uppercase" data-aos="fade">Giới thiệu về chúng
                            tôi</h2>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-0 align-self-center" data-aos="fade" data-aos-delay="0">
                            <div className="d-flex align-items-center">
                                <div className="mr-3"><span className="flaticon-agreement display-3 text-primary"></span></div>
                                <div className="">
                                    Một trong những doanh nghiệp hàng đầu trong lĩnh vực thi công
                                    láng và thảm nhựa, bê tông nhựa và mua bán nhựa đường, bê tông nhựa nóng và cho thuê
                                    các thiết bị thi công tưới nhựa, xe rải đá, máy móc, xe rùa, máy rải, xe ban,... 
                                    được nhập khẩu từ nước ngoài
                            </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-0 align-self-center" data-aos="fade" data-aos-delay="200">
                            <div className="d-flex align-items-center">
                                <div className="mr-3"><span className="flaticon-worker display-3 text-primary"></span></div>
                                <div className="">
                                    Đội ngũ cán bộ lãnh đạo, quản lý năng động, sáng tạo, đội ngũ cán bộ khoa học kỹ thuật
                                    có trình độ nghiệp vụ và lực lượng công nhân kỹ thuật lành nghề cùng với trang thiết bị
                                    hiện đại, đồng bộ
                            </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-0 mb-lg-0 align-self-center" data-aos="fade" data-aos-delay="300">
                            <div className="d-flex align-items-center">
                                <div className="mr-3"><span className="flaticon-excavator display-3 text-primary"></span></div>
                                <div className="">
                                    Phương châm uy tín, chất lượng dịch vụ đứng trên tất cả, mang đến cho quý khách hàng sự tin
                                    tưởng và hài lòng về các sản phẩm, dịch vụ
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default SelfIntroduction;