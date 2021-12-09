// import Style File:
import './styles/PopularProducts.less';

// import ANT Design Components Used:
import { Col, Row } from "antd";

// import Another Components Used:
import ProductsMultiColumnVertical from "../product_list_templates/ProductsMultiColumnVertical";
import SkeletonMultiColumnVertical from "../product_list_templates/SkeletonMultiColumnVertical";

// import Custom hooks:
import { useGetApi, useWindowSize } from "../../../functions";

// import helper functions:
import { __ } from '../../../functions/Helper';

import { useTranslation } from "react-i18next";
import { useGetStoreState } from "../../../contexts/store/StoreContext";

const PopularProducts = () => {

  const { id: storeId, storeSettings } = useGetStoreState();

  const borderColorCode = storeSettings?.product_block?.border_color_code?.value ?? '#bcbcbc';

  const favoriteColorCode = storeSettings?.product_block?.favorite_icon_color_code?.value || '#f20604';

  const { t } = useTranslation();

  const { width } = useWindowSize();

  const { isLoading, data } = useGetApi(`products-api`, `items_per_page=4&company_id=${storeId}&page=1`, `popularProducts`);
  const { products } = data || [];

  return (
    <div className="recommendedProducts--container">
      <Row>
        <Col className="recommendedProducts--caption__content" span={24}>
          <Row justify="space-between">
            <Col span={24} className={ `text-47 text-uppercase ${ width >= 768 ? 'vv-font-size-3 mb-4 px-4' : 'vv-font-size-1-6 text-center' } font-weight-bold` }>
              { t(__('Popular Products')) }
            </Col>
          </Row>
        </Col>
        <Col span={24} className="bg-white py-5 px-6">
          <div className="h-100 productsMultiColumnVertical--container">
            <Row className="h-100 productsMultiColumnVertical--items" justify="space-around" gutter={[ { xs: 16, md: 100 }, 20]}>

              {isLoading ?
                <SkeletonMultiColumnVertical
                  skeleton = {true}
                  skeltonNumbers ={ 4 }
                  width = { width >= 768 ? 233 : 120 }
                  height = {width >= 768 ? 233 : 120}
                /> :
                <>
                  {products && products?.map((product, i) => {
                    return (
                      <ProductsMultiColumnVertical
                        key = { i }
                        className="bg-white"
                        product={product}
                        widthProductImage={width >= 768 ? 233 : 120}
                        heightProductImage={width >= 768 ? 233 : 120}
                        borderColorCode ={ borderColorCode }
                        favoriteColorCode ={ favoriteColorCode }
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