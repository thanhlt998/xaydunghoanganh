import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Carousel extends Component {

    render() {
        return (
            <div className="slide-one-item home-slider owl-carousel">
                {this.props.carouselImages.map(image => {
                    let background = { backgroundImage: `url(${image})` };
                    return (
                        <div key={image} className="site-blocks-cover" style={background} data-aos="fade"
                            data-stellar-background-ratio="0.5">
                        </div>
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        carouselImages: state.carouselImages
    }
}

export default connect(mapStateToProps)(Carousel);
