import React from "react";

const Categories = ({ filterItems, category }) => {
  return (
    <>
      <h5 className="text-center m-3 text-white">Filter by language</h5>
      <div className="d-flex gap-3 justify-content-center align-items-center ">
        {category.map((item,index) => {
          return (
            <button className="btn primary-green text-white link-btn text-capitalize "  
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
