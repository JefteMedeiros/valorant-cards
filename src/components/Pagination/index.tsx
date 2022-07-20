import React from "react";
import { PaginationContainer } from "./styles";

const Pagination: React.FC = () => {
  return (
    <PaginationContainer>
      <form action="">
        <input type="radio" id="age1" name="age" value="30" />
        <input type="radio" id="age2" name="age" value="60" />
        <input type="radio" id="age3" name="age" value="100" />
      </form>
    </PaginationContainer>
  );
};

export default Pagination;
