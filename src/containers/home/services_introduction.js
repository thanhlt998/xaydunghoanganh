import React, { Component } from 'react';

import {Link} from 'react-router-dom';


class ServiceIntroduction extends Component {
    render() {
        return (
            <div className="container mb-5">
                <div className="row my-5 justify-content-center">
                    <div className="col-12 text-center">
                        <h2 className="font-weight-light text-black display-4 text-uppercase">Chuyên môn</h2>
                    </div>
                    <div className="col-md-7 text-center">
                        <p><span className='text-uppercase text-danger h4'>CÔNG TY TNHH XÂY DỰNG CÔNG TRÌNH VÀ THƯƠNG MẠI HOÀNG ANH</span> là một trong những doanh nghiệp hàng
                            đầu trong lĩnh vực thi công đường nhựa, bán và cho thuê các loại xe rải nhựa, xe rả đá.
                            Ngoài ra chúng tôi chuyên cung cấp các sản phẩm nhựa đường, bê tông nhựa nóng, 
                            vật liệu xây dựng, vận chuyển thiết bị, ...</p>
                    </div>
                </div>
                <div className="row no-gutters align-items-stretch h-100">
                    <div className="col-lg-6">
                        <div className="row no-gutters align-items-stretch h-100 half-sm">
                            <div className="col-md-6 bg-image bg-sm-height"
                                style={{backgroundImage: "url('/images/services/origin/thi_cong_cong_trinh_giao_thong.jpg')"}}
                                data-aos="fade" data-aos-delay="0"></div>
                            <div className="col-md-6 bg-light text">
                                <div className="p-4">
                                    <h2 className="h5 mb-3 text-black line-height-sm text-uppercase">Thi công công trình giao thông</h2>
                                    <p>Với sự nỗ lực phấn đấu, tạo uy tín bằng chất lượng và tiến độ công trình Cty
                                        Hoàng Anh phấn đấu trở thành đơn vị mũi nhọn trong ngành xây dựng.</p>
                                    <p className="mb-0"><Link to="/services/thi_cong_cong_trinh_giao_thong"
                                        className=""><small className="text-uppercase font-weight-bold text-black">Read
                                                More</small></Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row no-gutters align-items-stretch h-100 half-sm">
                            <div className="col-md-6 bg-image order-md-2 order-lg-1 bg-sm-height"
                                style={{backgroundImage: "url('images/1.png')"}} data-aos="fade"
                                data-aos-delay="200"></div>
                            <div className="col-md-6 bg-light text order-md-1 order-lg-2">
                                <div className="p-4">
                                    <h2 className="h5 mb-3 text-black line-height-sm text-uppercase">Cho thuê thiết bị công trình</h2>
                                    <p>Chuyên cho thuê thiết bị công trình các loại, giá rẻ nhất Hồ Chí Minh, chất lượng
                                        uy tín hàng đầu. Cho thuê Thiết Bị Xây Dựng theo dự án, đáp ứng tiêu chuẩn ISO
                                        9001:2008</p>
                                    <p className="mb-0"><Link to="/services/cho_thue_thiet_bi_cong_trinh" className=""><small
                                        className="text-uppercase font-weight-bold text-black">Read More</small></Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="row no-gutters align-items-stretch h-100 half-sm">
                            <div className="col-md-6 bg-image order-md-1 order-lg-2 bg-sm-height"
                                style={{backgroundImage: "url('/images/more/1.jpg')"}} data-aos="fade"
                                data-aos-delay="300"></div>
                            <div className="col-md-6 bg-light text order-md-2 order-lg-1">
                                <div className="p-4">
                                    <h2 className="h5 mb-3 text-black line-height-sm text-uppercase">Vận chuyển máy móc công trình</h2>
                                    <p>Chuyên nhận chở máy móc công trình với chi phí thấp nhất, uy tín và chất lượng
                                        nhất</p>
                                    <p className="mb-0"><Link to="/services/van_chuyen_may_moc_cong_trinh"
                                        className=""><small className="text-uppercase font-weight-bold text-black">Read
                                                More</small></Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row no-gutters align-items-stretch h-100 half-sm">
                            <div className="col-md-6 bg-image order-md-2 bg-sm-height"
                                style={{backgroundImage: "url('/images/3.jpeg')"}} data-aos="fade"
                                data-aos-delay="400"></div>
                            <div className="col-md-6 bg-light text order-md-1">
                                <div className="p-4">
                                    <h2 className="h5 mb-3 text-black line-height-sm text-uppercase">Vận chuyển thiết bị công trình</h2>
                                    <p>Với kinh nghiệm trong nghề chúng tôi đã nhận vận chuyển thành công, nhanh chóng
                                        và an toàn nhiều loại máy móc xây dựng siêu nặng bằng các phương tiện kỹ thuật
                                        hiện đại và đội ngũ chuyên gia giàu kinh nghiệm.</p>
                                    <p className="mb-0"><Link to="/services/van_chuyen_may_moc_cong_trinh"
                                        className=""><small className="text-uppercase font-weight-bold text-black">Read
                                                More</small></Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row no-gutters align-items-stretch h-100">
                        <div className="col-lg-6">
                            <div className="row no-gutters align-items-stretch h-100 half-sm">
                                <div className="col-md-6 bg-image bg-sm-height"
                                    style={{backgroundImage: "url('/images/services/origin/thi_cong_bang_xe_tuoi_nhua_chuyen_dung.jfif')"}}
                                    data-aos="fade" data-aos-delay="0"></div>
                                <div className="col-md-6 bg-light text">
                                    <div className="p-4">
                                        <h2 className="h5 mb-3 text-black line-height-sm text-uppercase">Cho thuê và thi công bằng xe tưới
                                            nhựa</h2>
                                        <p>Chuyên cho thuê và thi công bằng xe tưới nhựa</p>
                                        <p className="mb-0"><Link to="/services/cho_thue_va_thi_cong_bang_xe_tuoi_nhua"
                                            className=""><small className="text-uppercase font-weight-bold text-black">Read
                                                    More</small></Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row no-gutters align-items-stretch h-100 half-sm">
                                <div className="col-md-6 bg-image order-md-2 order-lg-1 bg-sm-height"
                                    style={{backgroundImage: "url('/images/more/2.jpg')"}} data-aos="fade"
                                    data-aos-delay="200"></div>
                                <div className="col-md-6 bg-light text order-md-1 order-lg-2">
                                    <div className="p-4">
                                        <h2 className="h5 mb-3 text-black line-height-sm text-uppercase">Vận chuyển hàng hóa bằng đường bộ
                                            và đường thủy</h2>
                                        <p>Vận chuyển vật liệu xây dựng, cát đá, sỏi bằng xà lan, tàu thuyền và thiết bị máy móc</p>
                                        <p className="mb-0"><Link
                                            to="/services/van_chuyen_hang_hoa_bang_duong_bo_va_duong_thuy"
                                            className=""><small className="text-uppercase font-weight-bold text-black">Read
                                                    More</small></Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row no-gutters align-items-stretch h-100 half-sm">
                                <div className="col-md-6 bg-image order-md-1 order-lg-2 bg-sm-height"
                                    style={{backgroundImage: "url('/images/7.png')"}} data-aos="fade"
                                    data-aos-delay="300"></div>
                                <div className="col-md-6 bg-light text order-md-2 order-lg-1">
                                    <div className="p-4">
                                        <h2 className="h5 mb-3 text-black line-height-sm text-uppercase">Cho thuê và thi công bằng xe rải
                                            đá</h2>
                                        <p>Chuyên cho thuê và thi công bằng xe rải đá</p>
                                        <p className="mb-0"><Link to="/services/cho_thue_va_thi_cong_rai_da"
                                            className=""><small className="text-uppercase font-weight-bold text-black">Read
                                                    More</small></Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row no-gutters align-items-stretch h-100 half-sm">
                                <div className="col-md-6 bg-image order-md-1 order-lg-2 bg-sm-height"
                                    style={{backgroundImage: "url('/images/products/tram_tron_be_tong/2.jpg')"}} data-aos="fade"
                                    data-aos-delay="300"></div>
                                <div className="col-md-6 bg-light text order-md-2 order-lg-1">
                                    <div className="p-4">
                                        <h2 className="h5 mb-3 text-black line-height-sm text-uppercase">Chuyên cung cấp và thảm bê tông nhựa nóng</h2>
                                        <p>Công ty sản xuất trực tiếp <span className='text-uppercase'>bê tông nhựa nóng</span> tại trạm của chúng tôi nên đảm bảo chất lượng tốt nhất, 
                                            nhiệt độ đảm bảo và giá cả tốt nhất cho khách hàng.</p>
                                        <p className="mb-0"><Link to="/services/cung_cap_be_tong_nhua_nong"
                                            className=""><small className="text-uppercase font-weight-bold text-black">Read
                                                    More</small></Link></p>
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

export default ServiceIntroduction;
