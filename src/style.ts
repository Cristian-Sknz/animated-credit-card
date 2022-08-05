import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Background = styled.div`
  background-color: #b08fff;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: white;
  min-width: 400px;
  min-height: 300px;
  border-radius: 8px;
  box-shadow: 0px 0px 1rem 0px #00000040;
  padding: 1.5rem;
  position: relative;
`;

export const Separator = styled.div`
  margin-bottom: 5.3rem;
`