import { Form, Formik } from "formik";
import { IoSearch } from "react-icons/io5";
import Button from "../Button";
import * as Yup from "yup";
import Input from "../Input";
import "./index.scss";

const SearchForm = ({ onSubmit }) => {
  const initialValues = {
    keyword: "",
  };

  return (
    <Formik
      initialValues={{ ...initialValues }}
      onSubmit={(values) => {
        console.log("🚀 ~ file: index.js:32 ~ SearchForm ~ values:", values);
        // const result = { ...values, };
        // onSubmit(result);
      }}
      validationSchema={Yup.object({
        keyword: Yup.string(),
      })}
    >
      <Form className="flex max-w-full search_form">
        <Input type="text" name="keyword" placeholder="Tìm kiếm sản phẩm..." />
        <Button size="sm-btn" type="primary" htmlType="submit">
          <IoSearch />
        </Button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
