import React, { Component } from "react";
import { Col, Row }         from "react-bootstrap";
import axios                from "axios";
import LoaderSpinner        from "../../layouts/blocks/LoaderSpinner";


const ProductGrid = ({ product, favoriteOnClick, favoriteActive }) => {
  const productPrice = new Number(product.price).toPrecision(4);

  return (
    <Col className = "m-0 p-0 px-5 my-3 ProductsGridHome__container--item" xs = { 6 }>
      <Row className = "m-0 p-0 h-100 ProductsGridHome__item--container justify-content-center">
        <Col className = "m-0 p-0 ProductsGridHome__item--imgContainer" xs = { 12 }>
          <div className = "itemBorderTopRight" />
          <div className = "itemBorderTopLeft" />
          <div className = "itemBorderBottomRight" />
          <div className = "itemBorderBottomLeft" />
          <div
            className = "itemFavoriteIcon"
            onClick={favoriteOnClick}>
            <i className={`fal fa-heart text-f2 vv-font-size-2-5 ${favoriteActive}`}></i>
          </div>
          <Row className = "m-0 p-0 h-100 align-items-center">
            <Col className = "m-0 p-0 text-center" xs = { 12 }>
              <img
                src = { product.main_pair && product.main_pair.detailed.image_path }
                alt = { product.product }
              />
            </Col>
          </Row>
        </Col>
        <Col className = "m-0 p-0 ProductsGridHome__item--infoContainer my-2 pt-1" xs = { 12 }>
          <Row className = "m-0 p-0">
            <Col className = "m-0 p-0 vv-font-size-1-4 text-47 text-center" xs = { 12 }>{ product.product }</Col>
            { productPrice != 0.000 &&
              <Col
                className = "m-0 p-0 vv-font-size-1-6 font-weight-bold text-primary text-center" xs = { 12 }
              >{ productPrice }</Col>
            }
          </Row>
        </Col>
      </Row>
    </Col>
  );
};



const LazyLoadItem = () => {
  return (
    <Col className = "m-0 p-0 px-5 my-3 ProductsGridHome__container--item" xs = { 6 }>
      <Row className = "m-0 p-0 h-100 ProductsGridHome__item--container justify-content-center">
        <Col className = "m-0 p-0 ProductsGridHome__item--imgContainer" xs = { 12 }>
          <Row className = "m-0 p-0 h-100 align-items-center">
            <Col className = "m-0 p-0 text-center w-100 h-100" xs = { 12 }>
              <div className="lazy-load for-img" />
            </Col>
          </Row>
        </Col>
        <Col className = "m-0 p-0 ProductsGridHome__item--infoContainer my-2 pt-1" xs = { 12 }>
          <Row className = "m-0 p-0">
            <Col className = "m-0 p-0 vv-font-size-1-4 text-47 text-center productName" xs = { 12 }><div className="lazy-load for-productName" /></Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

const ProductsLazyLoad = () => {
  return (
    <>
      <Col className = "m-0 p-0 vv-font-size-1-8 font-weight-bold text-center my-2 text-capitalize boxTitle" xs = { 12 }>
        <div className="lazy-load for-boxTitle" />
      </Col>
      <Col className = "m-0 p-0" xs = { 12 }>
        <Row className = "m-0 p-0 ProductsGridHome__container">

         <LazyLoadItem />
         <LazyLoadItem />
         <LazyLoadItem />
         <LazyLoadItem />

        </Row>
      </Col>
    </>
  );
};

class ProductsGridHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: [""],
      error: null,
      isLoaded: false,
      products: [],
      search: []
    };
  }

  componentDidMount () {

    const lang_code = this.props.lang;

    const url = `https://hornb2b.com/products-api/?items_per_page=4&company_id=181&lang_code=${lang_code}`;

    axios.get (url).then ((res) => {
      this.setState ({
        isLoaded: true,
        products: res.data.products,
        search: res.data.params,
      });
    }).catch ((error) => {
      this.setState ({
        isLoaded: true,
        error,
      });
    });


  }

  changeActiveHandle = (id) => {
    const arr = this.state.isFavorite.filter ((item) => item !== id);
    const favorites = this.state.isFavorite.indexOf (id) > 0 ? arr : [...this.state.isFavorite, id];
    this.setState ({
      isFavorite: favorites,
    });
  };

  checkActive = (id) => {
    return this.state.isFavorite.indexOf (id) > 0 ? "font-weight-bold" : "";
  };

  render() {
    const { error, isLoaded, products } = this.state;

      return (
        <Row className = "m-0 p-0">
          <Col className = "m-0 p-0" xs = { 12 }>
            <Row className = "m-0 p-0">
              {!isLoaded ?
                <ProductsLazyLoad /> :






                <>



                  <Col className = "m-0 p-0 vv-font-size-1-8 font-weight-bold text-center my-2 text-capitalize" xs = { 12 }>
                    { this.props.gridName }
                  </Col>
                  <Col className = "m-0 p-0" xs = { 12 }>
                    <Row className = "m-0 p-0 ProductsGridHome__container">

                      {products.map(product => {
                        return (
                          <ProductGrid
                            key = { product.product_id }
                            product = { product }
                            favoriteOnClick = { () => { this.changeActiveHandle (product.product_id); } }
                            favoriteActive = { this.checkActive (product.product_id) }
                          />
                        );
                      })}

                    </Row>
                  </Col>



                </>




              }

            </Row>
          </Col>
        </Row>
      );
  }
}

export default ProductsGridHome;