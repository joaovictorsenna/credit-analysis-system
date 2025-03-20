import styled from 'styled-components';

export const ResultContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const ResultTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 24px;
  text-align: center;
`;

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

export const ScoreTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Score = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: ${({ status, theme }) => {
        switch (status) {
            case 'good':
                return theme.colors.success;
            case 'medium':
                return theme.colors.warning;
            case 'bad':
                return theme.colors.danger;
            default:
                return theme.colors.dark;
        }
    }};
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ status }) =>
        status === 'approved' ? 'rgba(40, 167, 69, 0.1)' : 'rgba(220, 53, 69, 0.1)'};
`;

export const StatusIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 12px;
  background-color: ${({ status, theme }) =>
        status === 'approved' ? theme.colors.success : theme.colors.danger};
  
  &:before {
    content: '${({ status }) => (status === 'approved' ? '✓' : '✗')}';
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

export const StatusText = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark};
`;

export const ApprovedInfo = styled.div`
  margin-bottom: 24px;
`;

export const RejectedInfo = styled.div`
  margin-bottom: 24px;
`;

export const InfoTitle = styled.h4`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 4px;
`;

export const InfoValue = styled.p`
  font-size: 18px;
  margin-bottom: 16px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;
