console.log('Hello user!')
console.log( 'Try to guess the mystery number.')
console.log ('Use "submit(x)" to submit a number.')


const mysteryNumber = Math.round(Math.random() * 100)


const submit = (x) => {
    if (x < mysteryNumber) {
        console.log('Too small.')
        document.body.innerHTML = '<h1>Too small.</h1>'
        document.body.style.backgroundColor = '#801854'

    }
    if (x > mysteryNumber) {
        console.log('Too big.')
        document.body.innerHTML = '<h1>Too big.</h1>'
        document.body.style.backgroundColor = '#2b1880'
    }
    if (x == mysteryNumber) {
        console.log('Hurrah')
        document.body.innerHTML = '<h1>Hurrah!</h1>'
        document.body.style.backgroundColor = '#428018'
    }
}

const cheat = () => {
    console.log(`The mystery number is ${mysteryNumber}`)
}
