import { Row, Col } from "antd";
import "./index.scss";

function Banner() {
  return (
    <div className="banner hidden-xs hidden-sm">
      <div className="container">
        <Row gutter={12}>
          <Col xl={6} sm={6}>
            <div className="banner_img_wrapper">
              <img src={require("../../assets/images/banners/banner01.png")} alt="" />
            </div>
          </Col>
          <Col xl={12} sm={12}>
            <div className="banner_img_wrapper">
              <img src={require("../../assets/images/banners/banner02.png")} alt="" />
            </div>
          </Col>
          <Col xl={6} sm={6}>
            <div className="banner_img_wrapper">
              <img src={require("../../assets/images/banners/banner03.png")} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Banner;
