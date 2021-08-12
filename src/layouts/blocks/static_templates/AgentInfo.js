//import style:
import './styles/AgentInfo.less'

import { Col, Row, Skeleton } from "antd";
import { useGetApi, useWindowSize } from "../../../functions";
import { useTranslation } from "react-i18next";
import { __ } from "../../../functions/Helper";
import { useGetStoreState } from "../../../contexts/store/StoreContext";
import React from "react";

const AgentInfo = () => {
  const { id: storeId } = useGetStoreState();

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
                          <div className="text-center" style={{ width: 145, height: 145 }}>
                            <i className="fal fa-user vv-font-size-9 text-70 d-block" style={{ lineHeight: "15rem" }} />
                          </div>
                          /*<img className="rounded-circle" src={ store_agent.personal_photo || '' } alt={ store_agent.full_name }/>*/
                        }
                      </Col>
                      <Col span={24} className="text-47 text-center agentInfo--name">
                        {isLoading ?
                          <Skeleton.Input style={{ width: 130 }} active={true} size={"small"} /> :
                          `${ store_agent.full_name }`
                        }
                      </Col>
                    </Row>
                  </Col> :
                  <>
                    <Col span={12} className="agentInfo--image">
                      {isLoading ?
                        <Skeleton.Avatar style={{ width: 80, height: 80 }} active={true} size={"large"} shape={"circle"} /> :
                        <div className="text-center" style={{ width: 80, height: 80 }}>
                          <i className="fal fa-user vv-font-size-9 text-70 d-block" style={{ lineHeight: "9rem" }} />
                        </div>
                        /*<img className="rounded-circle" src={ store_agent.personal_photo || '' } alt={ store_agent.full_name }/>*/
                      }
                    </Col>
                    <Col span={12} className="my-auto text-47 agentInfo--name">
                      {isLoading ?
                        <Skeleton.Input style={{ width: 100 }} active={true} size={"small"} /> :
                        `${ store_agent.full_name }`
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
                        store_agent.telephone || ''
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
                        store_agent.country_and_region || ''
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
                        store_agent.province_and_state || ''
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
