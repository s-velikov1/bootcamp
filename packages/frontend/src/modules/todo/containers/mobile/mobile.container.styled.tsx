import styled from 'styled-components';
import { COLORS } from '../../../theme';

export const StyledMobileContainer = styled.div`
  .todo-item-mobile {
    position: relative;
    margin-bottom: 10px;
  }

  .mobile-actions {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .mobile-actions-buttons {
    margin-right: 0.5rem;
    width: 50%;
  }

  .view-button {
    margin-right: 0.5rem;
  }

  .todo-item-mobile:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${COLORS.grey_dark};
  }
`;
