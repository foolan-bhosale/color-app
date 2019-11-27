import React from 'react';
import {withStyles} from "@material-ui/styles";
import DeleteIcon from '@material-ui/icons/Delete';
const styles={
    root:{
        width:"20%",
        height: "25%",
        margin:"0 auto",
        position:"relative",
        display: "inline-block",
        cursor:"pointer",
        marginBottom:"-3.5px"
},
boxContent:{
    position: "absolute",
    padding: "10px",
    width: "100%",
    left:"0px",
    bottom:"0px",
    color:"rgba(0,0,0,0.5)",
    letterSpacing:"1px",
    textTransform: "uppercase",
    fontSize:"12px",
    display:"flex",
    justifyContent:"space-between",
    "&:hover svg":{
        color:"white",
        transform:"scale(1.3)"
    }
},
deleteIcon:{
    transition:"all o.3s ease-in-out"
}
}


 function DraggableColorBox(props){
     const {classes,color,name,handleClick} = props;
    return(
        <div
        className={classes.root}
         style={{backgroundColor: color}}>
         <div className={classes.boxContent}>
          <span>{name}</span>
          <DeleteIcon className={classes.deleteIcon}  onClick={handleClick}/>
         </div>
        
        </div>

    )        
    
}

export default withStyles(styles)(DraggableColorBox);