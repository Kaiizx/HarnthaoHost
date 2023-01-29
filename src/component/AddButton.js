import classes from './Track.module.css'

const Addbutton=(props)=>{
    return(
        <div className={classes.button}>
            <button > {props.children} </button>
        </div>
    )
}
export default Addbutton