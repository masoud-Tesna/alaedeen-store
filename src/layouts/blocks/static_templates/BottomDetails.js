import { useState } from "react";

// import Style:
import './styles/BottomDetails.less';

// import Ant Design Components:
import { Col, Row } from "antd";

// import custom hooks:
import { useWindowSize } from "../../../functions";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { __, useParsPathName } from "../../../functions/Helper";

// import OneRequestMultipleQuotesModal component for show send request form modal:
import OneRequestMultipleQuotesModal from "../../blocks/static_templates/OneRequestMultipleQuotesModal";

const BottomDetails = () => {
  const { t } = useTranslation();

  const { width } = useWindowSize();

  // state for request form modal:
  const [isRequestModalVisible, setIsRequestModalVisible] = useState(false);

  // Get Location pathName:
  const pathName = useParsPathName();

  // show request form modal function:
  const showRequestModalHeader = () => {
    setIsRequestModalVisible(true);
  }

  const StickyButton = (
    {
      buttonIcon,
      buttonIconColor,
      buttonName,
      buttonNameColor,
      buttonLink,
      buttonExtra,
      type = "link",
      onClick
    }
  ) => {

    const content = (<Row justify={"center"}>
      <Col className="m-0 p-0">
        <Row className="m-0 p-0">
          <Col className="m-0 p-0 text-center" span={24}>
            <i className={ `${ buttonIcon } ${ buttonIconColor } vv-font-size-3 font-weight-500` } />
          </Col>
          <Col className={ `m-0 p-0 text-center vv-font-size-1-8 ${buttonNameColor} StickyButtons__item--name` } span={24}>{ buttonName }</Col>
        </Row>
      </Col>
    </Row>);

    return (
      <Col className={ `bottomDetails--mobile__item ${ buttonExtra || '' }` } span={8} onClick={onClick}>
        {type === "link" ?
          <Link className="d-block" to={ buttonLink }>
            {content}
          </Link> :
          <div className="__item">
            {content}
          </div>
        }

      </Col>
    );
  }

  if (pathName[0] === 'chat' || pathName[0] === 'all-categories') return <></>;

  return (
    <div className={ width >=768 ? 'bottomDetails--container__desktop' : 'bottomDetails--container__mobile w-100' }>
      { width >= 768 ? /*for Desktop*/
        <div className="shadow bottomDetails--content__desktop">
          <Row gutter={[0, 16]} className="py-4">
            <Col span={24} className="text-center">
              <div className="__item" onClick={() => { showRequestModalHeader() }}>
                <div>
                  <i className="fa-regular fa-comment-quote text-2d bottomDetails--icon" />
                </div>
                <div className="text-2d vv-font-size-1-8 font-weight-600 bottomDetails--text">
                  {t(__('Request a Quote'))}
                </div>
              </div>
            </Col>
            <Col span={24} className="text-center">
              <Link to="/chat">
                <div>
                  <i className="far fa-comments text-2d bottomDetails--icon" />
                </div>
                <div className="text-2d vv-font-size-1-8 font-weight-600 bottomDetails--text">
                  {t(__('Chat'))}
                </div>
              </Link>
            </Col>
          </Row>
        </div> : /*For Mobile*/
        <div className="bottomDetails--content__mobile">
          <Row className="bg-white shadow-top">
            <StickyButton
              buttonIcon="fal fa-list"
              buttonIconColor="text-92"
              buttonName= { t(__('Categories')) }
              buttonNameColor= "text-92"
              buttonLink={`all-categories`}
            />
            <StickyButton
              buttonIcon="fa-regular fa-comment-quote"
              buttonIconColor="text-92"
              buttonName= { t(__('Request a Quote')) }
              buttonNameColor= "text-92"
              type="button"
              onClick={() => { showRequestModalHeader() }}
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

      <OneRequestMultipleQuotesModal
        isRequestModalVisible = {isRequestModalVisible}
        setIsRequestModalVisible = {setIsRequestModalVisible}
      />
    </div>
  );
};

export default BottomDetails;
