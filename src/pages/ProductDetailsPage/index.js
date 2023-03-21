import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import ProductDetailsLayout from "../../layouts/ProductDetailsLayout";
import { globalData } from "../../data";
import { getCategoryNameByNameCredentical, getNameCredenticalByCategoryName } from "../../Utils";

function ProductDetailsPage() {
  const { id } = useParams();
  const [dataDetails, setDataDetails] = useState({});
  const [categoryTitle, setCategoryTitle] = useState("");
  const [nameCategoryCredentical, setNameCategoryCredentical] = useState("");

  const findCategoryName = () => {
    const result = globalData.categories.filter((category) => category.id === dataDetails.categoryId);
    setCategoryTitle(result[0]?.categoryName);
  };

  useEffect(() => {
    if (id) {
      const result = globalData.products.filter((product) => product.id === Number.parseInt(id));
      console.log("🚀 ~ file: index.js:24 ~ useEffect ~ result:", result);
      if (result.length > 0) {
        setDataDetails({ ...result[0] });
      }
    }
  }, [id]);

  useEffect(() => {
    if (dataDetails) {
      findCategoryName();
    }
  }, [dataDetails]);

  useEffect(() => {
    if (categoryTitle) {
      const result = getNameCredenticalByCategoryName(globalData.categories, categoryTitle);
      setNameCategoryCredentical(result);
    }
  }, [categoryTitle]);

  return (
    <React.Fragment>
      <Header />
      <div className="pt-4">
        <div className="container">
          <Breadcrumb
            items={[
              { title: `${categoryTitle}`, link: `/categories/${nameCategoryCredentical}` },
              { title: `${dataDetails?.name}` },
            ]}
          />
        </div>
      </div>
      <ProductDetailsLayout data={dataDetails} />
      <Footer />
    </React.Fragment>
  );
}

export default ProductDetailsPage;
