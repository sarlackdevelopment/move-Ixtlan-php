const FIELDS_SIGN_UP = [
    'login_sign_up', 
    'email_sign_up', 
    'password_sign_up', 
    'confirmpassword_sign_up'
]

const FIELDS_EDIT_USERS_SETTINGS = [
    'login_edit_user_settings', 
    'email_edit_user_settings', 
    'password_edit_user_settings', 
    'confirmpassword_edit_user_settings'
]

const FIELDS_SIGN_IN = ['login_sign_in']

// TODO Можно попробовать перенести на EXTjs стримы
FIELDS_SIGN_UP.forEach(item => $(`#${item}`).keyup(() => checkFieldSingUp(item)))
FIELDS_EDIT_USERS_SETTINGS.forEach(item => $(`#${item}`).keyup(() => checkFieldSingUp(item)))
FIELDS_SIGN_IN.forEach(item => $(`#${item}`).keyup(() => checkFieldSingIn(item)))

export const doSignUp = () => {
     
    $('#sign_up_submit').click(() => {

        const fieldsIsValid = FIELDS_SIGN_UP.every(item => fieldIsValid(item))

        if (fieldsIsValid) {
            $('#sign_up_form').submit()   
        }
        
    })
}

export const doSignIn = () => {

    $('#sign_in_submit').click(async () => {

        const loginField = $('#login_sign_in')
        const login      = loginField.val()

        if (login.trim() === '') {
            markProblem(loginField, 'login_sign_in', 'Логин не может быть пустым')
        } else {

            if (fieldIsValid('login_sign_in')) {
                const passwordField = $('#password_sign_in')
                const password      = passwordField.val()

                const passwordIsValid = await (await fetch('src/auth/check_password.php', { 
                    method: 'POST', 
                    body: JSON.stringify({ login, password }), 
                    headers: { 'Content-Type': 'application/json' } 
                })).json()

                if (passwordIsValid) {
                    $('#sign_in_form').submit() 
                } else {
                    markProblem(passwordField, 'password_sign_in', 'Пароль неверный')
                }
            }

        }
    })

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

export const doEditUserSettings = () => {

    $('#edit_user_settings').click(() => {

        const fieldsIsValid = FIELDS_EDIT_USERS_SETTINGS.some(item => fieldIsValid(item))
    
        if (fieldsIsValid) {
            $('#edit_user_settings_form').submit()   
        }

    })

}

const fieldIsValid = (fieldName) => {

    const field      = $(`#${fieldName}`)
    const fieldValue = field.val()

    return (field.hasClass('is-valid')) && (fieldValue !== '')
} 

const getInvalidMessageServer = async (fieldName, fieldValue) => {

    const invalidMessage = await (await fetch('src/auth/check_fields.php', { 
        method: 'POST', 
        body: JSON.stringify({ fieldName, fieldValue }), 
        headers: { 'Content-Type': 'application/json' } 
    })).json()

    return invalidMessage

}

const getInvalidMessageClient = (fieldName, fieldValue) => {

    const fields_sign_up = {
        passwordFieldName: 'password_sign_up',
        confirmpasswordFieldName: 'confirmpassword_sign_up'
    }

    const fields_edit_user_settings = {
        passwordFieldName: 'password_edit_user_settings',
        confirmpasswordFieldName: 'confirmpassword_edit_user_settings'
    } 

    switch (fieldName) {
        case "login_sign_up" :
            return ''
        case "email_sign_up" :
            return ''
        case "password_sign_up" :
            return checkPassword(fields_sign_up)
        case "confirmpassword_sign_up" :
            return checkPassword(fields_sign_up) 
        case "login_edit_user_settings":
            return ''
        case "email_edit_user_settings":
            return ''
        case "password_edit_user_settings":           
            return checkPassword(fields_edit_user_settings)
        case "confirmpassword_edit_user_settings":
            return checkPassword(fields_edit_user_settings)

    }

}

const markProblem = (field, fieldName, messages) => {

    const fieldGroup     = $(`#group_${fieldName}`)
    const idInvalidField = `invalid${fieldName}`

    $(`#${idInvalidField}`).remove()

    if (messages === '') {
        field.removeClass('is-invalid').addClass('is-valid')
    } else {
        field.removeClass('is-valid').addClass('is-invalid')
        if (!$("div").is(`#${idInvalidField}`)) {
            fieldGroup.append(
                `<div id="${idInvalidField}" class="invalid-feedback">
                    ${messages}
                </div>`)
        }
    } 

}

const checkFieldSingUp = async (fieldName) => {

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

const checkFieldSingIn = async (fieldName) => {

    const field      = $(`#${fieldName}`)
    const fieldValue = field.val()

    if (fieldValue === '') {
        field.removeClass('is-invalid').removeClass('is-valid')
    } else {
        const invalidMessageServer = await getInvalidMessageServer(fieldName, fieldValue)
        markProblem(field, fieldName, invalidMessageServer)
    }

}

const checkPassword = ({ passwordFieldName, confirmpasswordFieldName }) => {

    const passwordField        = $(`#${passwordFieldName}`)
    const confirmpasswordField = $(`#${confirmpasswordFieldName}`)

    let entropizer = new Entropizer();

    passwordField.removeClass('is-invalid').addClass('is-valid')
    $('div#invalidpassword_sign_up').remove()

    if (entropizer.evaluate(passwordField.val()) < 30) {
        return 'Придумайте пароль посложнее'
    } else {
        if (passwordField.val() !== confirmpasswordField.val()) {
            return 'Пароли не совпадают'   
        } else {
            return ''
        }

    }

}
