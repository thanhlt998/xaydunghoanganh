import React, {Component} from 'react';

class Video extends Component {
    render() {
        return (
            <div className="site-block-half d-block d-lg-flex site-block-video bg-light" data-aos="fade">
                <div className="image bg-image order-2">
                    <iframe className="w-100 h-75 popup-vimeo" src="https://www.youtube.com/embed/0uK-687NGWc"
                        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </div>
                <div className="text order-1">
                    <h2 className="site-heading text-black mb-3 align-self-center">Hãy xem <strong>Video</strong> của chúng tôi</h2>
                </div>

            </div>
        )
    }
}

export default Video;