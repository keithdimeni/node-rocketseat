// let aceitar = true

// console.log("Chamar Uber")
// const pedirUber = new Promise((resolve, reject) => {
//   if(aceitar) {
//     return resolve('Pedido aceito!')
//   }
//   return reject('Pedido negado')
// })

// console.log("Aguardando a resposta do Uber")

// pedirUber
//   .then(resultado => {
//     console.log(resultado)
//   })
//   .catch(erro => console.log(erro))
//   .finally(() => console.log("Pedido Finalizada"))


// fetch('https://api.github.com/users/keithdimeni')
// .then(response => response.json())
// .then(data => console.log(data))

// import axios from 'axios'; Necessário instalar com npm e importar o axios
// axios.get('https://api.github.com/users/keithdimeni')
// .then(response => console.log(response.data))
// .catch(error => console.log(error))

// Promise.all([
//   axios.get('https://api.github.com/users/keithdimeni'),
//   axios.get('https://api.github.com/users/keithdimeni/repos'),
// ])
// .then(responses => {
//   console.log(responses[0].data.login)
//   console.log(responses[1].data.length)
// })



/**
 * Async / Await
 * Primeiro caso de uso
 */

// const aceitar = false

// const promessa = new Promise((resolve, reject) => {
//  if(aceitar) {
//    return resolve('Ok')
//  }
//  return reject("Rejeitado")
// })

// //  console.log(promessa)

// async function start() {
//  try {
//    const result = await promessa
//    console.log(result) 
//  } catch (error) {
//    console.log(error)
//  } finally {
//    console.log("Finalizada, continuar a roda")
//  }
// }

// start()


/**
 * Async / Await
 * Para quando usado com fetch api
 */

// async function start() {
//   const response = await fetch('https://api.github.com/users/keithdimeni')
//   const user = await response.json()

//   const responseRepos = await fetch(user.repos_url)
//   const repos = await responseRepos.json()

  
//   console.log(repos)
// }
// start()

//Outro exemplo usando async / await com fetch
// async function start(){
//   const url = 'https://api.github.com/users/keithdimeni'
//   const user = await fetch(url).then(response => response.json())
//   const repos = await fetch(user.repos_url).then(response => response.json())
//   console.log(repos[0].url)
//  }

// start()


/**
 * Async / Await
 * Para quando usado com Axios
 * Necessário fazer importação
 */

// async function start(){
//   try {
//     const url = 'https://api.github.com/users/keithdimeni'
//     const user = await axios.get(url)
//     const repos = await axios.get(user.data.repos_url)
//     console.log(repos.data)    
//   } catch (error) {
//     console.log(error)
//   } finally {
//     console.log('Finalizado')
//   }

//  }

// start()