import React, { useEffect, useState } from "react";

import { Col, Row }  from "react-bootstrap";
import LoaderSpinner from "../../layouts/blocks/LoaderSpinner";

/*import { Link, useLocation } from "react-router-dom";
import TopPanel              from "../layouts/TopPanel";*/


const AllCategories = () => {

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 2000);
  }, []);

  return (
    <>
      { isLoaded && <LoaderSpinner /> }

      <Col className="m-0 p-0 storeAllCategories" xs={12}>
        <Row className="m-0 p-0 allCategory__container">
          <CategoryItem
            category = {{
              name: "Office Chair",
              img: "http://store.nilper.ir/image/cache/catalog/Product picture/Office Chair/850br-200x200.jpg",
              subCat: false
            }}
          />

          <CategoryItem
            category = {{
              name: "Restaurant Furniture",
              img: "http://store.nilper.ir/image/cache/catalog/Product%20picture/Restuarant/r418-228x228.jpg",
              subCat: true
            }}
          />

          <CategoryItem
            category = {{
              name: "Office Furniture",
              img: "http://store.nilper.ir/image/cache/catalog/Product%20picture/IMG_5423-200x200.png",
              subCat: true
            }}
          />

          <CategoryItem
            category = {{
              name: "Restaurant Furniture",
              img: "http://store.nilper.ir/image/cache/catalog/Product%20picture/Restuarant/11.99/NREG111-2-200x200.jpg",
              subCat: false
            }}
          />

          <CategoryItem
            category = {{
              name: "Office Chair",
              img: "http://store.nilper.ir/image/cache/catalog/Product%20picture/IMG_5423-200x200.png",
              subCat: true
            }}
          />

          <CategoryItem
            category = {{
              name: "Office Chair",
              img: "http://store.nilper.ir/image/cache/catalog/Product%20picture/Office%20Sofa/99.04/ocm888-200x200.jpg",
              subCat: false
            }}
          />
        </Row>
      </Col>
    </>
  );
};

const CategoryItem = ({ category }) => {
  const [subCatIcon, setSubCatIcon] = useState(false);

  const handleClickSubCatIcon = () => {
    setSubCatIcon(!subCatIcon);
  }
  return (
    <Col className="m-0 p-0 py-3 border-bottom border-e6 allCategory__item" xs={12}>
      <Row className = "m-0 p-0">
        <Col className = "m-0 p-0 my-auto text-center allCategory__item--img" xs={3}>
          <img className="rounded-circle" src = { category.img } alt = { category.name }/>
        </Col>

        <Col className = "m-0 p-0 vv-font-size-1-4 text-47 my-auto allCategory__item--text" xs={8}>{ category.name }</Col>

        { category.subCat &&
        <Col className = "m-0 p-0 my-auto allCategory__item--chevron" xs={1} onClick={() => {handleClickSubCatIcon()}}>
          <i className = { `fa fa-chevron-${subCatIcon ? 'up' : 'down'} vv-font-size-2 text-bc` }/>
        </Col> }
      </Row>
    </Col>
  );
}

export default AllCategories;