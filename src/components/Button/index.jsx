import React from 'react';
import * as S from './styles';

const Button = ({ children, variant = 'primary', ...rest }) => {
    return (
        <S.ButtonContainer variant={variant} {...rest}>
            {children}
        </S.ButtonContainer>
    );
};

export default Button;
