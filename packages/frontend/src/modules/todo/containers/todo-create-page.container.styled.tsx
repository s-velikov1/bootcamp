import styled from 'styled-components';
import { COLORS } from '../../theme';

export const StyledCreatePageContainer = styled.div`
  max-width: 90%;
  margin: 5% auto;

  .title {
    margin-bottom: 2%;
  }

  .description {
    margin-top: 1%;
    margin-left: 2%;
    font-size: 16px;
    font-weight: normal;
    color: ${COLORS.grey};
    line-height: 1.5;
    padding: 8px 0;
  }

  .state {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    padding: 1rem;
  }

  .edit-button {
    margin-left: 5rem;
  }
`;
