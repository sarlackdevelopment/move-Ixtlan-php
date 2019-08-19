const FIELDS = ['login', 'email', 'password', 'confirmpassword']

FIELDS.forEach(item => $(`#${item}`).keyup(() => checkField(item)))

export const doSignUp = () => {
     
    $('#sign_up_submit').click(() => {

        const fieldsIsValid = FIELDS.every(item => fieldIsValid(item))

        if (fieldsIsValid) {
            $('#sign_up_form').submit()   
        }
        
    })
}

export const doSignIn = () => {

    $('#sign_in_submit').click(() => {

        //if (fieldsIsValid) {
            $('#sign_in_form').submit()   
        //}

    })

    /* $('#sign_in_submit').click(() => {

        const fieldsIsValid = FIELDS.every(item => fieldIsValid(item))

        if (fieldsIsValid) {
            $('#sign_in_form').submit()   
        }
        
    }) */
    
}

export const doSignOut = () => {
    $('#sign_out').click(async () => {

        await fetch('src/auth/sign_out.php', { 
            method: 'POST', 
            body: '', 
            headers: { 'Content-Type': 'application/json' } 
        }) 
        location.reload()

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
        field.removeClass('is-invalid').addClass('is-valid')
        $(`#${idInvalidField}`).remove()
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

    let entropizer = new Entropizer();

    passwordField.removeClass('is-invalid').addClass('is-valid')
    $('div#invalidpassword').remove()

    if (entropizer.evaluate(passwordField.val()) < 10) {
        return 'Придумайте пароль посложнее'
    } else {
        if (passwordField.val() !== confirmpasswordField.val()) {
            return 'Пароли не совпадают'   
        } else {
            return ''
        }

    }

}
