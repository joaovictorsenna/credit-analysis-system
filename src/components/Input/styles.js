import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const InputElement = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme, hasError }) =>
        hasError ? theme.colors.danger : theme.colors.secondary};
  font-size: 16px;
  
  ${({ hasError }) =>
        hasError &&
        css`
      border-color: ${({ theme }) => theme.colors.danger};
    `}
    
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.2);
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 12px;
  margin-top: 4px;
`;
