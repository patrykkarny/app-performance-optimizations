import React from 'react';
import PropTypes from 'prop-types';

import { LazyImage } from 'components/common/LazyImage/LazyImage';
import { Text, TextTitle } from 'components/common/Text/Text';
import { CardImageWrapper } from './CardImageWrapper';

export const CardImage = ({
  description,
  imageSrc,
  placeholderSrc,
  title,
}) => (
  <CardImageWrapper>
    <LazyImage
      src={imageSrc}
      placeholder={placeholderSrc}
    />
    <div className="text-content">
      <TextTitle>{title}</TextTitle>
      <Text>{description}</Text>
    </div>
  </CardImageWrapper>
);

CardImage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  placeholderSrc: PropTypes.string.isRequired,
};
