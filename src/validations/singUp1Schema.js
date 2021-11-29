import * as yup from 'yup';
import toast from '../helpers/toast';

const sinUpPage1Schema = yup.object().shape({
    nome: yup
        .string()
        .required(() => toast.messageError("O campo Nome é obrigatório")),
    email: yup
        .string()
        .email(() => toast.messageError("Informe um e-mail válido"))
        .required(() => toast.messageError("O campo E-mail é obrigatório"))
});

export default sinUpPage1Schema;