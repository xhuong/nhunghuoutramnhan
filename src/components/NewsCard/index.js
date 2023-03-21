import { SlClock } from "react-icons/sl";
import { VscCommentDiscussion } from "react-icons/vsc";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./index.scss";

function NewsCard({ title, dayUpload, comments, description }) {
  return (
    <div className="news_card">
      <div className="news_card_image_wrapper">
        <img src={require("../../assets/images/news/nhung_huou.png")} alt="" />
      </div>
      <div className="news_card_content">
        <h3 className="news_card_heading">{title}</h3>
        <div className="news_card_info">
          <p className="news_card_time">
            <SlClock />
            <span>{dayUpload}</span>
          </p>
          <p className="news_card_comment">
            <VscCommentDiscussion />
            <span>{comments} Bình luận</span>
          </p>
        </div>
        <Link className="news_card_description">{description}</Link>

        <Button className="mx-auto hidden-xs hidden-sm" textTransform="uppercase" type="primary" size="md-btn">
          Đọc tin
        </Button>
        <Button
          className="mx-auto  hidden-md hidden-lg hidden-xl hidden-xxl"
          textTransform="uppercase"
          type="secondary"
          size="full-btn"
        >
          Đọc tin
        </Button>
      </div>
    </div>
  );
}

export default NewsCard;
