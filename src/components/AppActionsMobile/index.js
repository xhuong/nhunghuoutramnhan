import { Link } from "react-router-dom";
import homeSvg from "../../assets/images/icons/home.png";
import messengerSvg from "../../assets/images/icons/messenger_mobile.svg";
import zaloSvg from "../../assets/images/icons/zalo.svg";
import mapSvg from "../../assets/images/icons/map.png";
import phoneSvg from "../../assets/images/icons/phone_mobile.png";
import { Row, Col } from "antd";
import "./index.scss";

function AppActionsMobile() {
  const colStyles = {
    flexBasis: "20%",
    width: "20%",
  };
  return (
    <Row className="app_action_mobile_list items-center justify-between fixed left-0 right-0 bottom-0 bg-white hidden-md hidden-lg hidden-xl hidden-xxl z-20">
      <Col sm={4} style={{ ...colStyles }}>
        <Link target="_blank" className="app_action_mobile_item pt-3 flex flex-col text-center">
          <div className="app_action_mobile_item_wrapper mx-auto">
            <img src={homeSvg} alt="" />
          </div>
          Trang chủ
        </Link>
      </Col>
      <Col sm={4} style={{ ...colStyles }}>
        <Link target="_blank" className="app_action_mobile_item pt-3 flex flex-col text-center">
          <div className="app_action_mobile_item_wrapper mx-auto">
            <img src={mapSvg} alt="" />
          </div>
          Tìm đường
        </Link>
      </Col>
      <Col sm={4} style={{ ...colStyles }}>
        <Link target="_blank" className="app_action_mobile_item pt-3 flex flex-col text-center">
          <div className="app_action_mobile_item_wrapper mx-auto">
            <img src={phoneSvg} alt="" />
          </div>
          Gọi điện
        </Link>
      </Col>
      <Col sm={4} style={{ ...colStyles }}>
        <Link target="_blank" className="app_action_mobile_item pt-3 flex flex-col text-center">
          <div className="app_action_mobile_item_wrapper mx-auto">
            <img src={zaloSvg} alt="" />
          </div>
          Zalo
        </Link>
      </Col>
      <Col sm={4} style={{ ...colStyles }}>
        <Link target="_blank" className="app_action_mobile_item pt-3 flex flex-col text-center">
          <div className="app_action_mobile_item_wrapper mx-auto">
            <img src={messengerSvg} alt="" />
          </div>
          Facebook
        </Link>
      </Col>
    </Row>
  );
}
export default AppActionsMobile;
