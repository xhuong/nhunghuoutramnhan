import { Breadcrumb as BreadcrumbAnt } from "antd";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
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
        <BreadcrumbItem className="text-lg">{item.name}</BreadcrumbItem>
      ))}
    </BreadcrumbCustom>
  );
}

export default Breadcrumb;
