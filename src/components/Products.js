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
import { useGetLanguageState } from "../contexts/language/LanguageContext";

const Products = () => {

  const { language } = useGetLanguageState();

  const { width } = useWindowSize();

  const { isLoaded } = useSetLoaded();

  const history = useHistory();
  const query = useQueryString();

  const initialPage = query.get("page");

  const [page, setPage] = useState(initialPage || 1);

  const { isLoading, data, isFetching } = useGetApi(`products-api`, `items_per_page=20&company_id=264&page=${page}`, `products_${page}`);
  const { products, params } = data || [];


  const paginationItemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <i className = "fal fa-chevron-left vv-font-size-2" />;
    }
    if (type === 'next') {
      return <i className = "fal fa-chevron-right vv-font-size-2" />;
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
                    />
                  );
                })}
              </>
            }
          </Row>
        </div>
      </Col>
      <Col span={24} className="text-center products--pagination">
        { (params && params.length !== 0) &&
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
