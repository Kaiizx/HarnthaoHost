import classes from './Card.module.css'
import Track from './Track'
import List from './List'
import ListCard from './ListCard'
import Addbutton from './AddButton'
const Card=(props)=>{


    const orderlist=props.order.map(order=><ListCard id={order.id} name={order.name} price={order.price}/>)
    return(
        
        <section className={classes.summary}>
            <Track/>
            <div className={classes.scroller}>
             {orderlist}
            </div>
            <div className={classes.butcon}>
            <div className={classes.but} >
            <Addbutton>Add</Addbutton>
            </div>
            <div className={classes.but}>
            <Addbutton>Toggle</Addbutton>
            </div>
            </div>

          
            

        </section>  
    )
}
export default Card