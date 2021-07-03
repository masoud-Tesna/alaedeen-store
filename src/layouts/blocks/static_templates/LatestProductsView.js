// import Style File:
import './styles/PopularProducts.less';

// import ANT Design Components Used:
import { Button, Col, Row } from "antd";

// import Another Components Used:
import ProductsMultiColumnVertical from "../product_list_templates/ProductsMultiColumnVertical";
import SkeletonMultiColumnVertical from "../product_list_templates/SkeletonMultiColumnVertical";

// import Custom hooks:
import { useGetProductApi, useWindowSize } from "../../../functions";

// import helper functions:
import { __ } from '../../../functions/Helper';

import { useTranslation } from "react-i18next";

const PopularProducts = () => {

  const { t } = useTranslation();

  const { width } = useWindowSize();

  const url = `items_per_page=4&company_id=264&page=1`;

  const { load, products } = useGetProductApi(url);

  let productsMultiColumnVertical_items = { span: 8 };

  if (width <= 991) {
    productsMultiColumnVertical_items = { span: 12 };
  }

  return (
    <div className="recommendedProducts--container">
      <Row>
        <Col className="recommendedProducts--caption__content" span={24}>
          <Row justify="space-between">
            <Col span={24} className={ `text-47 text-uppercase ${ width >= 768 ? 'vv-font-size-3 mb-4 px-4' : 'vv-font-size-1-6 text-center' } font-weight-bold` }>
              { t(__('Latest Products')) }
            </Col>
          </Row>
        </Col>
        <Col span={24} className="bg-white py-5 px-6">
          <div className="h-100 productsMultiColumnVertical--container">
            <Row className="h-100 productsMultiColumnVertical--items" justify="space-around"  gutter={[ { xs: 16, md: 100 }, 20]}>

              {load ?
                <SkeletonMultiColumnVertical
                  skeleton = {true}
                  skeltonNumbers ={ 4 }
                  grid={productsMultiColumnVertical_items}
                  width = { width }
                  height = {width >= 768 ? 363.933 : 273.05}
                /> :
                <>
                  {products.map((product, i) => {
                    return (
                      <ProductsMultiColumnVertical
                        key = { i }
                        className="bg-white"
                        product={product}
                        allDetails
                        widthProductImage={width >= 768 ? 233 : 120}
                        heightProductImage={width >= 768 ? 233 : 120}
                      />
                    );
                  })}
                </>
              }
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PopularProducts;