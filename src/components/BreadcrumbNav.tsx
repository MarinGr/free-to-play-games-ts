import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

type BreadcrumbProps = {
  title: string;
};

const BreadcrumbNav = ({ title }: BreadcrumbProps) => {
  const navigate = useNavigate();

  return (
    <Breadcrumb pl="16px">
      <BreadcrumbItem onClick={() => navigate(`/`)}>
        <BreadcrumbLink _hover={{ color: "primary.900" }}>Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">{title}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BreadcrumbNav;
