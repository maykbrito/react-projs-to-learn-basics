export default () => {
    return new Promise( resolve => {
        fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(randomJoke => resolve(randomJoke.value))
    })
}