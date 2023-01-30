import classes from './Addperson.module.css'


const Addperson=(props)=>{
    return(
        <form  className={classes['flex-form']}>
        <input type="search" onChange={props.onChange} placeholder="Name" value={props.addper}/>
        <input type="button"   onClick={props.onClick} value="+ ADD"/>
      </form>
    )
}
export default Addperson