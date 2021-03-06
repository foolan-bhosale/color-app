import React, { Component } from 'react';
import {Link} from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root:{
        backgroundColor:"blue",
        height:"150vh",
        display:"flex",
        alignItems:"flex-start",
        justifyContent:"center"

    },
    container:{
        width:"50%",
        display:"flex",
        alignItems:"flex-start",
        flexDirection:"column",
        flexWrap:"wrap",
        
    },
    nav:{
        display:"flex",
        justifyContent:"space-between",
        width:"100%",
        color:"white",
        alighItems:"center",
        "& a":{
            color:"white",
        alighItems:"center",
        display:"flex"
            
        }

    },
    palettes:{
        boxSizing:"border-box",
        display:"grid",
        width:"100%",
        gridTemplateColumns:"repeat(3,30%)",
        gridGap:"5%"

    }
}
class PaletteList extends Component{

    goToPalette(id){
        this.props.history.push(`/palette/${id}`)
    }
    render(){
        const { palettes,classes } = this.props;
        return(
            <div className={classes.root}>
           <div className = {classes.container}>
           <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to='/palette/new'> Create Palette</Link>
           </nav>
           <div className={classes.palettes}>
             {
                 palettes.map(
                     palette => 
                     ( < MiniPalette{...palette} 
                       handleClick = {() => this.goToPalette(palette.id)} />
                     ))
            }
           </div>
           </div>            
            </div>
        )
    }
}
export default withStyles(styles) (PaletteList);