import { Link } from "react-router-dom";
import { FaDashcube } from "react-icons/fa";
import "./index.scss";
import { globalData } from "../../data";

function CategorySidebar({ id }) {
  return (
    <div className="category">
      <h4 className="category_heading">
        <FaDashcube />
        Danh mục sản phẩm
      </h4>
      <ul className="category_list">
        <li className="category_item">
          <Link className="category_item_link" to="/introduction">
            <div className="category_item_image_wrappper">
              <img src={require("../../assets/images/categories/home.png")} alt="" />
            </div>
            Giới thiệu
          </Link>
        </li>
        {globalData.categories.map((category) => (
          <li className={`category_item ${category.id === id ? "active" : ""}`} key={category.categoryName}>
            <Link className="category_item_link" to={`/category/${category.id}`}>
              <div className="category_item_image_wrappper">
                <img src={category.imageUrl} alt="" />
              </div>
              {category.categoryName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategorySidebar;
