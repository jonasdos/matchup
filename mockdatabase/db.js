import axios from "axios";

// Adicionar usuários
export async function addNewUser(name, login, password) {


  if (await validateNewUser(login)) {
    console.log("Nome não é valido")
    return null
  }
  try {

    await axios.post("http://localhost:3000/users", { name, login, password })

    return await getUserByLogin(login)
  }
  catch (error) {
    console.log(error)

  }

}
async function validateNewUser(login) {
  const users = await getAllUsers()
  console.log(users)
  return users.find(item => item.login === login);

}

export async function validateLogin(login, password) {
  const users = await getAllUsers()
  let validatedUser = users.find(item => item.login === login && item.password === password ? item : null)
  return validatedUser;

}

async function getAllUsers() {
  try {
    const { data } = await axios.get("http://localhost:3000/users");
    return data
  } catch (error) {
    console.log(error);
  }

}
async function getUserByLogin(login) {
  const users = await getAllUsers()
  let user = users.find(item => item.login === login)
  return user
}