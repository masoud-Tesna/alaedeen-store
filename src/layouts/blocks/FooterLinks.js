import React                  from "react";
import { Col, Row }           from "react-bootstrap";
import { useTranslate as __ } from "../../functions/Func";

const FooterLinks = () => {
  return (
    <>
      <Row className="m-0 p-0 px-4 footerLinks__container">
        <FooterLink
          linkAddress=""
          linkName= { __('Order registration guide') }
        />
        <FooterLink
          linkAddress=""
          linkName= { __('Warranty terms') }

        />
        <FooterLink
          linkAddress=""
          linkName= { __('Privacy') }

        />
        <FooterLink
          linkAddress=""
          linkName= { __('FAQ') }

        />
        <FooterLink
          linkAddress=""
          linkName= { __('Terms and Conditions') }

        />
        <FooterLink
          linkAddress=""
          linkName= { __('Download') }

        />
      </Row>
    </>
  );
};
const FooterLink = ({ linkAddress, linkName }) => {
  return (
    <>
      <Col className="m-0 p-0 vv-font-size-1-4 text-47" xs={6}>
        { linkName }
      </Col>
    </>
  );
}

export default FooterLinks;