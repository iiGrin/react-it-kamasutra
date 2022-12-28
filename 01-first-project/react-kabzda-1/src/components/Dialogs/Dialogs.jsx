import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to='/dialogs/1'>Dimych</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2'>Andrey</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>Sasha</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4'>Victor</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/5'>Valera</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi !</div>
                <div className={classes.message}>How is your IT-KAMASUTRA ?</div>
                <div className={classes.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs