//import style:
import './styles/AgentInfo.less'

import { Col, Row, Skeleton } from "antd";
import { useGetApi, useWindowSize } from "../../../functions";
import { useTranslation } from "react-i18next";
import { __ } from "../../../functions/Helper";
import { useGetStoreIdState } from "../../../contexts/store/StoreContext";
import React from "react";

const AgentInfo = () => {
  const storeId = useGetStoreIdState();

  const { t } = useTranslation();

  const { width } = useWindowSize();

  const { isLoading, data } = useGetApi(`store-agent-api`, `store_id=${storeId}`, 'agentInfo');
  const { store_agent } = data || [];

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
                        {isLoading ?
                          <Skeleton.Avatar style={{ width: 145, height: 145 }} active={true} size={"large"} shape={"circle"} /> :
                          <img className="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJZG-8Pk5VYr_MOP4Ks3uEeZdArTUAizNRwg&usqp=CAU" alt="nilper"/>
                        }
                      </Col>
                      <Col span={24} className="text-47 text-center agentInfo--name">
                        {isLoading ?
                          <Skeleton.Input style={{ width: 130 }} active={true} size={"small"} /> :
                          `${store_agent.firstname || ''} ${store_agent.lastname || ''}`
                        }
                      </Col>
                    </Row>
                  </Col> :
                  <>
                    <Col span={12} className="agentInfo--image">
                      {isLoading ?
                        <Skeleton.Avatar style={{ width: 80, height: 80 }} active={true} size={"large"} shape={"circle"} /> :
                        <img className="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJZG-8Pk5VYr_MOP4Ks3uEeZdArTUAizNRwg&usqp=CAU" alt="nilper"/>
                      }
                    </Col>
                    <Col span={12} className="my-auto text-47 agentInfo--name">
                      {isLoading ?
                        <Skeleton.Input style={{ width: 100 }} active={true} size={"small"} /> :
                        `${store_agent.firstname || ''} ${store_agent.lastname || ''}`
                      }
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
                    <Col className="text-47 text-capitalize agentInfo--details__value" span={12}>
                      {isLoading ?
                        <Skeleton.Input style={{ width: 160 }} active={true} size={"small"} /> :
                        store_agent.phone || ''
                      }
                    </Col>
                  </Row>
                </Col>

                <Col span={24}>
                  <Row>
                    <Col className="text-92 text-capitalize agentInfo--details__variable" span={12}>{ t(__('Address')) }:</Col>
                    <Col className="text-47 text-capitalize agentInfo--details__value" span={12}>
                      {isLoading ?
                        <Skeleton.Input style={{ width: 170 }} active={true} size={"small"} /> :
                        store_agent.address || ''
                      }
                    </Col>
                  </Row>
                </Col>

                <Col span={24}>
                  <Row>
                    <Col className="text-92 text-capitalize agentInfo--details__variable" span={12}>{ t(__('Country/region')) }:</Col>
                    <Col className="text-47 text-capitalize agentInfo--details__value" span={12}>
                      {isLoading ?
                        <Skeleton.Input style={{ width: 70 }} active={true} size={"small"} /> :
                        store_agent.country || ''
                      }
                    </Col>
                  </Row>
                </Col>

                <Col span={24}>
                  <Row>
                    <Col className="text-92 text-capitalize agentInfo--details__variable" span={12}>{ t(__('Province/State')) }:</Col>
                    <Col className="text-47 text-capitalize agentInfo--details__value" span={12}>
                      {isLoading ?
                        <Skeleton.Input style={{ width: 70 }} active={true} size={"small"} /> :
                        store_agent.state || ''
                      }
                    </Col>
                  </Row>
                </Col>

                {/*<Col span={24}>
                  <Row>
                    <Col className="text-92 text-capitalize agentInfo--details__variable" span={12}>{ t(__('City')) }:</Col>
                    <Col className="text-47 text-capitalize agentInfo--details__value" span={12}>
                      {isLoading ?
                        <Skeleton.Input style={{ width: 70 }} active={true} size={"small"} /> :
                        store_agent.city || ''
                      }
                    </Col>
                  </Row>
                </Col>*/}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default AgentInfo;
