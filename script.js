var input = document.querySelector('#nameInput')
var photoPerfil = document.querySelector('#perfilPhoto')
var srcProfile = () => {
    
    axios.get(`https://api.github.com/users/${input.value}`)
    .then(response => {
        input.style.marginLeft = '-15rem'
        photoPerfil.setAttribute('src', response.data.avatar_url)
        document.querySelector('#name').innerHTML = `Nome: ${response.data.name}`
        if(response.data.name === null) document.querySelector('#name').innerHTML = `Nome não cadastrado`
        else document.querySelector('#name').innerHTML = `Nome: ${response.data.name}`
   console.log(response);
    })
    .catch(() => {
        alert(`Não encontrado`)
    })
}
