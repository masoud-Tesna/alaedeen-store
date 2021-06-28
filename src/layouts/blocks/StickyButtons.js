import { Col, Row } from "react-bootstrap";

import { useTranslate as __ } from "../../functions/Func";
import { Link, useLocation }  from "react-router-dom";

const StickyButtons = () => {

  const location = useLocation();

  if (location.pathname !== '/all-categories' && location.pathname !== '/send-inquiry' && location.pathname !== '/chat') {
    return (
      <Row className="m-0 p-0 bg-white shadow-top StickyButtons__container">
        <StickyButton
          buttonIcon="fal fa-list"
          buttonName= { __('Categories') }
          buttonLink={`all-categories`}
        />
        <StickyButton
          buttonIcon="fal fa-envelope"
          buttonName= { __('Send Inquiry') }
          buttonLink={`send-inquiry`}
        />
        <StickyButton
          buttonIcon="fal fa-comments"
          buttonName= { __('Chat Now') }
          buttonExtra="bg-primary StickyButtons__item--chat"
          buttonLink={`chat`}
        />
      </Row>
    );
  }
  return '';
};

const StickyButton = ({ buttonIcon, buttonName, buttonLink, buttonExtra }) => {
  return (
    <Col className={ `m-0 p-0 StickyButtons__container--item ${ buttonExtra || '' }` } xs={4}>
      <Link className="text-decoration-none d-block" to={ buttonLink }>
        <Row className="m-0 p-0 justify-content-center">
          <Col className="m-0 p-0" xs={10}>
            <Row className="m-0 p-0">
              <Col className="m-0 p-0 text-center" xs={12}>
                <i className={ `${ buttonIcon } vv-font-size-3 text-92 font-weight-500` }></i>
              </Col>
              <Col className="m-0 p-0 text-center vv-font-size-1-6 text-92 StickyButtons__item--name" xs={12}>{ buttonName }</Col>
            </Row>
          </Col>
        </Row>
      </Link>
    </Col>
  );
}

export default StickyButtons;