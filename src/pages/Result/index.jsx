import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import * as S from './styles';
import CreditResult from '../../components/CreditResult';

const Result = () => {
    const location = useLocation();
    const { result } = location.state || {};

    if (!result) {
        return <Navigate to="/credit-analysis" replace />;
    }

    return (
        <S.ResultContainer>
            <CreditResult result={result} />
        </S.ResultContainer>
    );
};

export default Result;
