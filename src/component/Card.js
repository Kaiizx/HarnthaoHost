import classes from './Card.module.css'
import Track from './Track'
import List from './List'
import ListCard from './ListCard'
import Addbutton from './AddButton'
import PersonIcon from './icon/PersonIcon'
import Bar from './Bar'
import AddCard from './AddCard'
import { useState } from 'react'
const Card=(props)=>{
    const [Add,setAdd]=useState(false)
    const [toggle,setToggle]=useState(false)
    const onClickAdd=()=>{
        setAdd(true)
    }
    const onClicktoggle=()=>{
        setToggle(!toggle)
    }
    const onClose=()=>{
        setAdd(false)
    }
    const sum = props.order.reduce((acc, obj) => acc + obj.price, 0);
    const personNum=Object.keys(props.person).length
    const orderlist=props.order.map(order=><ListCard key ={order.id}id={order.id} name={order.name} price={order.price} person={order.person}/>)
    const personlist=props.person.map(order=><ListCard key ={order.id}id={order.id} name={order.name} price={order.cost} person={order.piece}/>)
   
    return(
              
        <section className={classes.summary}>
            {Add&&<AddCard onClose={onClose}/>}
            <Track amount = {props.amount} person={personNum} total={sum}/>
            <Bar status={toggle}/>
            <div className={classes.scroller}>
             {!toggle ? orderlist: personlist}
            </div>
            <div className={classes.butcon}>
            <div className={classes.but} >
            <Addbutton onClick={onClickAdd}>Add</Addbutton>
            </div>
            <div className={classes.but}>
            <Addbutton onClick={onClicktoggle}>Toggle</Addbutton>
            </div>
            </div>

          
            

        </section>  
    )
}
export default Card