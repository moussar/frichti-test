import styled from 'styled-components';

import COLORS from '../../../styles/constants/colors';
import calcAspectRatio from '../../../styles/utils/aspect-ratio';
import typography from '../../../styles/utils/typography';

import Picture from '../../atoms/Picture/picture';

const Styled = {};

Styled.thumbnailContainer = styled.div`
  padding-top: ${calcAspectRatio({ width: 280, height: 180 })};
  position: relative;
  width: 100%;
  @media (max-width: 768px) {
    flex: 1 1 calc(33.3333% - 1.6rem);
  }
`;

Styled.thumbnail = styled(Picture)`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

Styled.support = styled.figcaption`
  display: flex;
  flex-direction: column;
  height: 14rem;
  padding: 1.6rem;
`;

Styled.title = styled.h3`
  ${typography({ fontSize: '1.8rem', fontWeight: 900 })};
  color: ${COLORS.dark};
  flex: 1;
  margin-bottom: 0.4rem;
`;

Styled.unit = styled.p`
  ${typography({ fontSize: '1.2rem', fontWeight: 500, textTransform: 'uppercase' })};
  color: ${COLORS.grey};
  margin-bottom: 0.4rem;
`;

Styled.price = styled.p`
  ${typography({ fontSize: '1.5rem', fontWeight: 700 })};
  color: ${COLORS.dark};
`;

export default Styled;
