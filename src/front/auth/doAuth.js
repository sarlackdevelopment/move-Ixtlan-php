//const loginGroup = $('#group_login')

//const loginField = $('#login')
const passwordField = $('#password')
const emailField = $('#email')

const getAuth = () => {

    const results = async () => {
        const res = await dateIsValid(loginField.val(), passwordField.val(), emailField.val())
        console.log(res.ui)
        //res.foreach(item => console.log(item))
    }

    $('#auth_submit').click(() => {
        results()

        /* let passwordField        = $('#password')
        let confirmPasswordField = $('#confirmpassword')

        if (passwordField.val() === confirmPasswordField.val()) {

            $('#auth_form').submit()

        } else {

            passwordField.attr("placeholder", "введенные пароли не совпадают!")
            confirmPasswordField.attr("placeholder", "введенные пароли не совпадают!")

            passwordField.val('')
            confirmPasswordField.val('')

            passwordField.addClass('is-invalid')
            confirmPasswordField.addClass('is-invalid')

        } */
    })
}

const getInvalidMessage = async (fieldName, fieldValue) => {

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

const checkField = async (fieldName) => {

    const field          = $(`#${fieldName}`)
    const fieldValue     = field.val()
    const fieldGroup     = $(`#group_${fieldName}`)
    const idInvalidField = `invalid${fieldName}`

    const invalidMessage = await getInvalidMessage(fieldName, fieldValue)

    if ((fieldValue === '') || (invalidMessage === '')) {
        field.removeClass('is-invalid')
    } else {
        field.addClass('is-invalid')
        if (!$("div").is(`#${idInvalidField}`)) {
            fieldGroup.append(
                `<div id="${idInvalidField}" class="invalid-feedback">
                    ${invalidMessage}
                </div>`)
        }
    }  
}

const FIELDS = ['login', 'email', 'password', 'confirmpassword']

FIELDS.forEach(item => $(`#${item}`).keyup(() => checkField(item)))

export default getAuth