import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { FaYoutube, FaFacebookF } from "react-icons/fa";
import "./index.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col xl={8} lg={8} md={24} sm={24} xs={24}>
            <h3 className="footer_heading">Công ty Nhung Hươu Trầm Nhân</h3>
            <ul className="footer_list">
              <li className="footer_item">
                <span className="footer_item--bold">Hotline {"(24/7)"}:</span>
                <span className="footer_item_phonenumber">0375.524.580</span> {"( 08:00-21:30 )"}
              </li>
              <li className="footer_item">
                <span className="footer_item--bold">Email:</span>
                tramnhanhti123@gmail.com
              </li>
              <li className="footer_item">
                <span className="footer_item--bold">Địa chỉ tại HCM:</span>
                205 Nguyễn Thượng Hiền, Phường 6, Quận Bình Thạnh, TPHCM
              </li>
              <li className="footer_item">
                <span className="footer_item--bold">Địa chỉ tại Khánh Hoà:</span>
                264 Đường Nguyễn Công Trứ, Mỹ Ca, Cam Ranh
              </li>
              <li className="footer_item">
                <span className="footer_item--bold">Thời gian làm việc: </span>
                8h-20h (Thứ 2 đến Chủ Nhật)
              </li>
              <li className="footer_item">
                <span className="footer_item--bold">MST:</span>
                0317411947 do Sở kế hoạch và Đầu tư TPHCM cấp
              </li>
              <li className="footer_item">
                <span className="footer_item--bold">Giấy phép bán lẻ rượu số:</span>
                32/2022/GPR-PKT do UBND Quận Bình Thạnh, Phòng Kinh Tế cấp
              </li>
              <li className="footer_item">
                <div className="footer_item_contact">
                  <Link>
                    <span className="footer_item_icon">
                      <FaFacebookF />
                    </span>
                  </Link>
                  <Link>
                    <span className="footer_item_icon">
                      <FaYoutube />
                    </span>
                  </Link>
                </div>
              </li>
            </ul>
          </Col>
          <Col xl={4} lg={4} md={12} sm={12} xs={24}>
            <h3 className="footer_heading">Danh mục</h3>
            <ul className="footer_list">
              <li className="footer_item">
                <Link>Giới thiệu</Link>
              </li>
              <li className="footer_item">
                <Link>Cao nhung hươu</Link>
              </li>
              <li className="footer_item">
                <Link>Cao huơu</Link>
              </li>
              <li className="footer_item">
                <Link>Cao ban long</Link>
              </li>
              <li className="footer_item">
                <Link>Nhung hươu tươi</Link>
              </li>
              <li className="footer_item">
                <Link>Nhung hươu khô</Link>
              </li>
              <li className="footer_item">
                <Link>Rượu huyết nhung hươu</Link>
              </li>
              <li className="footer_item">
                <Link>Mật ong rừng</Link>
              </li>
            </ul>
          </Col>
          <Col xl={4} lg={4} md={12} sm={12} xs={24}>
            <h3 className="footer_heading">Hỗ trợ khách hàng</h3>
            <ul className="footer_list">
              <li className="footer_item">
                <Link>Tin tức</Link>
              </li>
              <li className="footer_item">
                <Link>Liên hệ</Link>
              </li>
              <li className="footer_item">
                <Link>Hướng dẫn mua hàng</Link>
              </li>
              <li className="footer_item">
                <Link>Chính sách giao nhận</Link>
              </li>
              <li className="footer_item">
                <Link>Chính sách đổi trả</Link>
              </li>
              <li className="footer_item">
                <Link>Chính sách bảo mật</Link>
              </li>
              <li className="footer_item">
                <Link>Chính sách thanh toán</Link>
              </li>
              <li className="footer_item">
                <div className="footer_item_image_wrapper">
                  <img src={require("../../assets/images/bo_cong_thuong.png")} alt="" />
                </div>
              </li>
            </ul>
          </Col>
          <Col xl={8} lg={8} md={24} sm={24} xs={24}>
            <h3 className="footer_heading">Chăm sóc khách hàng</h3>
            <ul className="footer_list">
              <li className="footer_item">
                <span className="footer_item--bold">Hotline:</span>
                0375.524.580
              </li>
              <li>
                <span className="footer_item--bold">Hỗ trợ thanh toán:</span>
                <img src={require("../../assets/images/checkout/checkout.png")} alt="" />
                <p className="footer_note">{"(*) Công ty chúng tôi không bán rượu cho người dưới 18 tuổi"}</p>
              </li>
            </ul>
          </Col>
        </Row>
        <p className="footer_license">
          © Bản quyền thuộc về Công ty Nhung Hươu Trầm Nhân | Sản phẩm chính hãng nhunghuoutramnhan.com
        </p>
      </div>
    </footer>
  );
}

export default Footer;
