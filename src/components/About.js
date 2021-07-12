// import style file:
import './styles/About.less';

// import And Design Components used:
import { Col, Row } from "antd";

import { useTranslation } from "react-i18next";
import { __, useSetLoaded } from "../functions/Helper";
import ShowVideoEmbed from "../layouts/blocks/static_templates/ShowVideoEmbed";

// import certificate images:
import certificate1 from '../assets/images/certificate1.png';
import certificate2 from '../assets/images/certificate2.png';
import certificate3 from '../assets/images/certificate3.png';
import certificate4 from '../assets/images/certificate4.png';
import { useEffect, useState } from "react";
import LoadSpinner from "../layouts/blocks/static_templates/LoadSpinner";
import { useGetStoreIdState } from "../contexts/store/StoreContext";
import { useGetApi, useWindowSize } from "../functions";
import { Link } from "react-router-dom";
import ShowResponsiveImage from "../layouts/common/ShowResponsiveImage";


const About = () => {
  const storeId = useGetStoreIdState();

  // get screen width:
  const { width } = useWindowSize();

  const { t } = useTranslation();

  const { isLoaded } = useSetLoaded();

  const { isLoading, data } = useGetApi(`factories-api`, `company_id=${storeId}`, 'about_store');
  const { factories: aboutStores } = data || [];


  useEffect(() => {
    document.getElementById('HornStoreApp').scrollIntoView()
  }, []);

  if (isLoaded) {
    return <LoadSpinner spinner={'default'} spinnerColor={'#2e8339'} />
  }

  return (
    <Row className="mt-4 about--container">
      <Col span={24} className="about--aboutUs__section">
        <Row>
          <Col span={24} className="vv-font-size-1-8 font-weight-bold text-47 about--title">
            { t(__('about us')) }
          </Col>
          <Col span={24} className="mt-3 about--videosSection">
            <div className="about--videos">
              {isLoading ?
                <>Loading...</> :
                aboutStores.embed_video &&
                  aboutStores.embed_video.map((embedVideo) => {
                    return (
                      <div key={`video_embed_${embedVideo.link_id}`} className="about--video">
                        <ShowVideoEmbed embedLink={embedVideo.link} extraClassName={'aboutPage'} embedClassName = "rounded-10" />
                      </div>
                    );
                  })
              }
            </div>
          </Col>
          <Col className="mt-3 text-70 about--aboutUs__description" span={24}>
            {isLoading ?
              <>Loading...</> :
              aboutStores.company_introduction.fields.detailed_company_introduction && aboutStores.company_introduction.fields.detailed_company_introduction
            }
          </Col>
        </Row>
      </Col>

      <Col span={24} className="mt-5 about--componentOverview__section">
        <Row>
          <Col span={24} className="vv-font-size-1-8 font-weight-bold text-47 about--title">
            { t(__('Component Overview')) }
          </Col>
          <Col span={24} className="mt-3 about--componentOverview__tableSection">
            <Row className="row-cols-2 row-cols-md-4 " gutter={[16, 30]}>
              {isLoading ?
                <>Loading...</> :
                aboutStores.general.business_type &&
                  <>
                    <Col className = "vv-font-size-1-2rem text-92" >{ t(__('Business Type')) }</Col>
                    <Col className = "vv-font-size-1-2rem text-47" >{ aboutStores.general.business_type }</Col>
                  </>
              }

              {isLoading ?
                <>Loading...</> :
                aboutStores.basic_company_details.fields.year_company_registered &&
                <>
                  <Col className = "vv-font-size-1-2rem text-92" >{ t(__('Year Established')) }</Col>
                  <Col className = "vv-font-size-1-2rem text-47" >{ aboutStores.basic_company_details.fields.year_company_registered }</Col>
                </>
              }

              {isLoading ?
                <>Loading...</> :
                aboutStores.basic_company_details.fields.total_no_employees &&
                <>
                  <Col className = "vv-font-size-1-2rem text-92" >{ t(__('Total Employees')) }</Col>
                  <Col className = "vv-font-size-1-2rem text-47" >{ aboutStores.basic_company_details.fields.total_no_employees }</Col>
                </>
              }

              {isLoading ?
                <>Loading...</> :
                aboutStores.basic_company_details.fields.main_category &&
                <>
                  <Col className = "vv-font-size-1-2rem text-92" >{ t(__('Main category')) }</Col>
                  <Col className = "vv-font-size-1-2rem text-47" >{ aboutStores.basic_company_details.fields.main_category }</Col>
                </>
              }

              {isLoading ?
                <>Loading...</> :
                (aboutStores.general.country || aboutStores.general.state) &&
                <>
                  <Col className = "vv-font-size-1-2rem text-92" >{ t(__('Country / Region')) }</Col>
                  <Col className = "vv-font-size-1-2rem text-47" >
                    { aboutStores.general.country && `${aboutStores.general.country}, ` } { aboutStores.general.state && aboutStores.general.state }
                  </Col>
                </>
              }

              {isLoading ?
                <>Loading...</> :
                aboutStores.export_capability.fields.main_markets_and_distribution &&
                <>
                  <Col className = "vv-font-size-1-2rem text-92" >{ t(__('Main Markets')) }</Col>
                  <Col className = "vv-font-size-1-2rem text-47" >
                    {aboutStores.export_capability.fields.main_markets_and_distribution.map((market, index) => {
                      return (
                        <span key={`main_market_${index}`} className="d-block vv-font-size-1-2rem text-47">
                          { `${market.country} ${market.percent}%` }
                        </span>
                      );
                    })}
                  </Col>
                </>
              }


            </Row>
          </Col>
        </Row>
      </Col>

      <Col span={24} className="mt-5 about--manufacturingCapability__section">
        <Row>
          <Col span={24} className="vv-font-size-1-8 font-weight-bold text-47 about--title">
            { t(__('Manufacturing Capability')) }
          </Col>
          <Col span={24} className="mt-3 about--videosSection">
            <div className="about--videos">

              {isLoading ?
                <>Loading...</> :
                Object.entries(aboutStores.manufacturing_capability.parents.process.fields).map(([key, process], index) => {
                    return (
                    <div key={`manufacturing_capability_process_${index}`} className="about--video">
                      <Link to={`/manufacturing/?slide=${key}`}>
                        <div className="rounded-10 about--imageBg" style={{ backgroundImage: `url(${process.process_pictures[0]})` }} />
                        <div className="text-white ml-4 mb-4 vv-font-size-1-8 font-weight-600 about--imageBg__title">
                          { process.process_name || '' }
                        </div>
                      </Link>
                    </div>
                    );
                  })
              }

            </div>
          </Col>
        </Row>
      </Col>

      <Col span={24} className="mt-5 about--certificates__section">
        <Row>
          <Col span={24} className="vv-font-size-1-8 font-weight-bold text-47 about--title">
            { t(__('Certificate')) }
          </Col>
          <Col span={24} className="mt-3 about--imagesSection">
            <div className="about--images">

              {isLoading ?
                <>Loading...</> :
                Object.entries(aboutStores.certificate_center.parents.certification.fields).map(([key, certificate], index) => {
                  return (
                    <div key={`manufacturing_capability_process_${index}`} className="about--image">
                      <Link to={`/certificate/?slide=${key}`}>
                        <Row>
                          <Col className = "about--imageBackground" span={24}>
                            <ShowResponsiveImage imagePath={ certificate.certificate_photos[0] } imageFolder='profiles' width={width < 768 ? 140 : 400} height={width < 768 ? 110 : 240} object_id={index + 1}  object_type={`certificate_img_${key}`}/>
                          </Col>
                          <Col className = "m-0 p-0 vv-font-size-1-6 text-center text-47 mt-3" xs={24}>{ certificate.certificate_name }</Col>
                        </Row>
                      </Link>
                    </div>
                  );
                })
              }

            </div>
          </Col>
        </Row>
      </Col>

      <Col span={24} className="mt-5 about--another__section">
        <Row gutter={[0, 32]}>
          <Col className="cursor-pointer about--another__item about--rAndD__container" span={24}>
            <div className="about--another__bgImage" />
            <Row className="about--rAndD__content h-100" justify={"space-between"}>
              <Col className="pl-4 my-auto">
                <Row>
                  <Col className="mb-3 vv-font-size-1-8 text-white about--another__title" span={24}>
                    { t(__('R&D Capability')) }
                  </Col>
                  <Col className="vv-font-size-1-4 text-white about--another__viewMore" span={24}>
                    { t(__('View More R&D Capability')) }
                  </Col>
                </Row>
              </Col>
              <Col className="my-auto pr-4 about--another__icon">
                <i className="fa fa-chevron-right vv-font-size-2 text-white" />
              </Col>
            </Row>
          </Col>

          <Col className="cursor-pointer about--another__item about--qualityControl__container" span={24}>
            <div className="about--another__bgImage" />
            <Row className="about--qualityControl__content h-100" justify={"space-between"}>
              <Col className="pl-4 my-auto">
                <Row>
                  <Col className="mb-3 vv-font-size-1-8 text-white about--another__title" span={24}>
                    { t(__('Quality Control')) }
                  </Col>
                  <Col className="vv-font-size-1-4 text-white about--another__viewMore" span={24}>
                    { t(__('View More Quality Control')) }
                  </Col>
                </Row>
              </Col>
              <Col className="my-auto pr-4 about--another__icon">
                <i className="fa fa-chevron-right vv-font-size-2 text-white" />
              </Col>
            </Row>
          </Col>

          <Col className="cursor-pointer about--another__item about--exportCapability__container" span={24}>
            <div className="about--another__bgImage" />
            <Row className="about--exportCapability__content h-100" justify={"space-between"}>
              <Col className="pl-4 my-auto">
                <Row>
                  <Col className="mb-3 vv-font-size-1-8 text-white about--another__title" span={24}>
                    { t(__('Export Capability')) }
                  </Col>
                  <Col className="vv-font-size-1-4 text-white about--another__viewMore" span={24}>
                    { t(__('View More Export Capability')) }
                  </Col>
                </Row>
              </Col>
              <Col className="my-auto pr-4 about--another__icon">
                <i className="fa fa-chevron-right vv-font-size-2 text-white" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export { About };
