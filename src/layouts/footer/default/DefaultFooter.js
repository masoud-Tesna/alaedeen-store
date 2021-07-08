// import Styles For default:
import './styles.less';

// Ant Design Import:
import { Row, Col } from 'antd';


// import helper functions:
import { __ } from '../../../functions/Helper';

import { useTranslation } from "react-i18next";

const DefaultFooter = () => {

  const { t } = useTranslation();

  return (
    <Row className="bg-f6 pt-md-5 footer--container" justify={"center"}>
      <Col span={24} className="footer--content">
        <Row className="row-cols-2 row-cols-md-3" gutter={[6, 24]}>
          <Col className="text-47">{ t(__('Order registration guide')) }</Col>
          <Col className="text-47">{ t(__('Warranty terms')) }</Col>
          <Col className="text-47">{ t(__('Privacy')) }</Col>
          <Col className="text-47 text-uppercase">{ t(__('FAQ')) }</Col>
          <Col className="text-47">{ t(__('Terms and Conditions')) }</Col>
          <Col className="text-47">{ t(__('Download')) }</Col>
        </Row>
      </Col>
    </Row>
  );
};

export { DefaultFooter };