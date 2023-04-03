import React, { useEffect, useRef } from 'react';


import { Container } from './styles';
import { CSSProperties } from 'react';

interface SkeletonProps {
  width: number;
  height: number;
  style?: CSSProperties;
}

const Skeleton = ({ width, height, style }: SkeletonProps) => {
  return (
    <Container style={style} width={width} height={height} />
  );
};

export default Skeleton;