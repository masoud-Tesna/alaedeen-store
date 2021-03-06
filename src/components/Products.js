import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

//import Style File:
import './styles/Products.less';

// Import Ant Design Components:
import { Col, Pagination, Row } from "antd";

import { useGetApi, useQueryString, useWindowSize } from "../functions";
import SkeletonMultiColumnVertical from "../layouts/blocks/product_list_templates/SkeletonMultiColumnVertical";
import ProductsMultiColumnVertical from "../layouts/blocks/product_list_templates/ProductsMultiColumnVertical";
import LoadSpinner from "../layouts/blocks/static_templates/LoadSpinner";
import { useSetLoaded } from "../functions/Helper";
import { useGetStoreState } from "../contexts/store/StoreContext";
import { useGetConfig } from "../contexts/config/ConfigContext";

const Products = () => {

  const { id: storeId, storeSettings } = useGetStoreState();

  const favoriteColorCode = storeSettings?.product_block?.favorite_icon_color_code?.value || '#f20604';

  // get initial config:
  const { config } = useGetConfig();

  const { width } = useWindowSize();

  const { isLoaded } = useSetLoaded();

  const history = useHistory();
  const query = useQueryString();

  const initialPage = query.get("page");

  const [page, setPage] = useState(initialPage || 1);

  const { isLoading, data, isFetching } = useGetApi(`products-api`, `items_per_page=20&company_id=${storeId}&page=${page}`, `products_${page}`);
  const { products, params } = data || [];

  if (!isLoading && !products?.length) {
    history.push('/');
  }


  const paginationItemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <i className ={ `fal fa-chevron-${config.language === 'en' ? 'left' : 'right'} vv-font-size-2` } />;
    }
    if (type === 'next') {
      return <i className ={ `fal fa-chevron-${config.language === 'en' ? 'right' : 'left'} vv-font-size-2` } />;
    }
    return originalElement;
  }

  useEffect(() => {
    if (isFetching) {
      window.scrollTo(0, 0);
    }
  }, [isFetching]);

  const handleChangePage = pageNumber => {
    setPage(pageNumber);
    history.push(`/products/?page=${pageNumber}`);
  }

  if (isLoaded) {
    return <LoadSpinner spinner={'default'} spinnerColor={'#2e8339'} />
  }

  return (
    <Row className="mt-5 products--container">
      <Col className="products-content" span={24}>
        <div className="h-100">
          <Row className="h-100" justify="center" gutter={[ { xs: 16, md: 100 }, 22]}>

            {isLoading ?
              <SkeletonMultiColumnVertical
                skeleton = {true}
                skeltonNumbers ={ 20 }
                width = { width >= 768 ? 233 : 120 }
                height = {width >= 768 ? 233 : 120}
              /> :
              <>
                {products.map((product, i) => {
                  return (
                    <ProductsMultiColumnVertical
                      key = { i }
                      className="bg-white rounded-5 shadow-bottom-lg"
                      product={product}
                      productsPage
                      widthProductImage={width >= 768 ? 280 : 170}
                      heightProductImage={width >= 768 ? 280 : 170}
                      favoriteColorCode ={ favoriteColorCode }
                    />
                  );
                })}
              </>
            }
          </Row>
        </div>
      </Col>
      <Col span={24} className="text-center products--pagination">
        { (params?.length > 20 ) &&
          <Pagination
            size="default"
            total={ params.total_items }
            pageSize={20}
            defaultCurrent={initialPage || 1}
            showSizeChanger={false}
            itemRender={paginationItemRender}
            onChange={(page) => {handleChangePage(page)}}
          />
        }
      </Col>
    </Row>
  );
};

export { Products };
