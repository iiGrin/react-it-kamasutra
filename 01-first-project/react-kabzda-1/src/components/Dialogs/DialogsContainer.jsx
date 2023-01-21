import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/DialogsReducer'
import StoreContext from '../../StoreContext'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState().dialogsPage

                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }

                    let onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyCreator(body))
                    }

                    return (

                        <Dialogs
                            updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={state}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer