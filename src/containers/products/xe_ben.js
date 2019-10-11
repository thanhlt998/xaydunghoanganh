import React, { Component } from 'react';


class XeBenProduct extends Component {
    componentDidMount() {
        document.title = "Xe ben";
    }
    
    render() {
        return (
            <div className="site-section border-bottom bg-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <h2 className="text-black font-weight-bold text-uppercase" data-aos="fade">Xe Ben</h2>
                    </div>
                    <div className="col-md-4">
                        <img src="/images/products/xe_ben.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-8 table-responsive">
                        <h3>Giới thiệu chi tiết xe ben</h3>
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th className="w-25"></th>
                                    <th className="w-25"></th>
                                    <th className="w-50"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="2">
                                        <span><strong>Loại xe</strong></span>
                                    </td>
                                    <td className="text-center">
                                        <span><strong>TRUONGLONG-FC.DUMP</strong></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <span><strong>Loại xe nền</strong></span>
                                    </td>
                                    <td className="text-center">
                                        <span><strong>HINO FC9JESA</strong></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="3">
                                        <span><strong>Kích thước &amp; Trọng lượng</strong></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Kích thước xe: Dài x Rộng x Cao</span>
                                    </td>
                                    <td className="text-center">
                                        <span>mm</span>
                                    </td>
                                    <td className="text-center">
                                        <span>5.700 x 2.200 x 2.660</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Chiều dài cơ sở</span>
                                    </td>
                                    <td className="text-center">
                                        <span>mm</span>
                                    </td>
                                    <td className="text-center">
                                        <span>3.420</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <span>Công thức bánh xe</span>
                                    </td>
                                    <td className="text-center">
                                        <span>4 x 2</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Trọng lượng bản thân</span>
                                    </td>
                                    <td className="text-center">
                                        <span>kG</span>
                                    </td>
                                    <td className="text-center">
                                        <span>4.205</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Trọng tải cho phép chở</span>
                                    </td>
                                    <td className="text-center">
                                        <span>kG</span>
                                    </td>
                                    <td className="text-center">
                                        <span>6.000</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Trọng lượng toàn bộ</span>
                                    </td>
                                    <td className="text-center">
                                        <span>kG</span>
                                    </td>
                                    <td className="text-center">
                                        <span>10.400</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <span>Số chỗ ngồi</span>
                                    </td>
                                    <td className="text-center">
                                        <span>03</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="3">
                                        <span><strong>Động cơ</strong></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <span>Loại</span>
                                    </td>
                                    <td>
                                        <span>Diesel HINO J05E-TE, 4 máy thẳng hàng và tăng áp</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Đường kính x hành trình piston</span>
                                    </td>
                                    <td className="text-center">
                                        <span>mm</span>
                                    </td>
                                    <td className="text-center">
                                        <span>112 x 130</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Thể tích làm việc</span>
                                    </td>
                                    <td className="text-center">
                                        <span>cm<sup>3</sup></span>
                                    </td>
                                    <td className="text-center">
                                        <span>5.123</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Công suất lớn nhất</span>
                                    </td>
                                    <td className="text-center">
                                        <span>kW/rpm</span>
                                    </td>
                                    <td className="text-center">
                                        <span>118/2.500</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Mômen xoắn cực đại</span>
                                    </td>
                                    <td className="text-center">
                                        <span>N.m/rpm</span>
                                    </td>
                                    <td className="text-center">
                                        <span>520/1.500</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Dung tích thùng nhiên liệu</span>
                                    </td>
                                    <td className="text-center">
                                        <span>lít</span>
                                    </td>
                                    <td className="text-center">
                                        <span>100</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <span>Cỡ lốp</span>
                                    </td>
                                    <td className="text-center">
                                        <span>8.25 - 16 - 14PR</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Tốc độ cực đại</span>
                                    </td>
                                    <td className="text-center">
                                        <span>km/h</span>
                                    </td>
                                    <td className="text-center">
                                        <span>85</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Khả năng vượt dốc</span>
                                    </td>
                                    <td className="text-center">
                                        <span>θ %</span>
                                    </td>
                                    <td className="text-center">
                                        <span>36</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="3">
                                        <span><strong>Thung tải và hệ thống nâng hạ</strong></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Kích thước lọt lòng: Dài x Rộng x Cao</span>
                                    </td>
                                    <td className="text-center">
                                        <span>mm</span>
                                    </td>
                                    <td className="text-center">
                                        <span>3.370 x 2.060 x 700</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Thời gian nâng</span>
                                    </td>
                                    <td className="text-center">
                                        <span>giây</span>
                                    </td>
                                    <td className="text-center">
                                        <span>20</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Thời gian hạ</span>
                                    </td>
                                    <td className="text-center">
                                        <span>giây</span>
                                    </td>
                                    <td className="text-center">
                                        <span>15</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Góc nâng</span>
                                    </td>
                                    <td className="text-center">
                                        <span>độ</span>
                                    </td>
                                    <td className="text-center">
                                        <span>49 ~ 53</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Xy lanh nâng hạ thùng</span>
                                    </td>
                                    <td className="text-center">
                                        <span>mm</span>
                                    </td>
                                    <td className="text-center">
                                        <span>ø160 - 570</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Áp suất làm việc</span>
                                    </td>
                                    <td className="text-center">
                                        <span>kG/cm<sup>2</sup></span>
                                    </td>
                                    <td className="text-center">
                                        <span>130</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Bơm<br/>
                                            - Lưu lượng làm việc<br/>
                                            - Áp suất tối đa</span>
                                    </td>
                                    <td className="text-center">
                                        <span>lít/phút<br/>
                                            kG/cm<sup>2</sup></span>
                                    </td>
                                    <td className="text-center">
                                        <span>Loại bơm bánh răng<br/>
                                            60<br/>
                                            210</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <span>Hệ thống điều khiển</span>
                                    </td>
                                    <td className="text-center">
                                        <span>Đặt trong cabin</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <span>Thùng dầu</span>
                                    </td>
                                    <td className="text-center">
                                        <span>Loại gắn liền với xy lanh nâng thùng</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <span><strong>Trang bị tiêu chuẩn</strong></span>
                                    </td>
                                    <td>
                                        <span>01 bánh dự phòng, bộ đồ nghề, tấm che nắng cho tài xế, 01 đầu
                                            đĩa CD với Radio AM/FM, đồng hồ đo tốc độ động cơ, khóa nắp thùng
                                            nhiên liệu và mồi thuốc lá.</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
        )
    }
}

export default XeBenProduct;