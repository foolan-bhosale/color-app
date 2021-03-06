import React, { Component } from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";
import {Link } from "react-router-dom";
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/core/styles';
import './ColorBox.css';


const styles ={
    ColorBox:{
        width:"20%",
        height: props =>props.showingFullPalette? "25%":"50%",
        margin:"0 auto",
        position:"relative",
        display: "inline-block",
        cursor:"pointer",
        marginBottom:"-3.5px",
        "&:hover button":{
            opacity:1
        }
    },    
    copyText:{
        color:props =>
        chroma(props.background).luminance() >=0.7 ? "black" :"white"
    },
    colorName:{
        color:props =>
        chroma(props.background).luminance() <= 0.08? "white" :"black"

    },
    seeMore:{
        color:props =>
        chroma(props.background).luminance() >=0.7 ? "black" :"white",

        background:"lightgrey",
        position: "absolute",
        border: "none",
        right:"0px",
        bottom: "0px",
        color:"black",
        width:"60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase"
    },
    copyButton:{
        color:props =>
        chroma(props.background).luminance() >=0.7 ? "white" :"black",

        width:"100px",
        height:"30px",
        position: "absolute",
        display: "inline-block",
        top:"40%",
        left:"50%",
        marginLeft:"-50px",
        marginRight:"-15px",
        textAlign:"center",
        outline: "none",
        background: "lightgrey",
        fontSize: "1rem",
        lineHeight: "30px",
       
        
        textTransform: "uppercase",
        border: "none",
        textDecoration:"none",
        opacity:0

}
}
class ColorBox extends Component{
    constructor(props){
        super(props);
        this.state = {copied:false};
        this.changeCopyState = this.changeCopyState.bind(this);
    }

    changeCopyState(){
        this.setState({copied:true},() =>{
            setTimeout(() => this.setState({copied:false}), 1500)
        })
    }
    render(){
        const  {name, background,moreUrl,showingFullPalette, classes} = this.props;
        const { copied } = this.state;
                    
            return(
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
            <div style={{background}} className={classes.ColorBox}>
            <div style={{background}}
             className={`copy-overlay ${copied && "show"}`} />
                <div className={`copy-msg ${copied && "show"}`}>
                 <h1>Copied!</h1>
                 <p className={classes.copyText}>{this.props.background}</p>
                </div>
              <div className="copy-container">
                <div className="box-content">
                   <span className={classes.colorName}>{name}</span>
                </div>
                   <button className={classes.copyButton}>Copy</button>
              </div>
              {showingFullPalette && (
              <Link to={moreUrl} onClick={e=>e.stopPropagation()}>
                 <span className={classes.seeMore}>More</span>
                 </Link>
              )}
            </div>
            </CopyToClipboard>
        )
    }
}
export default  withStyles(styles)(ColorBox);

