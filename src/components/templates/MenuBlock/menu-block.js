import React from 'react';
import PropTypes from 'prop-types';

import MenuGrid from '../../organisms/MenuGrid/menu-grid';

import Styled from './menu-block.styled';

const MenuBlock = ({
  blockId,
  className,
  products,
  title,
}) => (
  <Styled
    className={className}
    id={blockId}
  >
    <Styled.title>
      {title}
    </Styled.title>
    <Styled.quantity>
      {`${products.length} produits`}
    </Styled.quantity>
    <MenuGrid products={products} />
  </Styled>
);

MenuBlock.propTypes = {
  blockId: PropTypes.string,
  className: PropTypes.string,
  products: PropTypes.array,
  title: PropTypes.string,
};

MenuBlock.defaultProps = {
  blockId: 'block',
  className: undefined,
  products: [],
  title: null,
};

export default MenuBlock;
