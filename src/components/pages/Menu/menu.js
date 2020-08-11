import React, { useState } from 'react';
import PropTypes from 'prop-types';

import menuContent from '../../../constants/mocks/menu.json';

import Styled from './menu.styled';
import SearchBar from '../../molecules/SearchBar/search-bar';

/**
 * MenuPage component
 *
 * USER STORY 1 - Search products by name
 * @todo: add search bar
 * USER STORY 3 - Filter products without some allergens
 * @todo: add filter bar
 */
const Menu = ({ className }) => {
  const menuBlocks = Object.keys(menuContent);
  const [data, setData] = useState(Object.values(menuContent));

  const onSearch = (name) => {
    const result = Object.values(menuContent).map((block) => {
      const items = block.items.filter((item) => (
        item.product.title.toLowerCase().includes(name.toLowerCase())
      ));
      return { ...block, items };
    });
    setData(result);
  };

  return (
    <>
      <SearchBar onSearch={onSearch} />
      <Styled className={className}>
        {menuBlocks.map((block, i) => {
          const { id, label } = menuContent[block];
          const { items } = data[i];
          return (
            <Styled.block
              blockId={block}
              key={id}
              title={label}
              products={items}
            />
          );
        })}
      </Styled>
    </>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
};

Menu.defaultProps = {
  className: undefined,
};

export default Menu;
