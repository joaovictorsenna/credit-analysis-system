import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 32px 16px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Hero = styled.div`
  text-align: center;
  padding: 48px 0;
  max-width: 800px;
  margin: 0 auto;
`;

export const HeroTitle = styled.h1`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 24px;
`;

export const HeroDescription = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 32px;
  line-height: 1.5;
`;

export const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 48px;
`;

export const Feature = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 250px;
  text-align: center;
`;

export const FeatureIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

export const FeatureTitle = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
`;

export const FeatureDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dark};
  line-height: 1.5;
`;