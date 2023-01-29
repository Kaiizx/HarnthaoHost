import classes from './ListCard.module.css'

const ListCard=(props)=>{
    return(
        <div className={classes.container}>
            <h2>{props.id}</h2>
            <h2>{props.name}</h2>
            <h2>{props.price} ฿</h2>
        </div>
    )
}
export default ListCard