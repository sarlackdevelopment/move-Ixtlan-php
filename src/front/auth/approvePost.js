const doApprove = () => {

    $('#approve_email').click(async () => {

        $('#approve_email').replaceWith(
            `<button id="approve_email" class="btn btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Отправляю (Sending)...
            </button>`);

        const approveIsWellDone = await (await fetch('src/auth/send_check_message.php', { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' } 
        })).json()

        await (async () => {
            if (approveIsWellDone) {
                $('#approve_email_caption').html('На указанную почту было отпралено письмо.')
            } else {
                $('#approve_email_caption').html(`<p>Проблемы с отправкой письма.
                    Возможно при регистрации вы указали неверный адрес электронной почты и можете исправить это
                    перейдя в режим редактрования профиля (для этого нужно кликнуть по имени пользователя).
                    Если это не так, а зарегистрироваться очень хочется, можете позвонить по номеру +7 920 431 03 91
                    и я попробую решить вашу проблему.</p>
                    <p>If you do not understand whatta hell is going on right here, just send me your question on Sarlack_Work@mail.ru. 
                    Thank you)</p>`)

                }
            $('#approve_email').replaceWith(
                `<button id="approve_email" class="btn btn-primary">Отправить письмо (Send letter)</button>`);
        })()     

    })
}

export default doApprove