export default function () {
    return [
        {
            description: 'Trang chủ',
            url: '/',
            subLinks: [],
            carouselImages: [
                '/images/1.png',
                '/images/2.png',
                '/images/3.jpeg',
                '/images/4.jpeg'
            ]
        },
        {
            description: 'Dịch vụ',
            url: '',
            subLinks: [
                { url: '/services/cho_thue_thiet_bi_cong_trinh', description: 'Cho thuê thiết bị công trình' },
                { url: '/services/van_chuyen_may_moc_cong_trinh', description: 'Vận chuyển máy móc công trình' },
                { url: '/services/cho_thue_va_thi_cong_bang_xe_tuoi_nhua', description: 'Cho thuê và thi công bằng xe tưới nhựa' },
                { url: '/services/thi_cong_cong_trinh_giao_thong', description: 'Thi công công trình giao thông' },
                { url: '/services/van_chuyen_hang_hoa_bang_duong_bo_va_duong_thuy', description: 'Vận chuyển hàng hóa bằng đường bộ và đường thủy' },
                { url: '/services/cho_thue_va_thi_cong_rai_da', description: 'Cho thuê và thi công bằng xe rải đá' },
                { url: '/services/cung_cap_be_tong_nhua_nong', description: 'Cung cấp bê tông nhựa nóng'}
            ],
            carouselImages: []
        },
        {
            description: 'Sản phẩm',
            url: '',
            subLinks: [
                { url: '/products/xe_ben', description: 'Xe ben' },
                { url: '/products/xe_rai_da', description: 'Xe rải đá' },
                { url: '/products/xe_rai_nhua', description: 'Xe nhựa' },
                { url: '/products/vat_lieu_xay_dung', description: 'Vật liệu xây dựng' },
                { url: '/products/nhua_duong_long_mc70', description: 'Nhựa đường lỏng MC 70' },
                { url: '/products/nhua_duong_dac-60_70', description: 'Nhựa đường đặc 60/70' },
                { url: '/products/may_rai', description: "Máy rải"}
            ],
            carouselImages: [
                '/images/1.png',
                '/images/2.png',
                '/images/3.jpeg',
                '/images/4.jpeg'
            ]
        },
        // {
        //     description: 'Tin tức',
        //     url: '/news',
        //     subLinks: [],
        //     carouselImages: []
        // },
        {
            description: 'Giới thiệu',
            url: '/about',
            subLinks: [],
            carouselImages: []
        },
        // {
        //     description: 'Liên hệ',
        //     url: '/contact',
        //     subLinks: [],
        //     carouselImages: []
        // }
    ]
}