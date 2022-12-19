import * as yup from 'yup'

export  const validationLogin = yup.object().shape({
        email:yup.string().required('Email Obrigatório').email('Email inválido'),
        password:yup.string().required('Senha Obrigatória'),
})

export const validationRegister = yup.object().shape({
    name:yup.string().required('Nome Obrigatório').min(3,'No mínimo 3 caracteres').max(150,'Limite máximo de 150 digitos inseridos'),
    email:yup.string().required('Email Obrigatório').email('Email inválido'),

    password:yup.string().required('Senha Obrigatória')
    .matches(/(?=.*\d)/,'deve conter ao menos um dígito')
    .matches(/(?=.*[a-z])/,'deve conter ao menos uma letra minúscula')
    .matches(/(?=.*[A-Z])/,'deve conter ao menos uma letra maiúscula')
    .matches(/(?=.*[$*&@#])/,'digite um caractere especial($*&@#)'),

    confPassword:yup.string().required('Confirmação obrigatória').oneOf([yup.ref("password")], 'Senhas não conferem'),
})