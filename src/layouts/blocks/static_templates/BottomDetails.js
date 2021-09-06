// import Style:
import './styles/BottomDetails.less';

// import Ant Design Components:
import { Col, Row } from "antd";

// import custom hooks:
import { useWindowSize } from "../../../functions";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { __, useParsPathName } from "../../../functions/Helper";

const BottomDetails = () => {
  const { t } = useTranslation();

  const { width } = useWindowSize();

  // Get Location pathName:
  const pathName = useParsPathName();

  if (pathName === 'chat' || pathName === 'all-categories') return <></>;

  return (
    <div className={ width >=768 ? 'bottomDetails--container__desktop' : 'bottomDetails--container__mobile w-100' }>
      { width >= 768 ? /*for Desktop*/
        <div className="shadow bottomDetails--content__desktop">
          <Row gutter={[0, 16]} className="py-4">
            <Col span={24} className="text-center">
              <a href="javascript:void(0)"  >
                <div>
                  <i className="fal fa-envelope text-2d display-4 bottomDetails--icon" />
                </div>
                <div className="text-2d vv-font-size-1-8 font-weight-600 bottomDetails--text">
                  {t(__('Send inquiry'))}
                </div>
              </a>
            </Col>
            <Col span={24} className="text-center">
              <a href="javascript:void(0)" >
                <div>
                  <i className="fal fa-comments text-2d display-4 font-weight-500 bottomDetails--icon" />
                </div>
                <div className="text-2d vv-font-size-1-8 font-weight-600 bottomDetails--text">
                  {t(__('Chat'))}
                </div>
              </a>
            </Col>
          </Row>
        </div> : /*For Mobile*/
        <div className="bottomDetails--content__mobile">
          <Row className="m-0 p-0 bg-white shadow-top">
            <StickyButton
              buttonIcon="fal fa-list"
              buttonIconColor="text-92"
              buttonName= { t(__('Categories')) }
              buttonNameColor= "text-92"
              buttonLink={`all-categories`}
            />
            <StickyButton
              buttonIcon="fal fa-envelope"
              buttonIconColor="text-92"
              buttonName= { t(__('Send Inquiry')) }
              buttonNameColor= "text-92"
              buttonLink={`send-inquiry`}
            />
            <StickyButton
              buttonIcon="fal fa-comments"
              buttonIconColor="text-white"
              buttonName= { t(__('Chat Now')) }
              buttonNameColor= "text-white"
              buttonExtra="bg-primary StickyButtons__item--chat"
              buttonLink={`chat`}
            />
          </Row>
        </div>
      }
    </div>
  );
};

const StickyButton = ({ buttonIcon, buttonIconColor, buttonName, buttonNameColor, buttonLink, buttonExtra }) => {
  return (
    <Col className={ `m-0 p-0 bottomDetails--mobile__item ${ buttonExtra || '' }` } span={8}>
      <Link className="d-block" to={ buttonLink }>
        <Row justify={"center"}>
          <Col className="m-0 p-0">
            <Row className="m-0 p-0">
              <Col className="m-0 p-0 text-center" span={24}>
                <i className={ `${ buttonIcon } ${ buttonIconColor } vv-font-size-3 font-weight-500` } />
              </Col>
              <Col className={ `m-0 p-0 text-center vv-font-size-1-8 ${buttonNameColor} StickyButtons__item--name` } span={24}>{ buttonName }</Col>
            </Row>
          </Col>
        </Row>
      </Link>
    </Col>
  );
}

export default BottomDetails;
