import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import Button from '../Button';

const CreditResult = ({ result }) => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/');
    };

    const handleNewAnalysis = () => {
        navigate('/credit-analysis');
    };

    return (
        <S.ResultContainer>
            <S.ResultTitle>Resultado da Análise de Crédito</S.ResultTitle>

            <S.ScoreContainer>
                <S.ScoreTitle>Pontuação Serasa:</S.ScoreTitle>
                <S.Score status={result.score > 700 ? 'good' : result.score > 500 ? 'medium' : 'bad'}>
                    {result.score}
                </S.Score>
            </S.ScoreContainer>

            <S.StatusContainer status={result.approved ? 'approved' : 'rejected'}>
                <S.StatusIcon status={result.approved ? 'approved' : 'rejected'} />
                <S.StatusText>
                    {result.approved ? 'Crédito Aprovado' : 'Crédito Negado'}
                </S.StatusText>
            </S.StatusContainer>

            {result.approved && (
                <S.ApprovedInfo>
                    <S.InfoTitle>Valor Aprovado:</S.InfoTitle>
                    <S.InfoValue>R$ {result.approvedAmount.toFixed(2)}</S.InfoValue>

                    <S.InfoTitle>Taxa de Juros:</S.InfoTitle>
                    <S.InfoValue>{result.interestRate}% ao mês</S.InfoValue>

                    <S.InfoTitle>Prazo Máximo:</S.InfoTitle>
                    <S.InfoValue>{result.maxTerm} meses</S.InfoValue>
                </S.ApprovedInfo>
            )}

            {!result.approved && (
                <S.RejectedInfo>
                    <S.InfoTitle>Motivo:</S.InfoTitle>
                    <S.InfoValue>{result.rejectionReason}</S.InfoValue>

                    <S.InfoTitle>Sugestão:</S.InfoTitle>
                    <S.InfoValue>{result.suggestion}</S.InfoValue>
                </S.RejectedInfo>
            )}

            <S.ButtonsContainer>
                <Button variant="secondary" onClick={handleNewAnalysis}>
                    Nova Análise
                </Button>
                <Button variant="primary" onClick={handleBackToHome}>
                    Voltar ao Início
                </Button>
            </S.ButtonsContainer>
        </S.ResultContainer>
    );
};

export default CreditResult;
