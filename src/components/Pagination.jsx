import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Paginationn = ({ perPage, totalPosts, paginate, pageNumbers, items }) => {
  for (let i = 1; i < Math.ceil(totalPosts / perPage); i++) {
    pageNumbers.push(i);
  }
  // pageNumbers.push("Next Page")
  // pageNumbers.unshift("Previous Page")
  const x =  pageNumbers.map((number) => ({number}))
//   console.log("x is : ", x)

const handleClick = () => {
    pageNumbers.map((number) => paginate(number))

    
}

  return (
    <Stack spacing={2} sx={{ color: "white" }}>
      <Pagination
        color="warning"
        onClick={handleClick()}
        href="#"
        count={pageNumbers.length}
        PrevButton
        NextButton
      />
    </Stack>
  );
};

export default Paginationn;
