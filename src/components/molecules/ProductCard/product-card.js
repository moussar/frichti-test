import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../atoms/Card/card';

import Styled from './product-card.styled';

/**
 * ProductCard component
 *
 * USER STORY 2 - Make menu mobile-first
 * @todo: make it fully adaptive/responsive
 */
const ProductCard = ({
  className,
  imageUrl,
  price,
  title,
  unit,
}) => {
  const finalPrice = (price / 100).toFixed(2).toString().replace('.', ',');
  return (
    <Card className={className}>
      <figure>
        <Styled.thumbnailContainer>
          <Styled.thumbnail
            src={imageUrl}
            alt={title}
          />
        </Styled.thumbnailContainer>
        <Styled.support>
          <Styled.title>{title}</Styled.title>
          {!!unit && <Styled.unit>{unit}</Styled.unit>}
          <Styled.price>{`${finalPrice}€`}</Styled.price>
        </Styled.support>
      </figure>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  unit: PropTypes.string,
};

ProductCard.defaultProps = {
  className: undefined,
  unit: null,
};

export default ProductCard;
