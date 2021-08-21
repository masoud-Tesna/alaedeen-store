// import Styles For default:
import './styles.less';

// Ant Design Import:
import { Row, Col } from 'antd';


// import helper functions:
import { __ } from '../../../functions/Helper';

import { useTranslation } from "react-i18next";
import { useGetApi } from "../../../functions";
import { useGetStoreState } from "../../../contexts/store/StoreContext";
import { Link } from "react-router-dom";

const DefaultFooter = () => {

  const { id: storeId } = useGetStoreState();

  const { isLoading, data: pages } = useGetApi(`footer-pages-api`, `store_id=${storeId}`, `footerPage_${storeId}`);

  const { t } = useTranslation();

  return (
    <Row className="bg-f6 pt-md-5 footer--container" justify={"center"}>
      <Col span={24} className="footer--content">
        <Row className="row-cols-2 row-cols-md-3" gutter={[6, 24]}>
          {pages?.pages?.map(page => {
            return(
              <Col key={`footerPage_${page.page_id}`} className="text-47">
                <Link to= {`/page/${page.page_id}`}>
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