function submitEvent (event) {
    event.preventDefault()

    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value
    const comment = document.getElementById('comment').value
    output.innerHTML = `Name = ${name}</br> Phone = ${phone} 
    </br> Comment = ${comment}`
}

function validatePhone (event) {
    const regex = RegExp('\\d{10}')

    const validationDiv = document.getElementById
    ('invalidPhone')
    if (regex.test(event.target.value)) {
        validationDiv.style.display = 'none'
        document.getElementById('mySubmit').disabled = false
    } else {
        validationDiv.style.display = 'inline'
        document.getElementById('mySubmit').disabled = true
    }
}

const name = document.getElementById('name')
const output = document.getElementById('output')
const phone = document.getElementById('phone')
const outputPhone = document.getElementById('outputPhone')
const comment = document.getElementById('phone')
const outputComment = document.getElementById('outputComment')
const form = document.getElementById('myForm')
form.addEventListener('submit', submitEvent)
phone.addEventListener('change', validatePhone)