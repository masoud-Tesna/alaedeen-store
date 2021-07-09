import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

// import helper functions:
import { __ } from "../../../functions/Helper";

import { useTranslation } from "react-i18next";

// import custom hooks:
import { useGetApi } from "../../../functions";
import { useGetStoreIdState } from "../../../contexts/store/StoreContext";

const CategoriesContent = () => {
  const storeId = useGetStoreIdState();

  const { isLoading, data } = useGetApi(`store-categories-api`, `store_id=${storeId}`, 'categories');
  const { categories } = data || [];


  return(
    <Menu
      style={{ minWidth: 250 }}
      mode="inline"
      triggerSubMenuAction={"click"}
    >
      {isLoading ?
        <>Loading...</> :
        <>
          {categories.map((category) => {
            return(
              <Menu.Item key={ `dropdown_${category.category_id}` }>
                <a href={ category.link }>{ category.category }</a>
              </Menu.Item>
            )
          })}
        </>
      }
    </Menu>
  );
};

const CategoriesDropDownVertical = ({ userClass }) => {

  const { t } = useTranslation();

  return (
    <Dropdown className={ userClass } overlay={CategoriesContent()} trigger={['click']}>
      <span className="vv-cursor-pointer" onClick={e => e.preventDefault()}>
        <i className="fal fa-list-ul mr-3 vv-font-size-2" />
        <span className="topPanel--item__text">{t(__('Categories'))}</span>
        <DownOutlined className="ml-3" />
      </span>
    </Dropdown>
  );
};

export { CategoriesDropDownVertical };

