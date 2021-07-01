// import Style:
import './styles/BottomDetails.less';
import { useWindowSize } from "../../../functions";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

const BottomDetails = () => {
  const { width } = useWindowSize();

  return (
    <div className={ width >=768 ? 'bottomDetails--container__desktop' : 'bottomDetails--container__mobile' }>
      { width >= 768 ? /*for Desktop*/
        <div className="shadow bottomDetails--content__desktop">
          <Row gutter={[0, 16]} className="py-4">
            <Col span={24} className="text-center">
              <Link to={"/send-inquiry"} >
                <div>
                  <i className="fal fa-envelope text-2d display-4 bottomDetails--icon" />
                </div>
                <div className="text-2d vv-font-size-1-8 font-weight-600 bottomDetails--text">
                  Send inquiry
                </div>
              </Link>
            </Col>
            <Col span={24} className="text-center">
              <Link to={"/chat"} >
                <div>
                  <i className="fal fa-comments text-2d display-4 font-weight-500 bottomDetails--icon" />
                </div>
                <div className="text-2d vv-font-size-1-8 font-weight-600 bottomDetails--text">
                  Chat
                </div>
              </Link>
            </Col>
          </Row>
        </div> : /*For Mobile*/
        <>Mobile</>
      }
      <Row>
        <Col>

        </Col>
      </Row>
    </div>
  );
};

export default BottomDetails;
