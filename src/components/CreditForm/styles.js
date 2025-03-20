import styled from 'styled-components';

export const FormContainer = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const FormTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 24px;
  text-align: center;
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.danger};
  background-color: rgba(220, 53, 69, 0.1);
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 14px;
`;