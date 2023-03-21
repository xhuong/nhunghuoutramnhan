import { Row, Col, InputNumber } from "antd";
import Button from "../../components/Button";
import ButtonSecondary from "../../components/ButtonSecondary";
import Section from "../Section";
import "./index.scss";

function Cart() {
  return (
    <Section>
      <p className="uppercase mr-2 mb-8">
        Giỏ hàng:
        <span className="capitalize">
          {"("}0 sản phẩm {")"}
        </span>
      </p>
      <Row gutter={16}>
        <Col xl={18} lg={18} md={24} sm={24} xs={24}>
          <Row gutter={8} className="border-gray-200 cart_item">
            <Col xl={6} lg={6} md={6} sm={6} xs={6}>
              <img src={require("../../assets/images/products/product01.png")} alt="" />
            </Col>
            <Col xl={18} lg={18} md={18} sm={18} xs={18}>
              <div className="flex justify-between">
                <div className="cart_item_info">
                  <h3 className="max-line-two mr-2 capitalize">
                    Lorem ipsum dolor sit amet consectetur itaque accusamus eius!
                  </h3>
                  <p>Chất lượng</p>
                  <p className="hidden-md hidden-lg hidden-xl hidden-xxl text-red-500 font-semibold">2.500.500đ</p>
                </div>
                <div className="cart_item_price hidden-sm hidden-xs">
                  <span>2.600.000d</span>
                </div>
                <div className="cart_item_quantity flex flex-col items-center">
                  <InputNumber min={1} max={10} defaultValue={1} size="large" />
                  <span className="py-4 w-full text-center hover:underline hover:text-red-500 cursor-pointer">Xoá</span>
                </div>
              </div>
            </Col>
          </Row>
          <Row gutter={8} className="border-gray-200 cart_item">
            <Col xl={6} lg={6} md={6} sm={6} xs={6}>
              <div>
                <img src={require("../../assets/images/products/product01.png")} alt="" />
              </div>
            </Col>
            <Col xl={18} lg={18} md={18} sm={18} xs={18}>
              <div className="flex justify-between">
                <div className="cart_item_info">
                  <h3 className="max-line-two mr-2 capitalize">itaque accusamus eius!</h3>
                  <p>Chất lượng</p>
                  <p className="hidden-md hidden-lg hidden-xl hidden-xxl text-red-500 font-semibold">2.500.500đ</p>
                </div>
                <div className="cart_item_price hidden-sm hidden-xs">
                  <span>2.600.000d</span>
                </div>
                <div className="cart_item_quantity flex flex-col items-center">
                  <InputNumber min={1} max={10} defaultValue={1} size="large" />
                  <span className="py-4 w-full text-center hover:underline hover:text-red-500 cursor-pointer">Xoá</span>
                </div>
              </div>
            </Col>
          </Row>
        </Col>

        {/* cart action  */}
        <Col xl={6} lg={6} md={24} sm={24} xs={24}>
          <div className="flex justify-between pb-4 border-bttom-gray">
            Tạm tính: <b>14,500,000đ</b>
          </div>
          <div className="flex justify-between items-end pt-4">
            Thành tiền: <span className="font-bold text-md-custom text-red-600">14,500,000đ</span>
          </div>
          <p className="text-red-500 mt-4">*Trong trường hợp bạn có Mã giảm giá, vui lòng nhập ở bước thanh toán.</p>
          <div className="mt-4">
            <ButtonSecondary className="uppercase" type="secondary" size="full-btn">
              Thanh toán ngay
            </ButtonSecondary>
            <ButtonSecondary className="uppercase mt-4" type="primary" size="full-btn">
              Tiếp tục mua hàng
            </ButtonSecondary>
          </div>
        </Col>
      </Row>
    </Section>
  );
}

export default Cart;
