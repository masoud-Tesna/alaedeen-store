import React                  from "react";
import { Col, Row }           from "react-bootstrap";
import { useTranslate as __ } from "../../functions/Func";
import { Link }               from "react-router-dom";

const CategoriesSwiper = () => {
  return (
    <>
      <Row className="m-0 p-0">
        <Col className="m-0 p-0 vv-font-size-1-8 font-weight-bold text-center text-capitalize my-2" xs={12}>{ __('Main Categories') }</Col>
        <Col className="m-0 p-0" xs={12}>
          <div className="storeCategoriesTop__container pl-1">
            <div className="d-inline-block storeCategoriesTop__container--allCategories">
              <div className="storeCategoriesTop__item d-inline-block pb-3">
                <Link className="text-decoration-none d-block" to={`all-categories`}>
                  <Row className="m-0 p-0 pt-2 justify-content-center">
                    <Col className="m-0 p-0 rounded-circle shadow-circle subCategoryImage" xs={12}>
                      <Row className="m-0 p-0 allCategoryIcon">
                        <Col className="m-0 p-0 text-center my-auto" xs={12}>
                          <i className="fal fa-list display-4 text-primary font-weight-500"/>
                        </Col>
                      </Row>
                    </Col>
                    <Col className="m-0 p-0 mt-2 text-center text-47 storeCategoriesTop__item--text" xs={12}>
                      { __('All Categories') }
                    </Col>
                  </Row>
                </Link>
              </div>
            </div>
            <div className="d-inline-block storeCategoriesTop__container--anotherCategories">
              <div className="storeCategoriesTop__container--items">
                <CategoryItem
                  imgSrc  = "http://store.nilper.ir/image/cache/catalog/Product picture/Office Chair/850br-200x200.jpg"
                  imgAlt  = "Office Chair"
                  catName = "Office Chair"
                />
                <CategoryItem
                  imgSrc  = "http://store.nilper.ir/image/cache/catalog/Product%20picture/Restuarant/r418-228x228.jpg"
                  imgAlt  = "Restaurant Furniture"
                  catName = "Restaurant Furniture"
                />
                <CategoryItem
                  imgSrc  = "http://store.nilper.ir/image/cache/catalog/Product%20picture/Office%20Sofa/FB726N1r-228x228.jpg"
                  imgAlt  = "Office Furniture"
                  catName = "Office Furniture"
                />
                <CategoryItem
                  imgSrc  = "http://store.nilper.ir/image/cache/catalog/Product%20picture/Office%20Sofa/FB726N1r-228x228.jpg"
                  imgAlt  = "Office Furniture"
                  catName = "Office Furniture"
                />
                <CategoryItem
                  imgSrc  = "http://store.nilper.ir/image/cache/catalog/Product%20picture/Office%20Sofa/FB726N1r-228x228.jpg"
                  imgAlt  = "Office Furniture"
                  catName = "Office Furniture"
                />
                <CategoryItem
                  imgSrc  = "http://store.nilper.ir/image/cache/catalog/Product%20picture/Office%20Sofa/FB726N1r-228x228.jpg"
                  imgAlt  = "Office Furniture"
                  catName = "Office Furniture"
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

const CategoryItem = ({ imgSrc, imgAlt, catName }) => {
  return (
    <div className="storeCategoriesTop__item d-inline-block pb-3">
      <Link className="text-decoration-none" to={`/`}>
        <Row className="m-0 p-0 pt-2 justify-content-center">
          <Col className="m-0 p-0 rounded-circle shadow-circle subCategoryImage" xs={12}>
            <img className="rounded-circle" src={imgSrc} alt={imgAlt}/>
          </Col>
          <Col className="m-0 p-0 mt-2 text-center text-47 storeCategoriesTop__item--text" xs={12}>{catName}</Col>
        </Row>
      </Link>
    </div>
  );
}

export default CategoriesSwiper;