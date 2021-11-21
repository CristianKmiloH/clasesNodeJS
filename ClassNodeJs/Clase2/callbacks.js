const personaPorId = ([id, name], retorno) => {
    const personaje = {
        id,
        name
    }

    setTimeout(() => {
        retorno(personaje)
    }, 2000);
}

personaPorId([1234, "Cristopher"], (personaje) => {
    console.log(personaje.id)
    console.log(personaje.name)
})