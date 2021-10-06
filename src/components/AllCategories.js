// import style file:
import './styles/AllCategories.less';
import { useGetApi } from "../functions";
import { Col, Row } from "antd";
import { useGetStoreState } from "../contexts/store/StoreContext";

const AllCategories = () => {

  const { id: storeId } = useGetStoreState();

  const { isLoading, data } = useGetApi(`store-categories-api`, `store_id=${storeId}`, 'categories');
  const { categories } = data || [];

  return (
    <Row className="allCategories--container">
      {isLoading ?
        <Col span={24} className="allCategories--loading">Loading...</Col> :
        <>
          {categories.map((category) => {
            return(
              <Col span={24} className="allCategories--item" style={{ paddingLeft: `${category?.level - 2}rem` }} key={ category?.category_id }>
                <a href={ `https://alaedeen.com/categories/${category?.seo_name}/?store_id=${storeId}` } className={ `text-47 font-weight-600 d-block w-100 h-100 ${category?.p_count === 0 && 'categoryLink--disable'}` }>{ category?.category }</a>
              </Col>
            )
          })}
        </>
      }
    </Row>
  );
};

export { AllCategories };
