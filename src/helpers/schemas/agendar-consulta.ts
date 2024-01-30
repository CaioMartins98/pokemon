import * as Yup from "yup";

export const agendarConsultaFormSchema = Yup.object().shape({
  nome: Yup.string().required("Nome é obrigatório*"),
  sobrenome: Yup.string().required("Sobrenome é obrigatório*"),
  regiao: Yup.string().required("Região é obrigatório*"),
  cidade: Yup.string().required("Cidade é obrigatório*"),
  dataAtendimento: Yup.string().required("Data de atendimento é obrigatório*"),
  horaAtendimento: Yup.string().required("Hora de atendimento é obrigatório*"),
});
