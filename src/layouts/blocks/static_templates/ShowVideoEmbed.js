// import style file:
import './styles/ShowVideoEmbed.less';

import { Col, Row } from "antd";

const ShowVideoEmbed = ({ embedLink, extraClassName }) => {
  return (
    <Row>
      <Col span={24} className={`showVideoEmbed--content ${extraClassName}`}>
          <embed type="video/webm" src={embedLink} />
      </Col>
    </Row>
  );
};

export default ShowVideoEmbed;
