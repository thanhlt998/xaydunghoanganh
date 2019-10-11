import React, { Component } from 'react';

class MayRaiProduct extends Component {
    componentDidMount() {
        document.title = "Máy rải";
    }

    render() {
        return (
            <div className="site-section border-bottom bg-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h2 className="text-black font-weight-bold text-uppercase text-uppercase" data-aos="fade">Máy rải Dynapac SD 2550 CS</h2>
                        </div>
                        <div className="col-md-4">
                            <img src="/images/products/may_rai/4.jpg" alt="" className="img-fluid my-2" />
                            <img src="/images/products/may_rai/3.jpg" alt="" className="img-fluid my-2" />
                            <img src="/images/products/may_rai/2.jpg" alt="" className="img-fluid my-2" />
                            <img src="/images/products/may_rai/1.jpg" alt="" className="img-fluid my-2" />
                        </div>
                        <div className="col-md-8 table-responsive">
                            <h3 className='text-center'>Giới thiệu chi tiết máy rải</h3>
                            <table className='table table-borderness'>
                                {/* <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead> */}
                                <tbody>
                                    <tr>
                                        <td colSpan="2" className='font-weight-bold text-uppercase'>Kích thước</td>
                                    </tr>
                                    <tr>
                                        <td className='w-50'>Chiều rộng cơ sở</td>
                                        <td>2.55 m</td>
                                    </tr>
                                    <tr>
                                        <td>Chiều rộng tối đa</td>
                                        <td>10.00 m</td>
                                    </tr>
                                    <tr>
                                        <td>Chiều rộng tối thiểu</td>
                                        <td>2.0 m</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2" className='font-weight-bold text-uppercase'>Trọng lượng</td>
                                    </tr>
                                    <tr>
                                        <td>Trọng lượng</td>
                                        <td>18.5 tấn</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2" className='font-weight-bold text-uppercase'>Khả năng</td>
                                    </tr>
                                    <tr>
                                        <td>Lý thuyết</td>
                                        <td>800 t/h</td>
                                    </tr>
                                    <tr>
                                        <td>Độ dày đặt tối đa</td>
                                        <td>320 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Mức lát tối thiểu</td>
                                        <td>150 mm</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2" className='font-weight-bold text-uppercase'>Phễu</td>
                                    </tr>
                                    <tr>
                                        <td>Khả năng</td>
                                        <td>6,5 m3 (15,0 t)</td>
                                    </tr>
                                    <tr>
                                        <td>Tải chiều cao tại trung tâm</td>
                                        <td>555 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Tải chiều cao trên các bên</td>
                                        <td>3610 mm</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2" className='font-weight-bold text-uppercase'>Tốc độ</td>
                                    </tr>
                                    <tr>
                                        <td>Tốc độ chuyền</td>
                                        <td>4 km/h</td>
                                    </tr>
                                    <tr>
                                        <td>Tốc độ làm việc</td>
                                        <td>Lên tới 28 m/min</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2" className='font-weight-bold text-uppercase'>Động cơ</td>
                                    </tr>
                                    <tr>
                                        <td>Model</td>
                                        <td>Cummins QSB 6.7- C190</td>
                                    </tr>
                                    <tr>
                                        <td>Puissance, SAE J1995</td>
                                        <td>142 kW (193 hp) @ 2200 rpm with infinitely variable eco- mode</td>
                                    </tr>
                                    <tr>
                                        <td>Nguồn điện</td>
                                        <td>24V</td>
                                    </tr>
                                    <tr>
                                        <td>Dung tích bình nhiên liệu</td>
                                        <td>350 l</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2" className='font-weight-bold text-uppercase'>Khung gầm</td>
                                    </tr>
                                    <tr>
                                        <td>Chiều rộng</td>
                                        <td>320 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Thời gian hỗ trợ</td>
                                        <td>2900 mm</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2" className='font-weight-bold text-uppercase'>Băng tải</td>
                                    </tr>
                                    <tr>
                                        <td>Loại</td>
                                        <td>Hai băng tải trung tâm</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2" className='font-weight-bold text-uppercase'>Đinh ốc</td>
                                    </tr>
                                    <tr>
                                        <td>Đường kính</td>
                                        <td>380 mm</td>
                                    </tr>

                                </tbody>
                            </table>
                            <div>
                                <iframe width="80%" height="480" className="popup-vimeo mx-2" src="https://www.youtube.com/embed/6e9Fi6Zj-kE" frameborder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe width="80%" height="480" className="popup-vimeo mx-2" src="https://www.youtube.com/embed/zPzrgJ9Th_o" frameborder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe width="80%" height="480" className="popup-vimeo mx-2" src="https://www.youtube.com/embed/05Cz2mj6AIY" frameborder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe width="80%" height="480" className="popup-vimeo mx-2" src="https://www.youtube.com/embed/-TSObPBM1Eg" frameborder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe width="80%" height="480" className="popup-vimeo mx-2" src="https://www.youtube.com/embed/YVUliHvVym0" frameborder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe width="80%" height="480" className="popup-vimeo mx-2" src="https://www.youtube.com/embed/u6HjdzQ8nVU" frameborder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p className="text-danger">
                                <strong><em>LIÊN HỆ NGAY VỚI CHÚNG TÔI ĐỂ NHẬN ĐƯỢC TƯ VẤN VÀ PHỤC VỤ TỐT
                                    NHẤT.</em></strong> <br />
                                <strong><em>HOTLINE: 0988 848 099 - 0989 270-130. 0934 131 099</em></strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MayRaiProduct;