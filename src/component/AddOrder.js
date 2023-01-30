import classes from './Addperson.module.css'


const AddOrder=(props)=>{
    return(
        <form  className={classes['flex-form']}>
        <input type="search" onChange={props.onChangeor} placeholder="Order" value={props.addor}/>
        <input type="search" onChange={props.onChangepr} placeholder="Price" value={props.addpr}/>
        <input type="button"   onClick={props.onClickor} value="+ ADD"/>
      </form>
    )
}
export default AddOrder