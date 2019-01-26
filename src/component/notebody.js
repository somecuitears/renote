import React,{Component} from 'react';

class NoteBody extends Component{

    constructor(props){
        super(props);
        this.state = {
            msgBody: null
        }
    }

    componentDidMount(){
        this.setState({
            msgBody:this.props.msgBody
        })
    }

    render(){
        return(
            <div>
                Message body: {this.state.msgBody}
            </div>
        );
    }
}

export default NoteBody;