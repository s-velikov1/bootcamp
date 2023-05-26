import styled from 'styled-components';
import { COLORS } from '../../theme';

export const FormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
  }

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input[type='text'],
  input[type='checkbox'] {
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid ${COLORS.grey_light};
    border-radius: 4px;
  }

  button {
    padding: 10px 15px;
    background-color: ${COLORS.grey_dark};
    color: ${COLORS.white};
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: ${COLORS.dark_blue};
  }
`;
