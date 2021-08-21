import { Link } from "react-router-dom";

// import Styles For default:
import './styles.less';

// Ant Design Import:
import { Row, Col } from 'antd';


// import helper functions:
import { useGetApi } from "../../../functions";
import { useGetStoreState } from "../../../contexts/store/StoreContext";

const DefaultFooter = () => {

  const { id: storeId } = useGetStoreState();

  const { isLoading, data: pages } = useGetApi(`footer-pages-api`, `store_id=${storeId}`, `footerPage_${storeId}`);

  return (
    <Row className="bg-f6 pt-md-5 footer--container" justify={"center"}>
      <Col span={24} className="footer--content">
        <Row className="row-cols-2 row-cols-md-3" gutter={[6, 24]}>
          {pages?.map(page => {
            return(
              <Col key={`footerPage_${page.page_id}`} className="text-47">
                <Link to= {`/page/${page.seo_name}`}>
                  { page.page}
                </Link>
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
};

export { DefaultFooter };