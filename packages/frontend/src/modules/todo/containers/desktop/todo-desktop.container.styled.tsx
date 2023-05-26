import styled from 'styled-components';
import { COLORS } from '../../../theme';

export const StyledDesktopContainer = styled.table`
/ * Table Styles */
  border-collapse: collapse;
  width: 100%;
  font-family: Arial, sans-serif;

  th,
  td {
    padding: 10px;
    text-align: left;
    white-space: nowrap;
  }

  th {
    font-weight: bold;
  }

  tbody tr:nth-child(even) {
    background-color: ${COLORS.white};
  }

  tbody tr:hover {
    background-color: ${COLORS.grey_light};
  }

  thead {
    background-color: ${COLORS.grey_dark};
    color: ${COLORS.white};
  }

  tbody tr:nth-child(even) {
    background-color: ${COLORS.white};
  }

  tbody tr:hover {
    background-color: ${COLORS.grey_light};
  }

  tbody td:last-child {
    display: flex;
    justify-content: space-around;
  }

  table {
    border: 1px solid ${COLORS.grey_light};
  }

  th, td {
    border-bottom: 1px solid ${COLORS.grey_light};
  }

  th:last-child, td:last-child {
    border-right: 1px solid ${COLORS.grey_light};
  }
`;
