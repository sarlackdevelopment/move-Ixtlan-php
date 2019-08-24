const doApprove = () => {
    $('#approve_email').click(async () => {

        // TODO перенести на Promise и добавить прелодер при ожидании отправки
        const approveIsWellDone = await (await fetch('src/auth/approve_post.php', { 
            method: 'POST', 
            body: '', 
            headers: { 'Content-Type': 'application/json' } 
        })).json()

        if (approveIsWellDone) {
            $('#approve_email_caption').html('На указанную почту было отпралено письмо.')
        } else {
            $('#approve_email_caption').html('Проблемы с отправкой письма. Если все же очень хочется зарегистрироваться, можете позвонить по номеру +7 920 431 03 91 попробую решить вашу проблему.')
        }

    })
}

export default doApprove