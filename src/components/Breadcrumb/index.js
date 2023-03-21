import { Breadcrumb as BreadcrumbAnt } from "antd";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BreadcrumbCustom = styled(BreadcrumbAnt)`
  .ant-breadcrumb {
    color: #000000;
  }
`;

function Breadcrumb({ items, ...props }) {
  return (
    <BreadcrumbCustom>
      {items.map((item) => (
        <BreadcrumbItem className="text-lg" key={item.title}>
          <Link to={item.link}>{item.title}</Link>
        </BreadcrumbItem>
      ))}
    </BreadcrumbCustom>
  );
}

export default Breadcrumb;

// Shop / Cao / Cao huou
