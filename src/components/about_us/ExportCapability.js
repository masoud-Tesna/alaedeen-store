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
import { Col, Row, Statistic } from "antd";

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

const ExportCapability = () => {

  const storeId = useGetStoreIdState();

  // get screen width:
  const { width } = useWindowSize();

  const { t } = useTranslation();

  const { isLoaded } = useSetLoaded();

  const { isLoading, data } = useGetApi(`factories-api`, `company_id=${storeId}&field=export_capability`, 'export_capability');
  const { factories: exportCapabilities } = data || [];


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
            <SwiperSlide key={`customerCase_image_${index}`}>
              <ShowResponsiveImage imagePath={ image } imageFolder='profiles' width={width} height={width < 768 ? 233 : 433} object_id={index + 1}  object_type={`customerCase_img_${processKey}`}/>
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
    <Row className="vh-100 manufacturing--container exportCapability">
      <Col span={24}>
        <Row className="manufacturing--info__content exportCapability">
          <Col span={24} className="vv-font-size-1-8 font-weight-bold text-47 exportCapability--title shadow-bottom">
            { t(__('Export Capability')) }
          </Col>

          {isLoading ?
            <>Loading...</> :
            <>
              <Col span={24} className="mt-5 manufacturing--info__exportCapability shadow-bottom mb-4">
                <Row gutter={[0, 20]}>
                  <Col span={24} className="manufacturing--info__processName px-0">
                    <Row>
                      <Col span={24} className="py-4 manufacturing--info__processNameContent">
                        <Row gutter={[0, 15]}>
                          <Col span={24}>
                            <Row>
                              <Col span={12} className="vv-font-size-1-4 text-92">
                                { t(__('Export Percentage')) }
                              </Col>

                              <Col span={12} className="vv-font-size-1-4 text-47">
                                { exportCapabilities.export_capability.fields.export_percentage || '---' }
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>

                      <Col span={24} className="py-4 manufacturing--info__processNameContent">
                        <Row gutter={[0, 15]}>
                          <Col span={24}>
                            <Row gutter={[0, 5]}>
                              <Col span={24} className="vv-font-size-1-4 text-92">
                                { t(__('Main Markets and Distribution')) }:
                              </Col>

                              <Col span={24} className="vv-font-size-1-4 text-47">
                                <Row className="row-cols-2 row-cols-md-3 row-cols-lg-4 px-4" gutter={[10, 10]}>
                                  {Object.entries(exportCapabilities.export_capability.fields.main_markets_and_distribution).map(([key, distribution], index) => {
                                    return (
                                      <Col key={`distribution_${key}_${index}`}>
                                        { `${distribution.country} ${distribution.percent}` }
                                      </Col>
                                    )
                                  })}

                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>

                      <Col span={24} className="py-4 manufacturing--info__processNameContent">
                        <Row gutter={[0, 15]}>
                          <Col span={24}>
                            <Row>
                              <Col span={12} className="vv-font-size-1-4 text-92">
                                { t(__('Year of export')) }
                              </Col>

                              <Col span={12} className="vv-font-size-1-4 text-47">
                                { exportCapabilities.export_capability.fields.year_when_your_company_started_exporting || '---' }
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>

                      <Col span={24} className="py-4 manufacturing--info__processNameContent">
                        <Row gutter={[0, 15]}>
                          <Col span={24}>
                            <Row gutter={[0, 5]}>
                              <Col span={24} className="vv-font-size-1-4 text-92">
                                { t(__('accepted_delivery_terms')) }:
                              </Col>

                              <Col span={24} className="vv-font-size-1-4 text-47">
                                <Row className="row-cols-2 row-cols-md-3 row-cols-lg-4 px-4" gutter={[10, 10]}>
                                  {Object.entries(exportCapabilities.export_capability.fields.accepted_delivery_terms).map(([key, accepted_delivery_terms], index) => {
                                    return (
                                      <Col key={`distribution_${key}_${index}`}>
                                        { accepted_delivery_terms }
                                      </Col>
                                    )
                                  })}

                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>

                      <Col span={24} className="py-4 manufacturing--info__processNameContent">
                        <Row gutter={[0, 15]}>
                          <Col span={24}>
                            <Row>
                              <Col span={12} className="vv-font-size-1-4 text-92">
                                { t(__('Average Lead Time')) }
                              </Col>

                              <Col span={12} className="vv-font-size-1-4 text-47">
                                { exportCapabilities.export_capability.fields.average_lead_time || '---' }
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>

                      <Col span={24} className="py-4 manufacturing--info__processNameContent">
                        <Row gutter={[0, 15]}>
                          <Col span={24}>
                            <Row gutter={[0, 5]}>
                              <Col span={24} className="vv-font-size-1-4 text-92">
                                { t(__('Accepted Payment Currency')) }:
                              </Col>

                              <Col span={24} className="vv-font-size-1-4 text-47">
                                <Row className="row-cols-2 row-cols-md-3 row-cols-lg-4 px-4" gutter={[10, 10]}>
                                  {Object.entries(exportCapabilities.export_capability.fields.accepted_payment_currency).map(([key, accepted_payment_currency], index) => {
                                    return (
                                      <Col key={`distribution_${key}_${index}`}>
                                        { accepted_payment_currency }
                                      </Col>
                                    )
                                  })}

                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>

                      <Col span={24} className="py-4 manufacturing--info__processNameContent">
                        <Row gutter={[0, 15]}>
                          <Col span={24}>
                            <Row gutter={[0, 5]}>
                              <Col span={24} className="vv-font-size-1-4 text-92">
                                { t(__('Language Spoken')) }:
                              </Col>

                              <Col span={24} className="vv-font-size-1-4 text-47">
                                <Row className="row-cols-2 row-cols-md-3 row-cols-lg-4 px-4" gutter={[10, 10]}>
                                  {Object.entries(exportCapabilities.export_capability.fields.language_spoken).map(([key, language_spoken], index) => {
                                    return (
                                      <Col key={`distribution_${key}_${index}`}>
                                        { language_spoken }
                                      </Col>
                                    )
                                  })}

                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>

              <Col span={24} className="mt-2 shadow-bottom mb-4 customerCase--container">
                <Swiper pagination={{
                  "type": "fraction"
                }} navigation={false} className="manufacturing--swiper">

                  { Object.entries(exportCapabilities.export_capability.parents.project_and_customer.fields).map(([key, customersCase], index) => {
                    return (
                      <SwiperSlide key={`swiper_customerCase_${index}`}>
                        <Row className="manufacturing--info__content">
                          <Col span={24} className="manufacturing--images">
                            <ImagesSwiper images={customersCase.cooperation_photos} processKey={index + 1} />
                          </Col>

                          <Col span={24} className="mt-4 manufacturing--info__certificate">
                            <Row>
                              <Col span={24} className="vv-font-size-2 font-weight-bold text-47 manufacturing--info__title py-4">
                                { t(__('Customer case')) }
                              </Col>

                              <Col span={24} className="manufacturing--info__processName px-0">
                                <Row>
                                  <Col span={24} className="py-4 manufacturing--info__processNameContent">
                                    <Row gutter={[0, 15]}>
                                      <Col span={24}>
                                        <Row>
                                          <Col span={12} className="vv-font-size-1-4 text-92">
                                            { t(__("Project/customer name")) }
                                          </Col>

                                          <Col span={12} className="vv-font-size-1-4 text-47">
                                            { customersCase.project_and_customer_name || '---' }
                                          </Col>
                                        </Row>
                                      </Col>

                                      <Col span={24}>
                                        <Row>
                                          <Col span={12} className="vv-font-size-1-4 text-92">
                                            { t(__("Customer’s Country")) }
                                          </Col>

                                          <Col span={12} className="vv-font-size-1-4 text-47">
                                            { customersCase.customers_country_and_region || '---' }
                                          </Col>
                                        </Row>
                                      </Col>

                                      <Col span={24}>
                                        <Row>
                                          <Col span={12} className="vv-font-size-1-4 text-92">
                                            { t(__("Products You Supply To Customer")) }
                                          </Col>

                                          <Col span={12} className="vv-font-size-1-4 text-47">
                                            { customersCase.products_you_supply_to_customer || '---' }
                                          </Col>
                                        </Row>
                                      </Col>

                                      <Col span={24}>
                                        <Row>
                                          <Col span={12} className="vv-font-size-1-4 text-92">
                                            { t(__("Annual Turnover")) }
                                          </Col>

                                          <Col span={12} className="vv-font-size-1-4 text-47">
                                            <Statistic value={ customersCase.annual_turnover || '---' } suffix="$" style={{ lineHeight: "13px" }} />
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Col>

                        </Row>
                      </SwiperSlide>
                    );
                  }) }

                </Swiper>
              </Col>

              <Col span={24} className="mt-2 shadow-bottom mb-5  overseasOffice--container">
                <Swiper pagination={{
                  "type": "fraction"
                }} navigation={false} className="manufacturing--swiper">

                  { Object.entries(exportCapabilities.export_capability.parents.company_overseas_office.fields).map(([key, overseasOffice], index) => {
                    return (
                      <SwiperSlide key={`swiper_customerCase_${index}`}>
                        <Row className="manufacturing--info__content">
                          <Col span={24} className="manufacturing--images">
                            <ImagesSwiper images={overseasOffice.office_photos} processKey={index + 1} />
                          </Col>

                          <Col span={24} className="mt-4 manufacturing--info__certificate">
                            <Row>
                              <Col span={24} className="vv-font-size-2 font-weight-bold text-47 manufacturing--info__title py-4">
                                { t(__('Overseas office')) }
                              </Col>

                              <Col span={24} className="manufacturing--info__processName px-0">
                                <Row>
                                  <Col span={24} className="py-4 manufacturing--info__processNameContent">
                                    <Row gutter={[0, 15]}>
                                      <Col span={24}>
                                        <Row>
                                          <Col span={12} className="vv-font-size-1-4 text-92">
                                            { t(__("Country/Region")) }
                                          </Col>

                                          <Col span={12} className="vv-font-size-1-4 text-47">
                                            { overseasOffice.country_and_region || '---' }
                                          </Col>
                                        </Row>
                                      </Col>

                                      <Col span={24}>
                                        <Row>
                                          <Col span={12} className="vv-font-size-1-4 text-92">
                                            { t(__("Province/State/County")) }
                                          </Col>

                                          <Col span={12} className="vv-font-size-1-4 text-47">
                                            { overseasOffice.province_and_state_and_county || '---' }
                                          </Col>
                                        </Row>
                                      </Col>

                                      <Col span={24}>
                                        <Row>
                                          <Col span={12} className="vv-font-size-1-4 text-92">
                                            { t(__("City")) }
                                          </Col>

                                          <Col span={12} className="vv-font-size-1-4 text-47">
                                            { overseasOffice.city || '---' }
                                          </Col>
                                        </Row>
                                      </Col>

                                      <Col span={24}>
                                        <Row>
                                          <Col span={12} className="vv-font-size-1-4 text-92">
                                            { t(__("Street Address")) }
                                          </Col>

                                          <Col span={12} className="vv-font-size-1-4 text-47">
                                            { overseasOffice.street_address || '---' }
                                          </Col>
                                        </Row>
                                      </Col>

                                      <Col span={24}>
                                        <Row>
                                          <Col span={12} className="vv-font-size-1-4 text-92">
                                            { t(__("phone number")) }
                                          </Col>

                                          <Col span={12} className="vv-font-size-1-4 text-47">
                                            { `${overseasOffice.country_code}-${overseasOffice.phone_number}` }
                                          </Col>
                                        </Row>
                                      </Col>

                                      <Col span={24}>
                                        <Row>
                                          <Col span={12} className="vv-font-size-1-4 text-92">
                                            { t(__("Duties")) }
                                          </Col>

                                          <Col span={12} className="vv-font-size-1-4 text-47">
                                            { overseasOffice.duties || '---' }
                                          </Col>
                                        </Row>
                                      </Col>

                                      <Col span={24}>
                                        <Row>
                                          <Col span={12} className="vv-font-size-1-4 text-92">
                                            { t(__("Number of Staff")) }
                                          </Col>

                                          <Col span={12} className="vv-font-size-1-4 text-47">
                                            <Statistic value={ overseasOffice.number_of_staff || '---' } style={{ lineHeight: "13px" }} />

                                          </Col>
                                        </Row>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Col>

                        </Row>
                      </SwiperSlide>
                    );
                  }) }

                </Swiper>
              </Col>

            </>
          }
        </Row>
      </Col>
    </Row>
  );
};

export { ExportCapability };
