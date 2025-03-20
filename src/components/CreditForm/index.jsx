import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import Input from '../Input';
import Button from '../Button';
import { api } from '../../services/api';

const CreditForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        cpf: '',
        income: '',
        birthdate: '',
        address: '',
        email: '',
        phone: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Limpar erro ao digitar
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Nome é obrigatório';
        }

        if (!formData.cpf.trim()) {
            newErrors.cpf = 'CPF é obrigatório';
        } else if (!/^\d{11}$/.test(formData.cpf.replace(/[^\d]/g, ''))) {
            newErrors.cpf = 'CPF inválido';
        }

        if (!formData.income.trim()) {
            newErrors.income = 'Renda é obrigatória';
            // biome-ignore lint/style/useNumberNamespace: <explanation>
            // biome-ignore lint/suspicious/noGlobalIsNan: <explanation>
        } else if (isNaN(parseFloat(formData.income.replace(/[^\d.,]/g, '')))) {
            newErrors.income = 'Renda deve ser um valor numérico';
        }

        if (!formData.birthdate.trim()) {
            newErrors.birthdate = 'Data de nascimento é obrigatória';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'E-mail é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'E-mail inválido';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Telefone é obrigatório';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);

        try {
            const response = await api.post('/credit-analysis', formData);
            navigate('/result', { state: { result: response.data } });
        } catch (error) {
            console.error('Erro ao analisar crédito:', error);
            setErrors({ submit: 'Erro ao processar solicitação. Tente novamente.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <S.FormContainer onSubmit={handleSubmit}>
            <S.FormTitle>Análise de Crédito</S.FormTitle>

            <Input
                label="Nome Completo"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Digite seu nome completo"
                error={errors.name}
            />

            <Input
                label="CPF"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                placeholder="Digite seu CPF (apenas números)"
                error={errors.cpf}
            />

            <Input
                label="Renda Mensal (R$)"
                name="income"
                value={formData.income}
                onChange={handleChange}
                placeholder="Ex: 3500,00"
                error={errors.income}
            />

            <Input
                label="Data de Nascimento"
                name="birthdate"
                type="date"
                value={formData.birthdate}
                onChange={handleChange}
                error={errors.birthdate}
            />

            <Input
                label="Endereço Completo"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Rua, número, bairro, cidade, estado"
                error={errors.address}
            />

            <Input
                label="E-mail"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="exemplo@email.com"
                error={errors.email}
            />

            <Input
                label="Telefone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                error={errors.phone}
            />

            {errors.submit && <S.ErrorMessage>{errors.submit}</S.ErrorMessage>}

            <Button type="submit" disabled={loading}>
                {loading ? 'Processando...' : 'Analisar Crédito'}
            </Button>
        </S.FormContainer>
    );
};

export default CreditForm;
