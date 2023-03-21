import Slider from "react-slick";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.scss";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <div className="container-fluid">
        <Slider {...settings} className="hidden-xs">
          <div className="slider_item">
            <Link className="slider_item_link">
              <img src={require("../../assets/images/sliders/slider01.png")} alt="" />
            </Link>
          </div>
          <div className="slider_item">
            <Link className="slider_item_link">
              <img src={require("../../assets/images/sliders/slider03.png")} alt="" />
            </Link>
          </div>
          <div className="slider_item">
            <Link className="slider_item_link">
              <img src={require("../../assets/images/sliders/slider02.png")} alt="" />
            </Link>
          </div>
        </Slider>

        {/* slide mobile  */}
        <Slider {...settings} className="hidden-sm hidden-md hidden-lg hidden-xl hidden-xxl">
          <div className="slider_item">
            <Link className="slider_item_link">
              <img src={require("../../assets/images/sliders/slider04.png")} alt="" />
            </Link>
          </div>
          <div className="slider_item">
            <Link className="slider_item_link">
              <img src={require("../../assets/images/sliders/slider05.png")} alt="" />
            </Link>
          </div>
          <div className="slider_item">
            <Link className="slider_item_link">
              <img src={require("../../assets/images/sliders/slider06.png")} alt="" />
            </Link>
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default SimpleSlider;
