import React from 'react';
import { Segment, Icon, Header } from 'semantic-ui-react';

let Placeholder = ({ icon, header, content, children }) => (
  <Segment
    basic
    secondary
    padded="very"
    textAlign="center"
    size="big"
  >
    {icon && (
      <Icon
        name="warning sign"
        size="big"
        color="orange"
      />
    )}
    {header && (
      <Header size="large">{header}</Header>
    )}
    {content && (
      <p>{content}</p>
    )}
    {children}
  </Segment>
);

export default Placeholder;
