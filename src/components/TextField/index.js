import React from 'react';
import { Container, Input, IconLeft } from './style';

const TextField = (props) => {
  const { placeholder, icon, value, onChange } = props;
  return (
    <Container>
      <IconLeft>{icon}</IconLeft>
      <Input placeholder={placeholder} value={value} onChange={onChange} />
    </Container>
  );
};

export default TextField;
