import React from 'react';
import PageLayout from '../layouts/PageLayout';
import Placeholder from '../utils/Placeholder';

const NotFoundPage = (props) => (
  <PageLayout container paddingTop={30}>
    <Placeholder header="Page Not Found">
      Bro, this page doesn't give you a shit.
    </Placeholder>
  </PageLayout>
);

export default NotFoundPage;
