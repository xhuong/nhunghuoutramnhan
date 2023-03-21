import { Row, Col } from "antd";
import Product from "../../components/Product";
import ProductLabel from "../../components/ProductLabel";
import "./index.scss";

function SectionProduct({ title, products, ...props }) {
  return (
    <div className="section_product">
      {/* label product  */}
      <ProductLabel title={title} />
      <div className="section_product_wrapper">
        <Row gutter={[16, 16]}>
          {products.map((product) => (
            <Col xl={8} md={8} sm={12} xs={12}>
              <Product
                id={product.id}
                name={product.name}
                imageUrl={product.imageUrl}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
                star={product.star}
                categoryId={product.categoryId}
                discount={product.discount}
              />
            </Col>
          ))}
        </Row>
        <p className="text-center py-2 mt-6 text-lg">Đã hiển thị tất cả 23 sản phẩm</p>
      </div>
    </div>
  );
}

export default SectionProduct;
