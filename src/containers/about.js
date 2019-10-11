import React, { Component } from 'react';


class About extends Component {
    componentDidMount() {
        document.title = "Giới thiệu";
        const script = document.createElement("script");
        script.src = "/js/main.js";
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        return (
            <div className="site-section border-bottom bg-light py-5">
                <div className="container">
                    <div className="row">
                        <h2>CÔNG TY TNHH XÂY DỰNG CÔNG TRÌNH VÀ THƯƠNG MẠI HOÀNG ANH</h2>
                        <p>Lời đầu tiên <em>CÔNG TY TNHH XÂY DỰNG CÔNG TRÌNH VÀ THƯƠNG MẠI HOÀNG ANH</em> chúng tôi xin gửi
                            tới quý đối tác, khách hàng và đồng nghiệp lời chào trân trọng, kính chúc quý
                        đơn vị kinh doanh ngày càng hưng thịnh.</p>
                        <p>
                            Trải qua quá trình xây dựng, phát triển và trưởng thành, giờ đây <em>CÔNG TY TNHH XÂY DỰNG CÔNG
                            TRÌNH VÀ THƯƠNG MẠI HOÀNG ANH</em> là một trong những doanh nghiệp hàng đầu trong lĩnh vực
                        thi công
                        đường nhựa, bán và cho thuê các loại xe rải nhựa, xe rả đá. Ngoài ra chúng tôi chuyên cung cấp
                        các sản phẩm nhựa đường, cho thuê máy móc công trình, vận chuyển máy công trình,... với đội ngũ
                        cán bộ lãnh đạo, quản lý năng động, sáng tạo, đội ngũ cán bộ khoa học kỹ thuật có trình độ
                        nghiệp vụ và lực lượng công nhân kỹ thuật lành nghề cùng với trang thiết bị hiện đại, đồng
                        bộ. Với phương trâm chất lượng dịch vụ đứng trên tất cả, chúng tôi sẽ luôn mang đến cho quý
                        khách
                        hàng sự tin tưởng và hài lòng về các sản phẩm, dịch vụ do chúng tôi cung cấp.
                    </p>
                        <p> Một lần nữa, chúng tôi chân thành cám ơn và rất mong được đón tiếp Quý khách hàng. Kính chúc quý
                        khách một năm làm ăn thuận buồm xuôi gió.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;