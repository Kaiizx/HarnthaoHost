import classes from './Bar.module.css'
import BillIcon from './icon/BillIcon'
import PersonIcon from './icon/PersonIcon'
import Number from './icon/Number'
const Bar=(props)=>{
    return (
        <div className={classes.container}>
            <div className={classes.nicon}><Number/></div>

            <div className={classes.bicon}>{!props.status ?<BillIcon/>:<PersonIcon/> }</div>

            <h2>$</h2>
            <div className={classes.bicon}>{props.status ?<BillIcon/>:<PersonIcon/> }</div>
        </div>
    )
}

export default Bar