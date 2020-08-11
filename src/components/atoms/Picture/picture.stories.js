import React from 'react';
import { storiesOf } from '@storybook/react';

import Picture from './picture';

import Placeholders from '../../../helpers/dummy/placeholders';

const IMG_URL = Placeholders.image(500, 500);

storiesOf('Atoms/Picture', module)
  .add('default', () => (
    <Picture
      alt="default"
      src={IMG_URL}
    />
  ));
