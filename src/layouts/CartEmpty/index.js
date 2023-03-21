import ButtonSecondary from "../../components/ButtonSecondary";
import Section from "../Section";

function CartEmpty() {
  return (
    <Section>
      <p className="uppercase mr-2">
        Giỏ hàng:{" "}
        <span className="capitalize">
          {"("}0 sản phẩm {")"}
        </span>
      </p>
      <div className="max-w-fit mx-auto pt-5">
        <div className="w-64 md:w-60 sm:w-56">
          <img src={require("../../assets/images/empty-cart.png")} alt="" />
        </div>
        <ButtonSecondary className="uppercase" type="secondary" size="full-btn">
          Tiếp tục mua sắm
        </ButtonSecondary>
      </div>
    </Section>
  );
}

export default CartEmpty;
