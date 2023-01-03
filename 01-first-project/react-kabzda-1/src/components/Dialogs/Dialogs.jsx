import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    // data
    let dialogs = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Victor' },
        { id: 6, name: 'Valera' }
    ]
    // data
    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your IT-KAMASUTRA ?' },
        { id: 3, message: 'Yo !!!' },
        { id: 4, message: 'Yo !!!' },
        { id: 5, message: 'Yo !!!' },
        { id: 6, message: 'Yo !!!' }
    ]

    // [
    //     <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
    //     <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
    //     <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
    // ]

    // auto adding dialog items from dialogData to dialogElements
    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    // auto adding  message item from messageData to messagesElements
    let messagesElements = messages.map(message => <Message message={message.message} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs