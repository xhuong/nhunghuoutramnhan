import { Link } from "react-router-dom";
import "./index.scss";

function ListProductName() {
  return (
    <ul className="product_name_list flex pb-2 mb-4">
      <li className="product_name_item cursor-pointe mr-3">
        <Link className="product_name_link px-2 py-1 rounded-lg capitalize active">Nhung Hươu</Link>
      </li>
      <li className="product_name_item cursor-pointe mr-3">
        <Link className="product_name_link px-2 py-1 rounded-lg capitalize">Nhung Hươu</Link>
      </li>
      <li className="product_name_item cursor-pointe mr-3">
        <Link className="product_name_link px-2 py-1 rounded-lg capitalize">Nhung Hươu</Link>
      </li>
      <li className="product_name_item cursor-pointe mr-3">
        <Link className="product_name_link px-2 py-1 rounded-lg capitalize">Nhung Hươu</Link>
      </li>
      <li className="product_name_item cursor-pointe mr-3">
        <Link className="product_name_link px-2 py-1 rounded-lg capitalize">Nhung Hươu</Link>
      </li>
      <li className="product_name_item cursor-pointe mr-3">
        <Link className="product_name_link px-2 py-1 rounded-lg capitalize">Nhung Hươu</Link>
      </li>
    </ul>
  );
}

export default ListProductName;
