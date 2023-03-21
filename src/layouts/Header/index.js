import { GiEarthAmerica } from "react-icons/gi";
import { GrMenu } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi";
import { BsTelephoneInbound } from "react-icons/bs";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import MenuMobile from "../../components/MenuMobile";
import { useDispatch } from "react-redux";
import { openMenu } from "../../redux/slices/menuMobileSlice";
import "./index.scss";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <header className="header">
      {/* header with branch  */}
      <div className="header_branch hidden-xs hidden-sm hidden-md">
        <GiEarthAmerica />
        <h1 className="header_branch_title">Công Ty TNHH Nhung Hươu Trầm Nhân - Thương Hiệu Uy Tín</h1>
      </div>
      <div className="container">
        {/* header with search  */}
        <div className="header_main">
          {/* iconbar  */}
          <div className="header_iconbar hidden-lg hidden-xl hidden-xxl" onClick={() => dispatch(openMenu())}>
            <GrMenu />
          </div>
          {/* logo  */}
          <div
            className="header_logo_wrapper"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={require("../../assets/images/logo.png")} alt="" />
          </div>

          {/* searchbox  */}
          <div className="header_searchbox_wrappper hidden-xs hidden-sm hidden-md">
            <form action="" className="header_searchbox">
              <input type="text" placeholder="Tìm kiếm sản phẩm..." className="header_searchbox_input" />
              <Button size="sm-btn" type="primary">
                <IoSearch />
              </Button>
            </form>
          </div>
          {/* hotline  */}
          <div className="header_hotline hidden-xs hidden-sm hidden-md">
            <div className="header_hotline_icon">
              <BsTelephoneInbound />
            </div>
            <div className="header_hotline_content text-lg">
              <span className="capitalize">hotline:</span>
              <span>0375.524.580</span>
            </div>
          </div>
          {/* header cart */}
          <div className="header_cart">
            <div className="header_cart_icon">
              <HiShoppingCart />
              <span className="header_cart_icon--count">0</span>
            </div>
            <span className="header_cart_title hidden-xs hidden-sm hidden-md text-lg">Giỏ hàng</span>
          </div>
        </div>
        {/* searchbox mobile  */}
        <div className="header_searchbox_mobile hidden-md hidden-lg hidden-xl hidden-xxl">
          <form action="" className="header_searchbox_mobile_form">
            <input type="text" placeholder="Tìm kiếm sản phẩm..." className="header_searchbox_mobile_input" />
            <Button size="sm-btn" type="primary">
              <IoSearch />
            </Button>
          </form>
        </div>
      </div>

      <div className="header_navbar hidden-xs hidden-sm hidden-md">
        <div className="container">
          <ul className="header_navbar_list">
            <li className="header_navbar_item">
              <Link className="header_navbar_item--link" to="/introduction">
                Giới thiệu
              </Link>
            </li>
            <li className="header_navbar_item">
              <Link className="header_navbar_item--link" to="/category/1">
                Cao Nhung Hươu
              </Link>
            </li>
            <li className="header_navbar_item">
              <Link className="header_navbar_item--link" to="/category/2">
                Cao hươu
              </Link>
            </li>
            <li className="header_navbar_item">
              <Link className="header_navbar_item--link" to="/category/3">
                Cao ban long
              </Link>
            </li>
            <li className="header_navbar_item">
              <Link className="header_navbar_item--link" to="/category/4">
                Nhung hươu
              </Link>
            </li>
            <li className="header_navbar_item">
              <Link className="header_navbar_item--link" to="/category/5">
                Rượu
              </Link>
            </li>
            <li className="header_navbar_item">
              <Link className="header_navbar_item--link" to="/category/6">
                Mật ong
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* menu_mobile  */}
      <MenuMobile />
    </header>
  );
}

export default Header;
