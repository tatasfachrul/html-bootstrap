fetch('https://jsonplaceholder.typicode.com/users/')
  .then(received => received.json())
  .then(dataUser => {
    console.log(dataUser)
    document.getElementById('name').innerHTML = dataUser.name
    document.getElementById('description').innerHTML = dataUser.company.catchPhrase
  })
