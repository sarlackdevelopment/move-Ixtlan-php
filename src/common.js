import bindGlobalHandlers from './front/commonHandlers.js'
import bindLocalHandlers from './front/bindLocalHandlers.js'
import { doSignIn, doSignUp, doSignOut, doEditUserSettings } from './front/auth/doAuth'
import doApprove from './front/auth/approvePost'
import getLangChoice from './front/local/choiceLang'

// Привязка общих глобальных обработчиков
bindGlobalHandlers()

// Привязка общих локальных обработчиков
bindLocalHandlers()

// Регистрация пользователя
doSignIn()

// Вход пользователя
doSignUp()

// Выход пользователя
doSignOut()

// редактирование параметров пользователя
doEditUserSettings()

// Подтверждение электронной почты
doApprove()

// Выбор языка
getLangChoice()