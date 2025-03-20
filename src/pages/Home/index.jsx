import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import Button from '../../components/Button';

const Home = () => {
    const navigate = useNavigate();

    const handleAnalyzeCredit = () => {
        navigate('/credit-analysis');
    };

    return (
        <S.HomeContainer>
            <S.Hero>
                <S.HeroTitle>
                    Sistema de Análise de Crédito
                </S.HeroTitle>
                <S.HeroDescription>
                    Análise rápida e segura utilizando dados do Serasa.
                    Descubra agora se você está apto a receber crédito.
                </S.HeroDescription>
                <Button onClick={handleAnalyzeCredit}>
                    Iniciar Análise de Crédito
                </Button>
            </S.Hero>

            <S.FeaturesContainer>
                <S.Feature>
                    <S.FeatureIcon>⚡</S.FeatureIcon>
                    <S.FeatureTitle>Análise Rápida</S.FeatureTitle>
                    <S.FeatureDescription>
                        Resultado em segundos, sem burocracia.
                    </S.FeatureDescription>
                </S.Feature>

                <S.Feature>
                    <S.FeatureIcon>🔒</S.FeatureIcon>
                    <S.FeatureTitle>Segurança</S.FeatureTitle>
                    <S.FeatureDescription>
                        Seus dados são criptografados e protegidos.
                    </S.FeatureDescription>
                </S.Feature>

                <S.Feature>
                    <S.FeatureIcon>📊</S.FeatureIcon>
                    <S.FeatureTitle>Dados Serasa</S.FeatureTitle>
                    <S.FeatureDescription>
                        Utilizamos o score Serasa para uma análise precisa.
                    </S.FeatureDescription>
                </S.Feature>
            </S.FeaturesContainer>
        </S.HomeContainer>
    );
};

export default Home;
