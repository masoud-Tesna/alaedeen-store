import { useEffect } from "react";

// import style file:
import '../styles/Manufacturing.less';

// import custom hooks and helper functions:
import { useGetApi, useQueryString, useWindowSize } from "../../functions";
import { __, useSetLoaded } from "../../functions/Helper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination,Navigation } from 'swiper/core';

// import Ant Design Components:
import { Col, Row } from "antd";

// import store_id context:
import { useGetStoreState } from "../../contexts/store/StoreContext";

// import function for translate:
import { useTranslation } from "react-i18next";

// import spinner for show if loading:
import LoadSpinner from "../../layouts/blocks/static_templates/LoadSpinner";

// import show responsive image from API:
import ShowResponsiveImage from "../../layouts/common/ShowResponsiveImage";

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

const QualityControl = () => {

  const { id: storeId } = useGetStoreState();

  // get screen width:
  const { width } = useWindowSize();

  const { t } = useTranslation();

  const { isLoaded } = useSetLoaded();

  const { isLoading, data } = useGetApi(`factories-api`, `company_id=${storeId}&field=quality_control`, 'manufacturing');
  const { factories: QualityControls } = data || [];

  const query = useQueryString();

  const initialSlide = query.get("slide") - 1 || 0;


  useEffect(() => {
    document.getElementById('HornStoreApp').scrollIntoView()
  }, []);

  const ImagesSwiper = ({ images, processKey }) => {
    return(
      <Swiper pagination={{
        "type": "fraction"
      }} navigation={false}>

        { images.map((image, index) => {
          return (
            <SwiperSlide key={`QualityControls_image_${index}`}>
              <ShowResponsiveImage imagePath={ image } imageFolder='profiles' width={width} height={width < 768 ? 233 : 433} object_id={index + 1}  object_type={`QualityControls_img_${processKey}`}/>
            </SwiperSlide>
          )
        }) }

      </Swiper>
    )
  }

  if (isLoaded) {
    return <LoadSpinner spinner={'default'} spinnerColor={'#2e8339'} />
  }

  return (
    <Row className="vh-100 manufacturing--container">
      <Col span={24}>
        <Swiper pagination={{
          "type": "fraction"
        }} navigation={false} initialSlide={ initialSlide } className="manufacturing--swiper">

          {isLoading ?
            <>Loading...</> :
            Object.entries(QualityControls.quality_control.process.fields).map(([key, QualityControl], index) => {
              return (
                <SwiperSlide key={`swiper_QualityControl_${index}`}>
                  <Row className="manufacturing--info__content">
                    <Col span={24} className="manufacturing--images">
                      <ImagesSwiper images={QualityControl.process_pictures} processKey={index + 1} />
                    </Col>

                    <Col span={24} className="mt-4 manufacturing--info__QualityControl">
                      <Row>
                        <Col span={24} className="vv-font-size-2 font-weight-bold text-47 manufacturing--info__title py-4">
                          { t(__('Quality control process')) }
                        </Col>

                        <Col span={24} className="manufacturing--info__processName py-4 bg-f6">
                          <Row>
                            <Col span={12} className="vv-font-size-1-4 text-92">
                              { t(__('Process name')) }
                            </Col>

                            <Col span={12} className="vv-font-size-1-4 text-47">
                              { QualityControl.process_name || '---' }
                            </Col>
                          </Row>
                        </Col>

                        <Col span={24} className="manufacturing--info__desc py-4">
                          <span className="d-block vv-font-size-1-4 text-92 mb-3">{ t(__('Process describe')) }</span>
                          { QualityControl.process_describe || '' }
                        </Col>
                      </Row>
                    </Col>

                    <Col span={24} className="mt-5 manufacturing--info__laboratoryEquipment">
                      <Row gutter={[0, 20]}>
                        <Col span={24} className="vv-font-size-2 font-weight-bold text-47 manufacturing--info__title">
                          { t(__('laboratory equipment')) }
                        </Col>

                        <Col span={24} className="manufacturing--info__processName px-0">
                          <Row>
                            {Object.entries(QualityControls.quality_control.equipment.fields).map(([key, equipment], index) => {
                              return (
                                <Col key={`equipment_${key}_${index}`} span={24} className="py-4 manufacturing--info__processNameContent">
                                  <Row gutter={[0, 15]}>
                                    <Col span={24}>
                                      <Row>
                                        <Col span={12} className="vv-font-size-1-4 text-92">
                                          { t(__('Equipment name')) }
                                        </Col>

                                        <Col span={12} className="vv-font-size-1-4 text-47">
                                          { equipment.equipment_name || '---' }
                                        </Col>
                                      </Row>
                                    </Col>

                                    <Col span={24}>
                                      <Row>
                                        <Col span={12} className="vv-font-size-1-4 text-92">
                                          { t(__('Equipment model')) }
                                        </Col>

                                        <Col span={12} className="vv-font-size-1-4 text-47">
                                          { equipment.equipment_model || '---' }
                                        </Col>
                                      </Row>
                                    </Col>

                                    <Col span={24}>
                                      <Row>
                                        <Col span={12} className="vv-font-size-1-4 text-92">
                                          { t(__('Equipment quantity')) }
                                        </Col>

                                        <Col span={12} className="vv-font-size-1-4 text-47">
                                          { equipment.equipment_quantity || '---' }
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </Col>
                              )
                            })}
                          </Row>
                        </Col>
                      </Row>
                    </Col>

                  </Row>
                </SwiperSlide>
              );
            })
          }

        </Swiper>
      </Col>
    </Row>
  );
};

export { QualityControl };
