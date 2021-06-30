//import style:
import './styles/AgentInfo.less'

import { Col, Row, Space } from "antd";
import { useWindowSize } from "../../../functions";
import { useTranslation } from "react-i18next";
import { __ } from "../../../functions/Helper";

const AgentInfo = () => {
  const { t } = useTranslation();

  const { width } = useWindowSize();

  return (
    <>
      <Row className="my-4" justify={"center"}>
        <Col xs={24} md={12} className="shadow p-4 px-md-5 bg-white agentInfo--container">
          <Row>
            <Col xs={24} md={9}>
              <Row className="h-100" align={"middle"}>
                {width >= 768 ?
                  <Col flex="145px">
                    <Row>
                      <Col span={24} className="agentInfo--image">
                        <img className="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJZG-8Pk5VYr_MOP4Ks3uEeZdArTUAizNRwg&usqp=CAU" alt="nilper"/>
                      </Col>
                      <Col span={24} className="text-47 text-center agentInfo--name">
                        Ms. Sadeghi
                      </Col>
                    </Row>
                  </Col> :
                  <>
                    <Col span={12} className="agentInfo--image">
                      <img className="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJZG-8Pk5VYr_MOP4Ks3uEeZdArTUAizNRwg&usqp=CAU" alt="nilper"/>
                    </Col>
                    <Col span={12} className="my-auto text-47 agentInfo--name">
                      Ms. Sadeghi
                    </Col>
                  </>
                }
              </Row>
            </Col>
            <Col xs={24} md={15} className="mt-4 mt-md-0">
              <Row className="agentInfo--details" gutter={[0, 10]}>
                <Col span={24}>
                  <Row>
                    <Col className="text-92 text-capitalize agentInfo--details__variable" span={12}>{ t(__('Telephone')) }:</Col>
                    <Col className="text-47 text-capitalize agentInfo--details__value" span={12}>+98 - 9125478521</Col>
                  </Row>
                </Col>

                <Col span={24}>
                  <Row>
                    <Col className="text-92 text-capitalize agentInfo--details__variable" span={12}>{ t(__('Address')) }:</Col>
                    <Col className="text-47 text-capitalize agentInfo--details__value" span={12}>No 15 Street Bagheri</Col>
                  </Row>
                </Col>

                <Col span={24}>
                  <Row>
                    <Col className="text-92 text-capitalize agentInfo--details__variable" span={12}>{ t(__('Country/region')) }:</Col>
                    <Col className="text-47 text-capitalize agentInfo--details__value" span={12}>Iran</Col>
                  </Row>
                </Col>

                <Col span={24}>
                  <Row>
                    <Col className="text-92 text-capitalize agentInfo--details__variable" span={12}>{ t(__('Province/State')) }:</Col>
                    <Col className="text-47 text-capitalize agentInfo--details__value" span={12}>Tehran</Col>
                  </Row>
                </Col>

                <Col span={24}>
                  <Row>
                    <Col className="text-92 text-capitalize agentInfo--details__variable" span={12}>{ t(__('City')) }:</Col>
                    <Col className="text-47 text-capitalize agentInfo--details__value" span={12}>Tehran</Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default AgentInfo;
