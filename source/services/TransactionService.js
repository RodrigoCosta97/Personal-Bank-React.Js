import http from "./http-common";

// TODO create add user
// TODO store user id on local storage

// 1. criar um form com primeiro e ultimo nome
// 2. este form deve ser apresentado na abertura da nossa APP a menos que exista um user id na nossa localStorage
// 3. no sucesso do formulario para criar user (https://academy.api1.blissapplications.com/api/Dashboard/adduser), guardar user id no local storage
// 4. userid = fname + lname + timestamp (date.now) eg "rui-rigueira-9079876978" `${fname.trim()}-${lname.trim()}-${Date.now()}`

// se for addTransction -> body = {..body, userId: "ex"}
// se for getDashboard -> adicionar ao path o userId

const getAll = (uid, transactiontype) => {
  // localstorage.get user id

  return http.get(
    `/Transaction/gettransactionsbyuid/${uid}/${transactiontype}`
  );
};

const create = async (data) => {
  const res = await http.post(`/Transaction/addtransactiondata`, data);

  // dispatch para o redux
};

const edit = (id, data) => {
  return http.put(`/transactions/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/transactions/${id}`);
};

const TransactionService = {
  getAll,
  create,
  edit,
  remove,
};

export default TransactionService;
