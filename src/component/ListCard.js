import classes from './ListCard.module.css'

const ListCard=(props)=>{
    return(
        <div className={classes.container}>
            
            <p className={classes.text} >{props.id}</p>
            <p className={classes.text}>{props.name}</p>
            <p className={classes.text}>{props.price} ฿</p>
            <p className={classes.text}>{props.person}</p>
                            
        </div>
    )
}
export default ListCard