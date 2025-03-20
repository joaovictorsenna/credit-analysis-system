import React from 'react';
import * as S from './styles';

const Input = ({ label, error, ...rest }) => {
    return (
        <S.InputContainer>
            {label && <S.Label>{label}</S.Label>}
            <S.InputElement {...rest} hasError={!!error} />
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
        </S.InputContainer>
    );
};

export default Input;

