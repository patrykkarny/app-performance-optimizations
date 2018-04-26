import React, { Component } from 'react';
import PropTypes from 'prop-types';

import isEqual from 'lodash/isEqual';

import { withLazyLoad } from 'components/common/HOC/withLazyLoad';
import { fetchImage } from 'utils/fetchImage';

import { StyledImage } from 'components/common/StyledImage/StyledImage';

export class ProgressiveImage extends Component {
  state = {
    isLoaded: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { intersection: prevIntersection } = prevProps;
    const { isLoaded: prevIsLoaded } = prevState;
    const { intersection } = this.props;

    if (!intersection) return;

    const {
      entry: { isIntersecting, target },
      observer,
    } = intersection;

    const shouldLoadImage = !isEqual(prevIntersection, intersection) && isIntersecting && !prevIsLoaded;

    if (shouldLoadImage) {
      this.loadImage();
      observer.unobserve(target);
    }
  }

  loadImage = async () => {
    const { src } = this.props;
    const isLoaded = await fetchImage(src);

    this.setState({ isLoaded });
  }

  render() {
    const { isLoaded } = this.state;
    const { src, placeholder } = this.props;

    return (
      <StyledImage
        isLoaded={isLoaded}
        src={isLoaded ? src : placeholder}
      />
    );
  }
}

ProgressiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  intersection: PropTypes.shape({}),
};

ProgressiveImage.defaultProps = {
  intersection: null,
};

export const LazyImage = withLazyLoad(ProgressiveImage);
