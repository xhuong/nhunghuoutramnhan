import { Link } from "react-router-dom";
import cartSvg from "../../assets/images/icons/cart.svg";
import messengerSvg from "../../assets/images/icons/messenger.svg";
import zaloSvg from "../../assets/images/icons/zalo.svg";
import "./index.scss";

function AppActions() {
  return (
    <div className="app_action_list hidden-xs hidden-sm">
      <Link className="app_action_item">
        <div className="app_action_item_wrapper">
          <img src={cartSvg} alt="" />
        </div>
        Xem giỏ hàng
      </Link>
      <Link to={"https://zalo.me/0816111308"} target="_blank" className="app_action_item">
        <div className="app_action_item_wrapper">
          <img src={zaloSvg} alt="" />
        </div>
        Zalo
      </Link>
      <Link className="app_action_item">
        <div className="app_action_item_wrapper">
          <img src={messengerSvg} alt="" />
        </div>
        Messenger
      </Link>
      <Link className="app_action_item">
        <div className="app_action_item_wrapper">
          <img src={require("../../assets/images/icons/phone.png")} alt="" />
        </div>
        Hotline
      </Link>
    </div>
  );
}

export default AppActions;
