import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
   
    constructor(props){
        super(props);

        this.state={
            count:0
        }
    }

    showNext=()=>{
         this.setState(preState =>({
          count:preState.count<images.length-1?preState.count+1:preState.count
       }))
    }

    showPrevious=()=>{
       this.setState(prevState=>({
        count:prevState.count>0 ? prevState.count-1 :prevState.count
       }))
    }

    render(){
       return(
         <div className="main">
            <div className="arrow"><ArrowBackIosIcon onClick={this.showPrevious} className="arrow-button" /></div>

            <div className="face-container" style={{backgroundImage:`url(${images[this.state.count].img})`}}>
    
               <h1>{images[this.state.count].title}</h1>
               <p>{images[this.state.count].subtitle}</p>
        
            </div>

            <div className="arrow"><ArrowForwardIosIcon  onClick={this.showNext} className="arrow-button" /></div>
            
         </div>
       )
        
    }  
}

export default Carousel;