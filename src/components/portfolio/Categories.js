import React from "react";

const Categories = ({ filterItems, category }) => {
  return (
    <>
      <h5 className="text-center m-3 text-white">Filter by language</h5>
      <div className="d-flex gap-3 justify-content-center align-items-center row">
        {category.map((item,index) => {
          return (
            <button className="btn primary-green text-white link-btn text-capitalize col-3 col-md-2 col-lg-1  "  
            key={index}
               onClick={()=>{
                 filterItems(item)
               }}
               >
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
