import styled from 'styled-components';

import breakpoint from '../../../styles/utils/breakpoint';

import MenuBlock from '../../templates/MenuBlock/menu-block';

const Styled = styled.main`
  background-color: #fafafa;
  display: block;
  padding: 8.8rem 0;
  width: 100%;

  ${breakpoint.medium`
    padding: 7.2rem 0;
  `}
`;

Styled.block = styled(MenuBlock)`
  margin-bottom: 7.2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default Styled;
