const doApprove = () => {
    $('#approve_email').click(async () => {

        // TODO перенести на Promise и добавить прелодер при ожидании отправки
        const approveIsWellDone = await (await fetch('src/auth/send_check_message.php', { 
            method: 'POST', 
            body: '', 
            headers: { 'Content-Type': 'application/json' } 
        })).json()

        if (approveIsWellDone) {
            $('#approve_email_caption').html('На указанную почту было отпралено письмо.')
        } else {
            $('#approve_email_caption').html('Проблемы с отправкой письма.\
            \Возможно при регистрации вы указали неверный адрес электронной почты и можете исправить это\
            \перейдя в режим редактрования профиля (для этого нужно кликнуть по имени пользователя).\
            \Если это не так, а зарегистрироваться очень хочется, можете позвонить по номеру +7 920 431 03 91\
            \и я попробую решить вашу проблему.')
        }

    })
}

export default doApprove