import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../atoms/Icon/icon';

import menuContent from '../../../constants/mocks/menu.json';

import Styled from './header.styled';

const Header = ({ className, firstName }) => {
  const [index, setIndex] = useState(0);
  const handleClicked = useCallback(() => setIndex((index + 1) % firstName.length),
    [index, setIndex, firstName]);
  const slugs = Object.keys(menuContent);

  return (
    <Styled className={className}>
      <Styled.logo>
        <Icon
          icon="frichti-text"
          width={100}
        />
      </Styled.logo>
      <Styled.catgories>
        {slugs.map((slug) => (
          <Styled.category key={slug}>
            <Styled.link href={`#${slug}`}>
              {menuContent[slug].label}
            </Styled.link>
          </Styled.category>
        ))}
      </Styled.catgories>
      <Styled.firstName
        type="button"
        onClick={handleClicked}
        title="Hello you!"
      >
        {firstName[index]}
      </Styled.firstName>
    </Styled>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  firstName: PropTypes.array,
};

Header.defaultProps = {
  className: undefined,
  firstName: [
    'Jane Doe',
    'John Doe',
  ],
};

export default Header;
