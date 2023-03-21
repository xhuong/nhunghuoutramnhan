import { Link } from "react-router-dom";
import { FaDashcube } from "react-icons/fa";
import "./index.scss";

function ProductLabel({ title = "Tin tức", ...props }) {
  return (
    <div className="product_label_header">
      <span className="product_label_icon">
        <FaDashcube />
      </span>
      <div className="product_label_heading_wrapper">
        <h2 className="product_label_heading">{title}</h2>
        <ul className="product_label_list hidden-sm hidden-xs">
          <li className="product_label_item">
            <Link className="product_label_link">Xem thêm</Link>
          </li>
          <li className="product_label_item">
            <Link className="product_label_link">Xem thêm</Link>
          </li>
          <li className="product_label_item">
            <Link className="product_label_link">Xem thêm</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default ProductLabel;
