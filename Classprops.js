import React, {Component} from "react";

export class Classprops extends Component{
    render(){
        return(
            <div>
                <h1>cbkpc Kle chikodi</h1> {this.props.name} from{this.props.place}
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default Classprops;