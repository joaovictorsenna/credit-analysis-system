import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
  border: none;
  transition: all 0.3s ease;
  
  ${({ variant, theme }) => {
        switch (variant) {
            case 'primary':
                return css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          
          &:hover {
            background-color: ${theme.colors.secondary};
          }
        `;
            case 'secondary':
                return css`
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.white};
          
          &:hover {
            background-color: ${theme.colors.primary};
          }
        `;
            case 'success':
                return css`
          background-color: ${theme.colors.success};
          color: ${theme.colors.white};
          
          &:hover {
            opacity: 0.8;
          }
        `;
            default:
                return css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          
          &:hover {
            background-color: ${theme.colors.secondary};
          }
        `;
        }
    }}
`;
