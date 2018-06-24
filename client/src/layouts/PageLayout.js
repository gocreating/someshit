import React from 'react';
import { Container } from 'semantic-ui-react';
import Navigation from '../utils/Navigation';
import 'semantic-ui-css/semantic.min.css';

let PageLayout = ({
  container, paddingTop, children, ...rest
}) => (
  <div>
    <Navigation />
    <div style={{ paddingTop: paddingTop }}>
      {container ? (
        <Container {...rest}>
          {children}
        </Container>
      ) : children}
    </div>
  </div>
);

export default PageLayout;
