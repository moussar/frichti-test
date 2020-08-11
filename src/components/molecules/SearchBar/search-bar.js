import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Styled from './search-bar.styled';

/**
 * SearchBar component
 *
 * USER STORY 1 - Search products by name
 * @todo: a search bar component
 */
const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <Styled.searchContainer>
      <Styled.inputWrapper>
        <Styled.inputContainer>
          <Styled.inputIcon>
            <svg
              viewBox="0 0 24 24"
              aria-label="search"
              className="sc-1vibh9j-0 kTCeOa"
              height="24"
              width="24"
            >
              <path d="M15.721 14.235h-.783l-.277-.268a6.413 6.413 0 001.556-4.192 6.442 6.442 0 10-6.442 6.442 6.413 6.413 0 004.192-1.556l.268.277v.783l4.955 4.946 1.477-1.477-4.946-4.955zm-5.946 0a4.454 4.454 0 01-4.46-4.46 4.454 4.454 0 014.46-4.46 4.454 4.454 0 014.46 4.46 4.454 4.454 0 01-4.46 4.46z" />
            </svg>
          </Styled.inputIcon>
          <Styled.inputText
            type="text"
            placeholder="Rechercher un produit…"
            maxlength="50"
            value={searchText}
            onChange={handleChange}
          />
        </Styled.inputContainer>
      </Styled.inputWrapper>
    </Styled.searchContainer>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};


export default SearchBar;
