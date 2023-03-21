import { BsCartPlus, BsFillCartPlusFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import Button from "../Button";
import { formatPrice } from "../../Utils";
import React from "react";
import "./index.scss";

function Product({ id, name, imageUrl, oldPrice, newPrice, star, categoryId, discount, ...props }) {
  const navigate = useNavigate();
  return (
    <div
      className="product border-gray"
      onClick={() => {
        navigate(`/product/${id}/details`);
      }}
    >
      <span className="product_discount">{discount}</span>
      <div className="product_image_wrapper">
        <img src={imageUrl} alt="" />
        <div className="product_button_wrapper hidden-xs hidden-sm hidden-md">
          <Button type="secondary" size="full-btn">
            <BsFillCartPlusFill /> Thêm vào giỏ
          </Button>

          <Button type="secondary" size="full-btn">
            <AiFillEye />
          </Button>
        </div>
      </div>
      <h5 className="product_title">{name}</h5>
      <div className="product_footer">
        <div className="product_price">
          {newPrice && oldPrice && (
            <React.Fragment>
              <span className="product_price_new">{formatPrice(newPrice)}đ</span>
              <span className="product_price_old">{formatPrice(oldPrice)}đ</span>
            </React.Fragment>
          )}
          {!newPrice && !oldPrice && (
            <React.Fragment>
              <span className="product_price_new py-3">Giá liên hệ</span>
            </React.Fragment>
          )}
        </div>
        <span className="product_add_to_cart">
          <BsCartPlus />
        </span>
      </div>
    </div>
  );
}

export default Product;
