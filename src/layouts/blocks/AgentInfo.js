import React               from "react";
import { Col, Image, Row } from "react-bootstrap";

const AgentInfo = () => {
  return (
    <>
      <Row className="m-0 p-0">
        <Col className="m-0 px-4 py-3 AgentInfo__container" xs={12}>
          <Row className="m-0 p-0">
            <Col className="m-0 p-0 AgentInfo__container--img" xs={5}>
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJZG-8Pk5VYr_MOP4Ks3uEeZdArTUAizNRwg&usqp=CAU" roundedCircle />
            </Col>
            <Col className="m-0 p-0 vv-font-size-1-6 text-47 font-weight-500 my-auto AgentInfo__container--Name" xs={7}>Ms. Sadeghi</Col>
          </Row>
          <Row className="m-0 p-0 mt-3 AgentInfo__detail--container">
            <AgentInfoDetail
            detailVariable="Telephone"
            detailValue="+98 - 9125478521"/>
            <AgentInfoDetail
              detailVariable="Address"
              detailValue="No 15 Street Bagheri"/>
            <AgentInfoDetail
              detailVariable="Country/region"
              detailValue="Iran"/>
            <AgentInfoDetail
              detailVariable="Province/State"
              detailValue="Tehran"/>
            <AgentInfoDetail
              detailVariable="City"
              detailValue="Tehran"/>
          </Row>
        </Col>
      </Row>
    </>
  );
};

const AgentInfoDetail = ({ detailVariable, detailValue }) => {
  return (
    <>
      <Col className="m-0 p-0 vv-font-size-1-4 text-92 text-capitalize AgentInfo__detail--variable" xs={5}>{ detailVariable }:</Col>
      <Col className="m-0 p-0 vv-font-size-1-4 text-47 text-capitalize my-auto AgentInfo__detail--value" xs={7}>{ detailValue }</Col>
    </>
  );
}

export default AgentInfo;