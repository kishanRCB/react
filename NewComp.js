import React, {Component} from "react";

class NewComp extends Component{
    constructor(props){
        super(props);
        this.state={
            message: "hello cse students",
            sub:"Click"
        };
    }

    styles={
        fontstyle:"italic",
        color:"red"
    };

    Buttonchange=()=>{
         this.setState({
             message:"Thank you ! for the click",
        })
    }

    render(){
          return(
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.Buttonchange}>
                    {this.state.sub}
                </button>
            </div>
        );
    }
}

export default NewComp;
