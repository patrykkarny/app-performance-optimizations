import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import headerImage from 'assets/images/header-icon.png';

import { HeroHeader } from 'components/common/HeroHeader/HeroHeader';
import { TextHeader } from 'components/common/Text/Text';
import { ImageBox } from 'components/common/ImageBox/ImageBox';
import { ContentWrapper } from 'components/common/ContentWrapper/ContentWrapper';
import { CardImage } from 'components/common/CardImage/CardImage';

import { THEME, articles } from 'consts';

import './App.css';

export const App = () => (
  <ThemeProvider theme={THEME}>
    <Fragment>
      <HeroHeader>
        <ImageBox>
          <img src={headerImage} alt="" />
        </ImageBox>
        <TextHeader
          size="32px"
          color={THEME.color.accentColor}
        >
          Intersection Observer API
        </TextHeader>
      </HeroHeader>
      <ContentWrapper>
        {articles.map(({
          description,
          imageSrc,
          placeholderSrc,
          title,
        }) => (
          <CardImage
            key={title}
            description={description}
            imageSrc={imageSrc}
            placeholderSrc={placeholderSrc}
            title={title}
          />
        ))}
      </ContentWrapper>
    </Fragment>
  </ThemeProvider>
);
