import styled from 'styled-components';

import SIZES from '../../../styles/constants/sizes';
import typography from '../../../styles/utils/typography';
import COLORS from '../../../styles/constants/colors';
import breakpoint from '../../../styles/utils/breakpoint';

const Styled = styled.section`
  margin: 0 auto;
  max-width: ${SIZES.page};
  width: 100%;
`;

const ANCHOR_TO_TOP = '9rem';

Styled.title = styled.h2`
  ${typography({ fontWeight: 'bold', fontSize: '2.4rem' })};
  margin-bottom: 0.8rem;
  color: ${COLORS.dark};
  text-align: center;

  &::before,
  &:target::before {
    background: none;
    content: '';
    display: block;
    height: ${ANCHOR_TO_TOP};
    margin: calc(${ANCHOR_TO_TOP} * -1) 0 0;
  }

  ${breakpoint.medium`
    text-align: left;
`}
`;

Styled.quantity = styled.p`
  ${typography({ fontWeight: 'bold', fontSize: '1.3rem' })};
  color: ${COLORS.grey};
  margin-bottom: 1.6rem;
  text-align: center;

  ${breakpoint.medium`
  text-align: left;
`}
`;

export default Styled;
