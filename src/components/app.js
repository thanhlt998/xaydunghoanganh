import React from "react";
import { Component } from "react";

import Navbar from '../containers/navbar';
import Carousel from '../containers/carousel';
import Footer from '../containers/footer';
import SelfIntroduction from '../containers/home/self_introduction';
import ServicesIntroduction from '../containers/home/services_introduction';
import Video from '../containers/home/video';
import Promo from '../containers/promo';

import NhuaDuongDacProduct from '../containers/products/nhua_duong_dac_60_70';
import NhuaDuongLongProduct from '../containers/products/nhua_duong_long_mc70';
import VatLieuXayDungProduct from '../containers/products/vat_lieu_xay_dung';
import XeBenProduct from '../containers/products/xe_ben';
import XeRaiDaProduct from '../containers/products/xe_rai_da';
import XeRaiNhuaProduct from '../containers/products/xe_rai_nhua';

import ChoThueThietBiCongTrinhService from '../containers/services/cho_thue_thiet_bi_cong_trinh';
import ThueVaThiCongTuoiNhuaService from "../containers/services/cho_thue_va_thi_cong_tuoi_nhua";
import ThueVaThiCongRaiDaService from "../containers/services/cho_thue_va_thi_cong_rai_da";
import ThiCongCongTrinhGiaoThongService from "../containers/services/thi_cong_cong_trinh_giao-thong";
import VanChuyenHangHoaService from "../containers/services/van_chuyen_hang_hoa";
import VanChuyenMayMocService from "../containers/services/van_chuyen_may_moc";
import About from "../containers/about";
import Contact from "../containers/contact";


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        {/* <SelfIntroduction />
        <ServicesIntroduction />
        <Video /> */}

        {/* <NhuaDuongDacProduct /> */}
        {/* <NhuaDuongLongProduct /> */}
        {/* <VatLieuXayDungProduct /> */}
        {/* <XeBenProduct /> */}
        {/* <XeRaiDaProduct /> */}
        {/* <XeRaiNhuaProduct /> */}

        {/* <ChoThueThietBiCongTrinhService /> */}
        {/* <ThueVaThiCongTuoiNhuaService /> */}
        {/* <ThueVaThiCongRaiDaService /> */}
        {/* <ThiCongCongTrinhGiaoThongService /> */}
        {/* <VanChuyenHangHoaService /> */}
        {/* <VanChuyenMayMocService /> */}

        {/* <About /> */}
        <Contact />
        <Promo />
        <Footer />
      </div>
    );
  }
}
