import React, { Component } from 'react';
import styled from 'styled-components';

import { intersectionObserver } from 'utils/intersectionObserver';

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const withLazyLoad = (WrappedComponent) => {
  const subscriber = intersectionObserver();

  return class LazyLoad extends Component {
    state = {
      intersection: null,
    };

    componentDidMount() {
      subscriber(this.myRef.current)
        .subscribe(intersection => this.setState({ intersection }));
    }

    myRef = React.createRef();

    render() {
      const { intersection } = this.state;

      return (
        <Wrapper innerRef={this.myRef}>
          <WrappedComponent intersection={intersection} {...this.props} />
        </Wrapper>
      );
    }
  };
};
