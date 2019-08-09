const FIELDS = ['login', 'email', 'password', 'confirmpassword']

FIELDS.forEach(item => $(`#${item}`).keyup(() => checkField(item)))

const getAuth = () => {
     
    $('#auth_submit').click(() => {

        const fieldsIsValid = FIELDS
            .map(item => fieldIsValid(item))
            .reduce((result, current) => result && current, true)

        if (fieldsIsValid) {
            console.log('Все валидно - можно сабмитить')
        } else {
            console.log('Что то не валидно - нельзя сабмитить')
        }
        //$('#auth_form').submit()
    })
}

const fieldIsValid = (fieldName) => {

    const field      = $(`#${fieldName}`)
    const fieldValue = field.val()

    return (field.hasClass('is-valid')) && (fieldValue !== '')
} 

const getInvalidMessageServer = async (fieldName, fieldValue) => {

    const url = 'src/auth/check.php'
    const headers = { 'Content-Type': 'application/json' }
    const current_inf = { fieldName, fieldValue }

    let invalidMessage = await (await fetch(url, { 
        method: 'POST', 
        body: JSON.stringify(current_inf), 
        headers: headers 
    })).json()
    
    return invalidMessage

}

const getInvalidMessageClient = (fieldName, fieldValue) => {

    switch (fieldName) {
        case "login" :
            return ''
        case "email" :
            return ''
        case "password" :
            return checkPassword()
        case "confirmpassword" :
            return checkPassword() 
    }

}

const markProblem = (field, fieldName, messages) => {

    const fieldGroup     = $(`#group_${fieldName}`)
    const idInvalidField = `invalid${fieldName}`

    if (messages === '') {
        field.addClass('is-valid')
    } else {
        field.addClass('is-invalid')
        if (!$("div").is(`#${idInvalidField}`)) {
            fieldGroup.append(
                `<div id="${idInvalidField}" class="invalid-feedback">
                    ${messages}
                </div>`)
        }
    } 

}

const checkField = async (fieldName) => {

    const field      = $(`#${fieldName}`)
    const fieldValue = field.val()

    if (fieldValue === '') {
        field.removeClass('is-invalid').removeClass('is-valid')
    } else {
        const invalidMessageClient = getInvalidMessageClient(fieldName, fieldValue)
        markProblem(field, fieldName, invalidMessageClient)
        
        if (invalidMessageClient === '') {
            const invalidMessageServer = await getInvalidMessageServer(fieldName, fieldValue)
            markProblem(field, fieldName, invalidMessageServer)
        }
    }

}

const checkPassword = () => {
    
    const passwordField        = $('#password')
    const confirmpasswordField = $('#confirmpassword')

    if (passwordField.val() !== confirmpasswordField.val()) {
        return 'Пароли не совпадают'
    } else {

        passwordField.removeClass('is-invalid').addClass('is-valid')
        confirmpasswordField.removeClass('is-invalid').addClass('is-valid')   
        
        $('div#invalidconfirmpassword').remove()
        $('div#invalidpassword').remove()

        return ''
    }
}

export default getAuth