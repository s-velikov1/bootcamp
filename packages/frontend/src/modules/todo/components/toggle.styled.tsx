import styled from 'styled-components';
import { COLORS } from '../../theme';

interface ToggleSwitchProps {
  isOn: boolean;
}

export const ToggleStyled = styled.label<ToggleSwitchProps>`
  display: inline-block;
  position: relative;
  width: 48px;
  height: 24px;
  border-radius: 12px;
  background-color: ${({ isOn }) => (isOn ? `${COLORS.green_light}` : `${COLORS.grey_light}`)};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${({ isOn }) => (isOn ? '26px' : '2px')};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${COLORS.white};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: left 0.3s ease;
  }
`;
