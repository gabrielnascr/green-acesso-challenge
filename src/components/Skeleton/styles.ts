import styled from 'styled-components';

interface SkeletonContainerProps {
  width: number;
  height: number;
}

export const Container = styled.div<SkeletonContainerProps>`
  width: ${( props => props.width)}px;
  height: ${( props => props.height )}px;

  background-color: #E8E8E8;
  border-radius: 10px;

  animation: scale 1s infinite;


  @keyframes scale {
    0% {transform: scale(0.9)}
    100% {transform: scale(0.92)}
 }
`;