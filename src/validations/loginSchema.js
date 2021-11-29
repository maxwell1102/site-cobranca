import * as yup from 'yup';
import toast from '../helpers/toast';


    const loginSchema = yup.object().shape({
        email: yup
            .string()
            .email(() => toast.messageError("Informe um e-mail válido"))
            .required(() => toast.messageError("O campo E-mail é obrigatório")),
        senha: yup
            .string()
            .min(5, () => toast.messageError("A senha deve ter no mínimo 5 caracteres"))
            .required(() => toast.messageError("Informe a senha"))
    });

export default loginSchema;