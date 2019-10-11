import React from "react";
import { Component } from "react";

import ChoThueThietBiCongTrinhService from '../containers/services/cho_thue_thiet_bi_cong_trinh';
import ThueVaThiCongTuoiNhuaService from "../containers/services/cho_thue_va_thi_cong_tuoi_nhua";
import ThueVaThiCongRaiDaService from "../containers/services/cho_thue_va_thi_cong_rai_da";
import ThiCongCongTrinhGiaoThongService from "../containers/services/thi_cong_cong_trinh_giao-thong";
import VanChuyenHangHoaService from "../containers/services/van_chuyen_hang_hoa";
import VanChuyenMayMocService from "../containers/services/van_chuyen_may_moc";

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import CungCapBeTongNhuaNongService from "../containers/services/cung_cap_be_tong_nhua_nong";

class Service extends Component {
    componentDidMount() {
        document.body.appendChild(this.createScript("/js/main.js"));

    }

    createScript(src) {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        return script;
    }
    
    render() {
        return (
            <div>
                <Switch>
                    <Route excact path='/services/cho_thue_thiet_bi_cong_trinh' component={ChoThueThietBiCongTrinhService} />
                    <Route exact path='/services/van_chuyen_may_moc_cong_trinh' component={VanChuyenMayMocService} />
                    <Route exact path='/services/cho_thue_va_thi_cong_bang_xe_tuoi_nhua' component={ThueVaThiCongTuoiNhuaService} />
                    <Route exact path='/services/thi_cong_cong_trinh_giao_thong' component={ThiCongCongTrinhGiaoThongService} />
                    <Route exact path='/services/van_chuyen_hang_hoa_bang_duong_bo_va_duong_thuy' component={VanChuyenHangHoaService} />
                    <Route exact path='/services/cho_thue_va_thi_cong_rai_da' component={ThueVaThiCongRaiDaService} />
                    <Route exact path='/services/cung_cap_be_tong_nhua_nong' component={CungCapBeTongNhuaNongService} />
                    <Redirect to='/' />
                </Switch>
            </div>
        )
    }
}

export default Service;