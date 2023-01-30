import classes from './Track.module.css'

const Addbutton=(props)=>{
    const click=()=>{
        console.log('in')
    }
    return(
    
            <button className={classes.button} onClick={props.onClick}> {props.children} </button>
     
    )
}
export default Addbutton