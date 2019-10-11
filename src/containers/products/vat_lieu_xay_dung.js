import React, { Component } from 'react';

class VatLieuXayDungProduct extends Component {
    componentDidMount() {
        document.title = "Vật liệu xây dựng";
    }

    render() {
        return (
            <div className="site-section border-bottom bg-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h2 className="text-black font-weight-bold text-uppercase" data-aos="fade">Vật liệu xây dựng</h2>
                        </div>
                        <div className="col-md-4">
                            <img src="/images/products/vat_lieu_xay_dung.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-8">
                            <h3>Giới thiệu chi tiết vật liệu xây dựng</h3>
                            <p>
                                Công ty Hoàng Anh buôn bán tất cả các loại vật liệu xây dựng, và vận chuyển vật liệu xây
                                dựng
                                bằng đường bộ và đường thủy một cách nhanh chóng, an toàn và giá thành cạnh tranh nhất.
                        </p>
                            <p>
                                Công ty HOÀNG ANH được biết đến với chức năng là nhà phân phối sắt thép xây dựng của các nhà
                                máy thép Việt Nhật, Miền Nam, Pomina và Việt Úc ngoài ra còn các loại gạch, đá, xi măng
                        </p>
                            <p>
                                Với nỗ lực không ngừng trong nhiều năm qua, đến nay Công ty <strong>Hoàng Anh</strong> đã
                                trở thành một địa
                                chỉ cung cấp sắt thép và vật liệu xây dựng cho các công trình lớn, nhỏ quen thuộc và đáng
                                tin cậy của thị trường Tp.HCM và các tỉnh thành phía Nam. Sự phát triển vững chắc của công
                                ty là dựa vào mỗi quan hệ bền vững và lâu dài với khách hàng.
                        </p>
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

export default VatLieuXayDungProduct;