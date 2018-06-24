import React from 'react';
import { Loader, Dimmer, Segment } from 'semantic-ui-react'
import PageLayout from '../layouts/PageLayout';

let PageLoading = () => (
  <PageLayout container paddingTop={30}>
    <Segment basic>
      <Dimmer active inverted>
        <Loader inverted content='Loading' />
      </Dimmer>
    </Segment>
  </PageLayout>
);

export default PageLoading
