import { useEffect, useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";

//import Style File:
import './styles/Products.less';

// Import Ant Dsign Components:
import { Col, Pagination, Row } from "antd";


import { useTranslation } from "react-i18next";
import { useGetProductApi, useQuery, useWindowSize } from "../functions";
import SkeletonMultiColumnVertical from "../layouts/blocks/product_list_templates/SkeletonMultiColumnVertical";
import ProductsMultiColumnVertical from "../layouts/blocks/product_list_templates/ProductsMultiColumnVertical";

const Products = () => {
  const { t } = useTranslation();

  const { width } = useWindowSize();

  const history = useHistory();
  const query = useQuery();

  const initialPage = query.get("page");

  const [page, setPage] = useState(initialPage || 1);

  const url2 = `items_per_page=20&company_id=264&page=${page}`;

  const { load, products, parameters } = useGetProductApi(url2);

  const paginationItemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <i className = "fal fa-chevron-left vv-font-size-2" />;
    }
    if (type === 'next') {
      return <i className = "fal fa-chevron-right vv-font-size-2"></i>;
    }
    return originalElement;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [load]);

  const handleChangePage = pageNumber => {
    setPage(pageNumber);
    history.push(`/products/?page=${pageNumber}`);
  }

  return (
    <Row className="mt-5 products--container mb-6">
      <Col className="products-content" span={24}>
        <div className="h-100">
          <Row className="h-100" justify="center" gutter={[ { xs: 16, md: 100 }, 22]}>

            {load ?
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
        { (parameters && parameters.length !== 0) &&
          <Pagination
            size="default"
            total={ parameters.total_items }
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
