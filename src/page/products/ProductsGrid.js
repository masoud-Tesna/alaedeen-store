import React, { Component } from "react";
import { Col, Row }         from "react-bootstrap";
import axios                from "axios";
import TextTruncate         from 'react-text-truncate';

import { Link }                       from "react-router-dom";
import { StripHtml, Translate as __ } from "../../functions/Func";
import LoaderSpinner                  from "../../layouts/blocks/LoaderSpinner";


const ProductGrid = ({ product, favoriteOnClick, favoriteActive }) => {
  const productPrice = parseFloat(product.price).toFixed(2);
  const productListPrice = parseFloat(product.list_price).toFixed(2);

  const desc = product.short_description ? product.short_description : product.full_description;
  const productDesc = StripHtml (desc);

  return (
    <Col className = "m-0 p-0 px-3 my-3 ProductsGrid__container--item" xs = { 6 }>
      <Row className = "m-0 p-0 px-2 h-100 rounded-5 shadow-bottom-lg ProductsGrid__item--container justify-content-center">
        <Col className = "m-0 p-0 ProductsGrid__item--imgContainer" xs = { 12 }>
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
        <Col className = "m-0 p-0 ProductsGrid__item--infoContainer my-2 pt-1" xs = { 12 }>
          <Row className = "m-0 p-0">
            <Col className = "m-0 p-0 vv-font-size-1-5 font-weight-bold text-47" xs = { 12 }>{ product.product }</Col>
            <Col className = "m-0 p-0 font-weight-bold text-47" xs = { 12 }>

              <TextTruncate
                className = "vv-font-size-1-2rem d-inline-block"
                line={2}
                element="div"
                truncateText="…"
                text= { productDesc }
              />
            </Col>
            {productPrice != 0.000 &&
            <Col className = "m-0 p-0 vv-font-size-1-6 font-weight-bold text-primary" xs = { 12 }
            >
              { productPrice } - { productListPrice }
              {product.quantity_unit &&
              <span className="vv-font-size-1-3 text-92"> / { product.quantity_unit }</span>
              }
            </Col>
            }

            {(product.min_qty && product.quantity_unit) &&
            <Col className = "m-0 p-0 vv-font-size-1-2rem text-47" xs = { 12 }
            >
              { product.min_qty } { product.quantity_unit }
              {product.quantity_unit &&
              <span className="vv-font-size-1 text-92"> (MOQ)</span>
              }
            </Col>
            }
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

class ProductsGrid extends Component {
  constructor(props) {
    super(props);

    const params = new URLSearchParams(this.props.param.location.search);
    const page = params.get('page');

    this.state = {
      isFavorite: [""],
      error: null,
      isLoaded: false,
      page: parseInt(page) || 1,
      products: [],
      search: []
    };
  }

  getApi = () => {
    const page = this.state.page;

    const lang_code = this.props.param.lang;



    const url = `https://hornb2b.com/horn/products-api/?items_per_page=20&company_id=181&page=${page}&lang_code=${lang_code}`;

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

  componentDidMount () {

    this.getApi();
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

  handlePageClick = (page) => {
    console.log (this.state.page);
    this.setState({
      page: page,
      isLoaded: false
    }, () => {
      this.getApi()
    });
  };

  render() {
    const { error, isLoaded, products, search } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <LoaderSpinner />
    } else {

      const allPage = Math.ceil(search.total_items / search.items_per_page);

      const pageCount = [];
      for (let i = 1; i <= allPage; i++) {
        pageCount.push(i);
      }

      return (
        <Row className = "m-0 p-0 pb-7">
          <Col className = "m-0 p-0" xs = { 12 }>
            <Row className = "m-0 p-0">
              <Col className = "m-0 p-0" xs = { 12 }>
                <Row className = "m-0 p-0 mt-3">

                  <Col className="m-0 p-0 ProductsGrid__container" xs={12}>
                    <Row className="m-0 p-0">
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

                  <Col className="m-0 p-0 pb-4 mt-4 text-center pagination__container" xs={12}>

                    <span className="pagination__firstPage px-3">
                      {this.state.page !== 1 &&
                      <Link className="text-decoration-none pagination__firstPage--item vv-font-size-1-3 text-2d" to="/products?page=1" onClick = {() => this.handlePageClick(1)}>
                        <__ variable="First Page" prefix="store" lang={this.props.param.lang} />
                      </Link>
                      }
                    </span>

                    <span className="pagination__previous px-3">
                      {this.state.page !== 1 &&
                      <Link className="text-decoration-none pagination__previous--item" to= { `/products?page=${this.state.page - 1}`} onClick = {() => this.handlePageClick(this.state.page - 1)}>
                        <i className = "fal fa-chevron-left text-2d vv-font-size-2" />
                      </Link>
                      }
                    </span>

                    <div className="pagination__pager d-inline-block align-bottom">
                      {pageCount.map((page, index) =>
                        this.state.page === page ?
                          <div key={index} className="pagination__pager--item active vv-font-size-1-4 font-weight-bold text-47 d-inline-block px-4">
                            <div>{ page }</div>
                          </div> :
                          <Link key={index} className="text-decoration-none pagination__pager--item vv-font-size-1-4 text-70 px-4" to= { `products?page=${page}` } onClick = {() => this.handlePageClick(page)}>
                            { page }
                          </Link>
                      )}
                    </div>

                    <span className="pagination__next px-3">
                      {this.state.page !== allPage &&
                      <Link className="text-decoration-none pagination__next--item" to= { `/products?page=${this.state.page + 1}`} onClick = {() => this.handlePageClick(this.state.page + 1)}>
                        <i className = "fal fa-chevron-right text-2d vv-font-size-2"></i>
                      </Link>
                      }
                    </span>

                    <span className="pagination__lastPage px-3">
                      {this.state.page !== allPage &&
                      <Link className="text-decoration-none pagination__lastPage--item vv-font-size-1-3 text-2d" to= { `products?page=${allPage}` } onClick = {() => this.handlePageClick(allPage)}>
                        <__ variable="Last Page" prefix="store" lang={this.props.param.lang} />
                      </Link>
                      }
                    </span>


                  </Col>

                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      );
    }
  }
}

export default ProductsGrid;