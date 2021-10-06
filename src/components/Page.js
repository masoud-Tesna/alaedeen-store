import { useParams } from "react-router-dom";

// import style file:
import './styles/Page.less';

// import ant design:
import { Col, Row, Skeleton } from "antd";
import { useGetStoreState } from "../contexts/store/StoreContext";
import { useGetApi } from "../functions";

const Page = () => {

  const { id: storeId, name: storeName } = useGetStoreState();
  let { page: pageSeoName } = useParams();

  const { isLoading, data: page } = useGetApi(`page-api`, `page_seo=${pageSeoName}&store_id=${storeId}`, `storePage_${pageSeoName}_${storeId}`);

  if (page?.page) {
    document.title = `Alaedeen.com | ${page.page} - ${storeName}`;
  }
  console.log(page)
  return (
    <Row className={`page--container`}>
      <Col span={24}>
        {isLoading &&
          <Skeleton  paragraph={{ rows: 25 }}  active />
        }
        {page?.page &&
          <>
            <Row>
              <Col span={24} className={`page--name text-center`}>
                {page.page}
              </Col>
              <Col className="page--content" dangerouslySetInnerHTML={ {__html: page.description} } />
            </Row>
          </>
        }

      </Col>
    </Row>
  );
};

export { Page };
