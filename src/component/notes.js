import React,{Component} from 'react';

class Notes extends Component{

    constructor(props){
        super(props);
        const dat = new Date();
        this.state = {
            header: this.props.header,
            date: dat.getDate() + " " + dat.getDay() + " " + dat.getFullYear(),
        }
    }

    render(){
        return(
           <div className="note">
                <h5>{this.state.header}</h5>
                <h6>{this.state.date}</h6>
           </div>
        );
    }
}

export default Notes;