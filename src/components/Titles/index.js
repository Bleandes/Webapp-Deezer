import React from 'react';
import { Title } from './style';

const Titles = (props) => {
  const { title } = props;
  return (
    <div>
      <Title>{title}</Title>
    </div>
  );
};

export default Titles;
