// import Style LESS File:
import './styles/CategoriesMultiColumn.less';

// import ANT Design Components used:
import { Col, Image, Row } from "antd";

// import another components used:
import ScrollContainer from 'react-indiana-drag-scroll';

// import custom hooks:
import { useGetApi, useWindowSize } from "../../../functions";

// import responsive image show component:
import ShowResponsiveImage from "../../common/ShowResponsiveImage";

import CategoriesMultiColumnSkeleton from "./CategoriesMultiColumnSkeleton";

import TextTruncate from "react-text-truncate";

// import helper functions:
import { __ } from '../../../functions/Helper';

import { useTranslation } from "react-i18next";
import { useGetStoreState } from "../../../contexts/store/StoreContext";
import { Link } from "react-router-dom";

const CategoriesMultiColumn = () => {

  const { id: storeId } = useGetStoreState();

  const { t } = useTranslation();

  const { width } = useWindowSize();

  const { isLoading, data } = useGetApi(`store-categories-api`, `store_id=${storeId}`, 'categories');
  const { categories } = data || [];

  return (
    <div className={ `categoriesMultiColumn--container py-4 h-100` }>
      <Row className="h-100">

        { isLoading ?
          <CategoriesMultiColumnSkeleton
            skeleton = {true}
            skeltonNumbers = {7}
            swiper
          /> :
          <>
            <Col className="categoriesMultiColumn--item" xs={7} md={6} lg={5} xl={4} >
              <Link className="d-block h-100" to={'/all-categories'}>
                <Row>
                  <Col span={24} className="categoriesMultiColumn--icon text-center my-2">
                    <Row justify="center" className="h-100">
                      <div className="rounded-circle shadow-circle">
                        <i className="far fa-list-ul mr-2 display-2 font-weight-500 text-primary mx-auto" />
                      </div>
                    </Row>
                  </Col>
                  <Col span={24} className="categoriesMultiColumn--icon-title text-center text-47 vv-font-size-1-5 pb-2 text-wrap px-3">
                    { t(__('All Categories')) }
                  </Col>
                </Row>
              </Link>
            </Col>
            <Col xs={17} md={18} lg={19} xl={20}>
              <ScrollContainer className="text-select-none d-flex requestsList--scrollContainer">
                {categories.map((category, index) => {
                  return (
                    <Col xs={9} lg={5} md={7} xl={4} xxl={3} key={category?.category_id} className="categoriesMultiColumn--item">
                      <a className={ `d-block h-100 ${category?.p_count === 0 && 'categoryLink--disable'}` } href={ `https://alaedeen.com/categories/${category?.seo_name}/?store_id=${storeId}` }>
                        <Row className="categoriesMultiColumn--item__row">
                          <Col span={24} className="categoriesMultiColumn--img text-center my-2">
                            <div className="categoriesMultiColumn--img__wrapper">


                              { (category?.main_pair.detailed && category?.main_pair?.detailed?.image_path) ?
                                <ShowResponsiveImage imagePath={ category?.main_pair?.detailed?.image_path }
                                                     imageFolder='detailed' width={ width < 768 ? 73 : 115 }
                                                     height={ width < 768 ? 73 : 115 } imageAlt={ category?.category }
                                                     object_id={ category?.category_id } object_type={ 'cat' }/> :
                                <Image
                                  width={ width < 768 ? 73 : 115 }
                                  height={ width < 768 ? 73 : 115 }
                                  preview={ false }
                                  src="error"
                                  fallback="data:image/png;base64,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"
                                />
                              }


                            </div>
                          </Col>
                          <Col span={24} className="categoriesMultiColumn--title text-center text-47 pb-2 px-3">
                            <TextTruncate
                              className="vv-font-size-1-5"
                              line={2}
                              element="span"
                              truncateText=" …"
                              text={category?.category}
                            />
                          </Col>
                        </Row>
                      </a>
                    </Col>
                  );
                })}
              </ScrollContainer>
            </Col>
          </>
        }

      </Row>
    </div>
  );
};

export default CategoriesMultiColumn;