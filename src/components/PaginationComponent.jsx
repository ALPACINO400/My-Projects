// import { Pagination } from "@mui/material";
// import React, { useContext } from "react";

// import { ProductContext } from "../Context/ProductContext";


// const PaginationComponent = () => {
//   const { pageNumber, setPageNumber, pageSize, totalPages } =
//     useContext(ProductContext);

//   console.log(pageNumber);

//   const handlePageChange = (event, value) => {
//     setPageNumber(value);
//   };

//   return (
//     <Pagination
//       count={totalPages}
//       page={pageNumber}
//       onChange={handlePageChange}
//       variant="outlined"
//       shape="rounded"
//       sx={{ marginTop: 3 }}
//     />
//   );
// };

// export default PaginationComponent;

// import { Pagination } from "@mui/material";
// import React, { useContext } from "react";
// import { ProductContext } from "../Context/ProductContext";

// const PaginationComponent = () => {
//   const { pageNumber, setPageNumber, totalPages } = useContext(ProductContext);

//   const handlePageChange = (event, value) => {
//     setPageNumber(value);
//   };

//   return (
//     <Pagination
//       count={totalPages}
//       page={pageNumber}
//       onChange={handlePageChange}
//       variant="outlined"
//       shape="rounded"
//       sx={{ marginTop: 3 }}
//     />
//   );
// };

// export default PaginationComponent;
import { Box, Pagination } from "@mui/material";
import { ProductContext } from "../Context/ProductContext";
import { useContext } from "react";


const PaginationComp = () => {
  const { pageNumber, setPageNumber, pageSize, totalPages } =
    useContext(ProductContext);

  console.log(pageNumber);

  const handlePageChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
      <Pagination
        count={totalPages}
        page={pageNumber}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
      />
    </Box>
  );
};

export default PaginationComp;