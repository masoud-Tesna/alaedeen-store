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
import { fn_stripHtml } from "../../../functions/Helper";
import TextTruncate from "react-text-truncate";


const ProductsMultiColumnVertical = (props) => {

  // get screen width:
  const { width } = useWindowSize();

  // check show all details:
  const { productsPage } = props;

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

  const desc = product.short_description ? product.short_description : product.full_description;
  const productDesc = desc? fn_stripHtml(desc) : '';

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
      <Row className={ `h-100 pb-3 ${props.className}` } justify="center">
        <Col className="align-self-start" span={24}>
          <Row>
            <Col span={24} className="d-flex align-items-center justify-content-center productsMultiColumnVertical--item__image">
              <div className = "cursor-pointer itemFavoriteIcon" onClick={() => {console.log('click')}}>
                <i className={`fal fa-heart text-f2 vv-font-size-2-5 `} />
              </div>
              <a href={ product.link }>
                <ShowResponsiveImage imagePath={ product.main_pair.detailed.image_path } imageFolder='detailed' width={widthProductImage || 150} height={heightProductImage || 150} imageAlt={ product.product } object_id={product.product_id}  object_type={'prd'}/>
              </a>
              <div className = "productsMultiColumnVertical--item__borderTopRight" />
              <div className = "productsMultiColumnVertical--item__borderTopLeft" />
              <div className = "productsMultiColumnVertical--item__borderBottomRight" />
              <div className = "productsMultiColumnVertical--item__borderBottomLeft" />
            </Col>

            <a className="ant-row ant-col w-100" href={ product.link }>
              <Col span={24} className={ `text-47 vv-font-size-1-8 mt-3 ${!productsPage && 'text-center'} text-truncate productsMultiColumnVertical--item__title` }>
                { product.product }
              </Col>
            </a>
          </Row>
        </Col>

        <Col span={24} className="align-self-end">
          <Row>
            {productsPage &&
            <Col span={24} className="mt-2 productsMultiColumnVertical--item__desceription">
              <a href={ product.link }>
                <TextTruncate
                  className = "vv-font-size-1-6 text-47 d-inline-block"
                  line={2}
                  element="div"
                  truncateText="…"
                  text= { productDesc }
                />
              </a>
            </Col>
            }

            {productPrice != 0.000 &&
            <Col span={24} className={ `mt-2 ${!productsPage && 'text-center'} productsMultiColumnVertical--item__price` }>
              <span className={ `${ width >= 992 ? 'vv-font-size-1-9' : 'vv-font-size-1-5' } text-primary font-weight-bold` }>${ productPrice } </span>
              { productListPrice != 0.00 &&
              <span className={ `${ width >= 992 ? 'vv-font-size-1-9' : 'vv-font-size-1-5' } text-primary font-weight-bold` }> - ${productListPrice}</span>
              }
              {product.quantity_unit &&
              <span className={ `${ !productsPage && 'd-none' } vv-font-size-1-6 text-92` }> / { product.quantity_unit }</span>
              }
            </Col>
            }

            {(productsPage && product.min_qty) &&
            <Col span={24} className="mt-2 productsMultiColumnVertical--item__qty">
              <span className="vv-font-size-1-6 text-47">{ product.min_qty } { product.quantity_unit }</span> <span className="vv-font-size-1-5 text-92">(MOQ)</span>
            </Col>
            }
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default ProductsMultiColumnVertical;