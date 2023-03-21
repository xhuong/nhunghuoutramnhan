import React, { useEffect, useState } from "react";
import CategoryLayoutSecondary from "../../layouts/CategoryLayoutSecondary";
import AppActionsMobile from "../../components/AppActionsMobile";
import AppActions from "../../components/AppActions";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import { useParams } from "react-router-dom";

function CategoryPage() {
  const { name } = useParams();

  const [nameCategory, setNameCategory] = useState("");

  useEffect(() => {
    if (name) {
      setNameCategory(name);
    }
  }, [name]);

  return (
    <React.Fragment>
      <Header />

      <CategoryLayoutSecondary name={nameCategory} />

      <AppActions />

      <AppActionsMobile />

      <Footer />
    </React.Fragment>
  );
}
export default CategoryPage;
