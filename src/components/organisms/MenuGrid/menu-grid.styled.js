import styled from 'styled-components';

import SIZES from '../../../styles/constants/sizes';
import breakpoint from '../../../styles/utils/breakpoint';


const Styled = styled.article`
  width: 100%;
`;

Styled.container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  margin: -${SIZES.gutter};

  > * {
    flex: 0 0 calc(50% - ${SIZES.gutter} - ${SIZES.gutter});
    margin: ${SIZES.gutter} auto;

    ${breakpoint.medium`
    flex: 0 0 calc(25% - ${SIZES.gutter} - ${SIZES.gutter});
    margin: ${SIZES.gutter}; 
  `}
  }
`;

export default Styled;
