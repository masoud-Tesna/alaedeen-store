// import Custom Hooks:
import { useWindowSize } from "../../../functions";

// import style file:
import './styles/ProductsMultiColumnVertical.less';

// import Ant Design Components:
import { Col, Row, Skeleton } from "antd";

// import store icon:
import store_1 from '../../../assets/images/store-icon/1.png';

// import get image responsive from server and show:
import ShowResponsiveImage from "../../common/ShowResponsiveImage";


const ProductsMultiColumnVertical = (props) => {

  // get screen width:
  const { width } = useWindowSize();

  // check show all details:
  const { allDetails } = props;

  // check product show swiper:
  const { swiper } = props;

  // check load:
  const { load } = props;

  // get width and height product image:
  const { widthProductImage, heightProductImage } = props;

  let paragraph_rows = { rows: 2 };
  if (width <= 991) {
    paragraph_rows = { rows: 1 };
  }

  // product data:
  const { product } = props;
  
  const detailIcon = props.detailIcon || 'default';

  const productPrice = parseFloat(product.price).toFixed(2);
  const productListPrice = parseFloat(product.list_price).toFixed(2);

  const manufacturing_country = product.manufacturing_country;

  // show skeleton if swiper is true
  if (swiper && load) {
    return (
      <Col className={ `productsMultiColumnVertical--item` } {...props.grid} span={24}>
        <Row className={ `h-100 ${props.className}` } justify="center">
          <Col span={24} className="d-flex align-items-center justify-content-center productsMultiColumnVertical--item__image">
            <Skeleton.Image active={true} className="w-100 h-100 border-bottom border-w-05 rounded-top-10" />
          </Col>
          <Col span={24} className="px-4 text-47 vv-font-size-1-8 text-truncate mb-3 productsMultiColumnVertical--item__title">
            <Skeleton active={true} paragraph={ paragraph_rows } />
          </Col>
        </Row>
      </Col>
    );
  }

  return (
    <Col className={ `productsMultiColumnVertical--item` }  xs={12} lg={5} xl={6}>
      <a className="d-block h-100" href={ product.link }>
        <Row className={ `h-100 pb-3 pb-lg-0 ${props.className}` } justify="center">
          <Col className="align-self-start" span={24}>
            <Row>
              <Col span={24} className="d-flex align-items-center justify-content-center productsMultiColumnVertical--item__image">
                <ShowResponsiveImage imagePath={ product.main_pair.detailed.image_path } imageFolder='detailed' width={widthProductImage || 150} height={heightProductImage || 150} imageAlt={ product.product }/>
                <div className = "productsMultiColumnVertical--item__borderTopRight" />
                <div className = "productsMultiColumnVertical--item__borderTopLeft" />
                <div className = "productsMultiColumnVertical--item__borderBottomRight" />
                <div className = "productsMultiColumnVertical--item__borderBottomLeft" />
              </Col>

              <Col span={24} className={ `${ !allDetails && 'd-none d-lg-block' } text-47 vv-font-size-1-8 mt-3 text-center text-truncate productsMultiColumnVertical--item__title` }>
                { product.product }
              </Col>
            </Row>
          </Col>

          {productPrice != 0.000 &&
            <Col span={24} className="text-center productsMultiColumnVertical--item__price">
              <span className={ `${ width >= 992 ? 'vv-font-size-1-9' : 'vv-font-size-1-5' } text-primary font-weight-bold` }>${ productPrice } </span>
              { productListPrice != 0.00 &&
              <span className={ `${ width >= 992 ? 'vv-font-size-1-9' : 'vv-font-size-1-5' } text-primary font-weight-bold` }> - ${productListPrice}</span>
              }
              {product.quantity_unit &&
                <span className={ `${ !allDetails && 'd-none d-lg-inline' } vv-font-size-1-6 text-92` }> / { product.quantity_unit }</span>
              }
            </Col>
          }

        </Row>
      </a>
    </Col>
  );
};

export default ProductsMultiColumnVertical;