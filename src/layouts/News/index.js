import { Col, Row } from "antd";
import NewsCard from "../../components/NewsCard";
import ProductLabel from "../../components/ProductLabel";
import Section from "../Section";
import { globalData } from "../../data";
import "./index.scss";

function News() {
  return (
    <Section>
      <ProductLabel />
      {/* new card list */}
      <div className="section_news_wrapper">
        <Row gutter={[16, 16]}>
          {globalData.news.data.map((newsItem) => (
            <Col xl={8} md={12} sm={24} xs={24}>
              <NewsCard
                title={newsItem.blogTitle}
                dayUpload={newsItem.dateUpload}
                comments={newsItem.commentCount}
                description={newsItem.blogDescription}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Section>
  );
}

export default News;
