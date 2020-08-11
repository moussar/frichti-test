import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SearchBar from './search-bar';

/**
 * Smoke tests
 */
describe('SearchBar', () => {
  it('renders without crashing (reactDOM)', () => {
    const div = document.createElement('div');
    const mockOnSearchFn = jest.fn();
    ReactDOM.render(<SearchBar onSearch={mockOnSearchFn} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing (enzyme)', () => {
    const mockOnSearchFn = jest.fn();
    shallow(<SearchBar onSearch={mockOnSearchFn} />);
  });
});
