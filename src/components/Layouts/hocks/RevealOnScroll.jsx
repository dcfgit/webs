import React from 'react';
import { Box } from '@mui/material';
import { keyframes, styled } from '@mui/system';
import useScrollReveal from './useScrollReveal';


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px); /* Empieza 50px más abajo */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* Termina en su posición original */
  }
`;

const FadeInBox = styled(Box)(({ isVisible, delay }) => ({
  opacity: 0, 
  transform: 'translateY(50px)', 
  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out', 
  transitionDelay: delay, 
  
  ...(isVisible && {
    animation: `${fadeIn} 0.8s ease-out forwards`, 
    animationDelay: delay, 
  }),
}));

const RevealOnScroll = ({ children, threshold = 0.3, delay = '0s', ...props }) => {

  const [ref, isVisible] = useScrollReveal({ threshold: threshold });

  return (
    <FadeInBox ref={ref} isVisible={isVisible} delay={delay} {...props}>
      {children}
    </FadeInBox>
  );
};

export default RevealOnScroll;