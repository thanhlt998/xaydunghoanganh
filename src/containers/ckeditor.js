import React, { Component } from 'react';
import CKEditor from 'ckeditor4-react';





class CKeditor extends Component {

    render() {
        let data = `<div class="site-section border-bottom bg-light py-5">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center mb-5">
                    <h2 class="text-black font-weight-bold text-uppercase" data-aos="fade">Nhựa đường đặc 60/70</h2>
                </div>
                <div class="col-md-4">
                    <img src="data_images/products/nhua_duong_dac_60_70.jpg" alt="" class="img-fluid">
                </div>
                <div class="col-md-8">
                    <h3>Giới thiệu chi tiết vật liệu xây dựng</h3>
                    <p>
                        <strong>1. Tên sản phẩm:</strong><br>
                        - Nhựa đường đặc Chủng loại: 60/70 <br>
                        - Nhựa đường đặc 60/70 là nhựa đường đặc có độ kim lún 60/70. <br>
                        - Nhựa đường đặc có nguồn gốc dầu hỏa (nhựa đường đặc nóng Bitum) là sản phẩm thu được
                        từ <br>
                        công nghệ lọc dầu, bao gồm các hợp chất hydrocacbua cao phân tử như:
                        C<sub>n</sub>H<sub>2n+2</sub>, C<sub>n</sub>H<sub>2n</sub>,
                        hydrocacbua thơm mạch vòng (C<sub>n</sub>H<sub>2n-6</sub>) và một số dị vòng có chứa oxy, ni
                        tơ và lưu huỳnh. <br><br>
                        Ở trạng thái tự nhiên, nhựa đường đặc có dạng đặc quánh, màu đen. Nhựa đường đặc không thấm
                        nước nhưng có thể hòa tan trong Benzen (C<sub>6</sub>H<sub>6</sub>), cloruafooc
                        (CHCl<sub>3</sub>), disulfua cacbon (CS<sub>2</sub>) và
                        một số dung môi hữu cơ khác.
                    </p>
                    <p>
                        <strong>2. Phù hợp tiêu chuẩn: </strong><br>
                        Tiêu chuẩn vật liệu nhựa đường đặc 22TCN 279-01 của Bộ Giao Thông Vận Tải:
                        <table class="table table-borderless">
                            <tbody>
                                <thead>
                                    <tr>
                                        <th style="width: 10%"></th>
                                        <th style="width: 40%"></th>
                                        <th style="width: 10%"></th>
                                        <th style="width: 20%"></th>
                                        <th style="width: 20%"></th>
                                    </tr>
                                </thead>
                                <tr>
                                    <td>
                                        <strong><em>STT</em></strong></td>
                                    <td class='text-center'>
                                        <strong><em>Chỉ tiêu thí nghiệm</em></strong>
                                    </td>
                                    <td class='text-center'>
                                        <strong><em>Đơn vị</em></strong>
                                    </td>
                                    <td class='text-center'>
                                        <strong><em>Yêu cầu</em></strong><br>
                                        <strong>22TCN 279-01</strong>
                                    </td>
                                    <td>
                                        <strong><em>Phương pháp thử</em></strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td class='text-center'>
                                        1
                                    </td>
                                    <td>
                                        Nhiệt độ bắt lửa
                                    </td>
                                    <td class='text-center'>
                                        <sup>o</sup>C
                                    </td>
                                    <td class='text-center'>
                                        Min: 232
                                    </td>
                                    <td>
                                        AASHTO T48-99
                                    </td>
                                </tr>
                                <tr>
                                    <td class='text-center'>
                                        2
                                    </td>
                                    <td>
                                        Độ kim lún ở 25<sup>o</sup>C, 5 giây
                                    </td>
                                    <td class='text-center'>
                                        1/10mm
                                    </td>
                                    <td class='text-center'>
                                        60-70
                                    </td>
                                    <td>
                                        AASHTO T49-01
                                    </td>
                                </tr>
                                <tr>
                                    <td class='text-center'>
                                        3
                                    </td>
                                    <td>
                                        Độ kéo dài ở 25<sup>o</sup>C
                                    </td>
                                    <td class='text-center'>
                                        cm
                                    </td>
                                    <td class='text-center'>
                                        100
                                    </td>
                                    <td>
                                        AASHTO T51-00
                                    </td>
                                </tr>
                                <tr>
                                    <td class='text-center'>
                                        4
                                    </td>
                                    <td>
                                        Nhiệt độ hóa mềm
                                    </td>
                                    <td class='text-center'>
                                        <sup>o</sup>C
                                    </td>
                                    <td class='text-center'>
                                        46-55
                                    </td>
                                    <td>
                                        AASHTO T53
                                    </td>
                                </tr>
                                <tr>
                                    <td class='text-center'>
                                        5
                                    </td>
                                    <td>
                                        Hoàm lượng hòa tan trong trichloethylene
                                    </td>
                                    <td class='text-center'>
                                        %
                                    </td>
                                    <td class='text-center'>
                                        99
                                    </td>
                                    <td>
                                        AASHTO T44-01
                                    </td>
                                </tr>
                                <tr>
                                    <td class='text-center'>
                                        6
                                    </td>
                                    <td>
                                        Dính bám với đá
                                    </td>
                                    <td class='text-center'>
                                        Cấp
                                    </td>
                                    <td class='text-center'>
                                        Min: cấp 3
                                    </td>
                                    <td>
                                        22TCN 279-01
                                    </td>
                                </tr>
                                <tr>
                                    <td class='text-center'>
                                        7
                                    </td>
                                    <td>
                                        Lượng tổn thất sau khi nung ở 163<sup>o</sup>C trong 5 giờ
                                    </td>
                                    <td class='text-center'>
                                        %
                                    </td>
                                    <td class='text-center'>
                                        Max: 0,8
                                    </td>
                                    <td>
                                        AASHTO T47-98
                                    </td>
                                </tr>
                                <tr>
                                    <td class='text-center'>
                                        8
                                    </td>
                                    <td>
                                        Tỉ lệ độ kim lún của nhựa đường sau khi đun ở 163<sup>o</sup>C trong 5 giờ
                                        so với độ
                                        kim lún ở 25<sup>o</sup>C
                                    </td>
                                    <td class='text-center'>
                                        %
                                    </td>
                                    <td class='text-center'>
                                        Min: 54
                                    </td>
                                    <td>
                                        AASHTO T49
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                    <p>
                        <strong>3. Công dụng:</strong><br>
                        Sử dụng trong các công trình giao thông như: đường bộ, cầu, sân bay, bến cảng,…, gồm các
                        công dụng: <br>
                        - Tưới láng nhựa các công trình giao thông. <br>
                        - Tưới thấm bám và dính bám. <br>
                        - Đun nóng tới nhiệt độ thích hợp (163<sup>o</sup>C) và được trộn cùng các vật liệu
                        cát, đá, sỏi
                        theo tỉ lệ thích hợp sẽ tạo thành bê tông nhựa đường. <br>
                        - Trộn với dầu hỏa, Diesel theo tỉ lệ thích hợp sẽ tạo thành nhựa đườg lỏng và khi trộn
                        với nước và các chất nhũ hóa sẽ tạo thành nhũ tương nhựa đường phụ vụ các công trình giao
                        thông.
                    </p>
                    <p>
                        <strong>4. Điều kiện bảo quản:</strong><br>
                        - Nhựa đường đặc dạng xá: được tồn trữ, vận chuyển bằng các thiết bị chuyên dụng như tàu chở
                        nhựa đường, bồn chứa, ống dẫn, xe bồn chở nhựa đường với hệ thống bảo ôn, gia nhiệt để luôn
                        đảm bảo nhiệt độ của nhựa đường từ 1200<sup>o</sup>C đến 1500<sup>o</sup>C. <br>
                        - Nhựa đường đặc dạng phuy: được tồn trữ, vận chuyển bằng phuy với dung tích từ 150 lít đến
                        200 lít ở điều kiện nhiệt độ bình thường.
                    </p>
                    <p>
                        <strong>5. An toàn môi trường:</strong><br>
                        Nhựa đường đặc là một sản phẩm hóa dầu nên có thể gây nguy hiểm hoặc tác động xấu
                        đến môi trường và sức khỏe con người nếu không được tồn trữ và sử dụng đúng qui trình kỹ
                        thuật. Đặc biệt, nhựa đường đặc dạng xá do thường xuyên được tồn trữ ở nhiệt độ cao nên
                        có thể gây các nguy cơ cháy, nổ hoặc bỏng trong quá trình vận chuyển và sử dụng.
                    </p>
                </div>
            </div>
        </div>
    </div>`
        return (
            <div>
                <h2>Using CKEditor 5 from source in React</h2>
                <CKEditor
                    // editor={ClassicEditor}
                    // config={editorConfiguration}
                    type="classic"
                    data={data}
                    onInit={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
            </div>
        );
    }
}

export default CKeditor;