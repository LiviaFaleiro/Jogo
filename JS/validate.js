const form = document.querySelector(".button")
const errorElement = document.getElementById('error')

form.addEventListener('click', (e) => {
    console.log("helloworld")
    var name = document.querySelector("#nomeG")
    let messages = []
    if (name.value.trim() === "" || name.value.trim() == null) {
        messages.push('Name is required')
    }

    if (messages.length > 0 ) {
        e.preventDefault()
    }
})