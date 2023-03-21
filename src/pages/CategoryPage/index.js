import React, { useEffect, useState } from "react";
import CategoryLayoutSecondary from "../../layouts/CategoryLayoutSecondary";
import AppActionsMobile from "../../components/AppActionsMobile";
import AppActions from "../../components/AppActions";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import { getCategoryNameByNameCredentical } from "../../Utils";
import { globalData } from "../../data";

function CategoryPage() {
  const { name } = useParams();

  const [nameCategoryCredentical, setNameCategoryCredentical] = useState("");
  const [nameCategory, setNameCategory] = useState("");

  useEffect(() => {
    if (name) {
      setNameCategoryCredentical(name);
    }
  }, [name]);

  useEffect(() => {
    if (name) {
      const result = getCategoryNameByNameCredentical(globalData.categories, name);
      setNameCategory(result);
    }
  }, [name]);

  return (
    <React.Fragment>
      <Header />

      <div className="pt-4">
        <div className="container">
          <Breadcrumb
            items={[
              { title: "Danh mục", link: "/categories/nhung-huou" },
              { title: `${nameCategory}`, link: `/categories/${nameCategoryCredentical}` },
            ]}
          />
        </div>
      </div>

      <CategoryLayoutSecondary name={nameCategoryCredentical} />

      <AppActions />

      <AppActionsMobile />

      <Footer />
    </React.Fragment>
  );
}
export default CategoryPage;
