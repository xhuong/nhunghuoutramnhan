import { Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import CategorySidebar from "../../components/CategorySidebar";
import ListProductName from "../../components/ListProductName";
import Modal from "../../components/Modal";
import PriceRange from "../../components/PriceRange";
import Sort from "../../components/Sort";
import Section from "../Section";
import SectionProduct from "../SectionProduct";
import { closeModal, openModal } from "../../redux/slices/modalSlice";
import ButtonSecondary from "../../components/ButtonSecondary";
import { globalData } from "../../data";
import { useEffect, useState } from "react";

function CategoryLayoutSecondary({ id }) {
  const dispatch = useDispatch();
  const isActiveModal = useSelector((state) => state.modal.isActive);
  const [title, setTitle] = useState(null);
  const [products, setProducts] = useState([]);

  const findCategoryName = () => {
    const result = globalData.categories.filter((category) => category.id === id);
    setTitle(result[0].categoryName);
  };

  const findProductsByCategoryId = () => {
    const result = globalData.products.filter((product) => product.categoryId === id);
    setProducts(result);
  };

  useEffect(() => {
    findCategoryName();
    findProductsByCategoryId();
  });

  return (
    <Section>
      <Row gutter={16}>
        {/* left col  */}
        <Col xl={6} lg={6} className="hidden-xs hidden-sm hidden-md">
          <CategorySidebar id={id} />
          <div className="mt-2">
            <PriceRange />
          </div>
          <div className="banner_wrapper w-full p-4 mt-2  cursor-pointer">
            <img src={require("../../assets/images/banners/banner05.png")} alt="" />
          </div>
        </Col>
        {/* end left col  */}

        {/* right col  */}
        <Col xl={18} lg={18}>
          <ListProductName id={id} />
          <Sort categoryName={title} />
          <SectionProduct title={title} products={products} />
        </Col>
        {/* end right col  */}
      </Row>
      {/* modal  */}
      <ButtonSecondary type="primary" onClick={() => dispatch(openModal())}>
        open modal
      </ButtonSecondary>
      {isActiveModal && <Modal />}
    </Section>
  );
}

export default CategoryLayoutSecondary;
