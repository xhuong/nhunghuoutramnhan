import React, { useEffect, useState } from "react";
import CategoryLayoutSecondary from "../../layouts/CategoryLayoutSecondary";
import AppActionsMobile from "../../components/AppActionsMobile";
import AppActions from "../../components/AppActions";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import { useParams } from "react-router-dom";

function CategoryPage() {
  const { id } = useParams();

  const [idCategory, setIdCategory] = useState(null);

  useEffect(() => {
    if (id) {
      setIdCategory(Number.parseInt(id));
    }
  }, [id]);

  return (
    <React.Fragment>
      <Header />

      <CategoryLayoutSecondary id={idCategory || 1} />

      <AppActions />

      <AppActionsMobile />

      <Footer />
    </React.Fragment>
  );
}
export default CategoryPage;
