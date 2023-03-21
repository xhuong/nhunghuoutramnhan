import { Link } from "react-router-dom";
import { FaDashcube } from "react-icons/fa";
import "./index.scss";
import { globalData } from "../../data";

function CategorySidebar({ name }) {
  return (
    <div className="category">
      <p className="category_heading">
        <FaDashcube />
        Danh mục sản phẩm
      </p>
      <ul className="category_list">
        <li className="category_item">
          <Link className="category_item_link" to="/introduce">
            <div className="category_item_image_wrappper">
              <img src={require("../../assets/images/categories/home.png")} alt="" />
            </div>
            Giới thiệu
          </Link>
        </li>
        {globalData.categories.map((category) => (
          <li className={`category_item ${category.name === name ? "active" : ""}`} key={category.categoryName}>
            <Link className="category_item_link" to={`/categories/${category.name}`}>
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
