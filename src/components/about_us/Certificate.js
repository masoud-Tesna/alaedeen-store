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
import { useGetStoreIdState } from "../../contexts/store/StoreContext";

// import function for translate:
import { useTranslation } from "react-i18next";

// import spinner for show if loading:
import LoadSpinner from "../../layouts/blocks/static_templates/LoadSpinner";

// import show responsive image from API:
import ShowResponsiveImage from "../../layouts/common/ShowResponsiveImage";

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

const Certificate = () => {

  const storeId = useGetStoreIdState();

  // get screen width:
  const { width } = useWindowSize();

  const { t } = useTranslation();

  const { isLoaded } = useSetLoaded();

  const { isLoading, data } = useGetApi(`factories-api`, `company_id=${storeId}&field=certificate`, 'get_certificate');
  const { factories: certificates } = data || [];

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
            <SwiperSlide key={`certificates_image_${index}`}>
              <ShowResponsiveImage imagePath={ image } imageFolder='profiles' width={width} height={width < 768 ? 233 : 433} object_id={index + 1}  object_type={`certificates_img_${processKey}`}/>
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
            Object.entries(certificates.certificate_center.certification.fields).map(([key, certification], index) => {
              return (
                <SwiperSlide key={`swiper_process_${index}`}>
                  <Row className="manufacturing--info__content">
                    <Col span={24} className="manufacturing--images">
                      <ImagesSwiper images={certification.certificate_photos} processKey={index + 1} />
                    </Col>

                    <Col span={24} className="mt-4 manufacturing--info__certificate">
                      <Row>
                        <Col span={24} className="vv-font-size-2 font-weight-bold text-47 manufacturing--info__title py-4">
                          { t(__('Certification')) }
                        </Col>

                        <Col span={24} className="manufacturing--info__processName px-0">
                          <Row>
                            <Col span={24} className="py-4 manufacturing--info__processNameContent">
                              <Row gutter={[0, 15]}>
                                {Object.entries(certification).map(([certificateKey, certificateItem], index) => {
                                  if (certificateKey !== 'certificate_photos') {
                                    return (
                                      <Col key={`certificate_${certificateKey}_${index}`} span={24}>
                                        <Row>
                                          <Col span={12} className="vv-font-size-1-4 text-92">
                                            { t(__(certificateKey)) }
                                          </Col>

                                          <Col span={12} className="vv-font-size-1-4 text-47">
                                            { certificateItem || '---' }
                                          </Col>
                                        </Row>
                                      </Col>
                                    )
                                  }
                                })}
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>

                    <Col span={24} className="mt-5 manufacturing--info__honorAndAwardCertifications">
                      <Row gutter={[0, 20]}>
                        <Col span={24} className="vv-font-size-2 font-weight-bold text-47 manufacturing--info__title">
                          { t(__('honor_and_award_certifications')) }
                        </Col>

                        <Col span={24} className="manufacturing--info__processName px-0">
                          <Row gutter={[0, 30]}>
                            {Object.entries(certificates.certificate_center.honor_and_award_certifications.fields).map(([honorKey, honorItem], index) => {
                              return (
                                <Col key={`honor_and_award_certifications_${honorKey}_${index}`} span={24} className="py-4 manufacturing--info__processNameContent">
                                  <Row gutter={[0, 15]}>
                                    <Col span={24} className="manufacturing--images">
                                      <ImagesSwiper images={honorItem.certificate_photos} processKey={index + 1} />
                                    </Col>

                                    <Col span={24}>
                                      <Row>
                                        <Col span={12} className="vv-font-size-1-4 text-92">
                                          { t(__('certification name')) }
                                        </Col>

                                        <Col span={12} className="vv-font-size-1-4 text-47">
                                          { honorItem.certificate_name || '---' }
                                        </Col>
                                      </Row>
                                    </Col>

                                    <Col span={24}>
                                      <Row>
                                        <Col span={12} className="vv-font-size-1-4 text-92">
                                          { t(__('issued_by')) }
                                        </Col>

                                        <Col span={12} className="vv-font-size-1-4 text-47">
                                          { honorItem.issued_by || '---' }
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

                    <Col span={24} className="mt-5 manufacturing--info__patents">
                      <Row gutter={[0, 20]}>
                        <Col span={24} className="vv-font-size-2 font-weight-bold text-47 manufacturing--info__title">
                          { t(__('patents')) }
                        </Col>

                        <Col span={24} className="manufacturing--info__processName px-0">
                          <Row gutter={[0, 30]}>
                            {Object.entries(certificates.certificate_center.patents.fields).map(([patentsKey, patentsItem], index) => {
                              return (
                                <Col key={`patents_${patentsKey}_${index}`} span={24} className="py-4 manufacturing--info__processNameContent">
                                  <Row gutter={[0, 15]}>
                                    <Col span={24} className="manufacturing--images">
                                      <ImagesSwiper images={patentsItem.patent_photos} processKey={index + 1} />
                                    </Col>

                                    <Col span={24}>
                                      <Row>
                                        <Col span={12} className="vv-font-size-1-4 text-92">
                                          { t(__('patent_name')) }
                                        </Col>

                                        <Col span={12} className="vv-font-size-1-4 text-47">
                                          { patentsItem.patent_name || '---' }
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

export { Certificate };