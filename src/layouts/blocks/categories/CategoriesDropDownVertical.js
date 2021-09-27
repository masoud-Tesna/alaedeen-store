import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

// import helper functions:
import { __ } from "../../../functions/Helper";

import { useTranslation } from "react-i18next";

// import custom hooks:
import { useGetApi } from "../../../functions";
import { useGetStoreState } from "../../../contexts/store/StoreContext";
import { useState } from "react";

const CategoriesContent = () => {
  const { id: storeId } = useGetStoreState();

  const { isLoading, data } = useGetApi(`store-categories-api`, `store_id=${storeId}`, 'categories');
  const { categories } = data || [];

  return(
    <Menu
      style={{ minWidth: 250 }}
      triggerSubMenuAction={"click"}
    >
      {isLoading ?
        <>Loading...</> :
        <>
          {categories.map((category) => {
            return(
              <Menu.Item key={ `CategoriesDropDownVertical_${category?.category_id}` }>
                <a href={ `https://alaedeen.com/categories/${category?.seo_name}` }>{ category?.category }</a>
              </Menu.Item>
            )
          })}
        </>
      }
    </Menu>
  );
};

const CategoriesDropDownVertical = ({ userClass }) => {

  const [isCategoryVisible, setIsCategoryVisible] = useState(false);

  const { t } = useTranslation();

  return (
    <Dropdown className={ userClass } overlay={CategoriesContent()} trigger={['click']} arrow={true} onVisibleChange={e => setIsCategoryVisible(e)}>
      <span className="vv-cursor-pointer" onClick={e => e.preventDefault()}>
        <i className="fal fa-list-ul mr-3 vv-font-size-2" />
        <span className="topPanel--item__text">{t(__('Categories'))}</span>
        <DownOutlined className="ml-3 align-middle"  rotate={ isCategoryVisible ? 180 : 0 } />
      </span>
    </Dropdown>
  );
};

export { CategoriesDropDownVertical };

