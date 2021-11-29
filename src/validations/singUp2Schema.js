import * as yup from 'yup';
import toast from '../helpers/toast';

const sinUpPage2Schema = yup.object().shape({
    senha: yup
        .string()
        .required(() => toast.messageError("O campo senha é obrigatório"))
        .min(5, () => toast.messageError("A senha deve ter no mínimo 5 caracteres"))
});

export default sinUpPage2Schema;