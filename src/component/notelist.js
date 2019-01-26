import React,{Component} from 'react';
import Notes from './notes';
import NoteBody from './notebody';

class NoteList extends Component{

    constructor(props){
        super(props);
        this.state ={
            msgBody:null
        }
        this.clicked = this.clicked.bind(this);
    }

    clicked() {
        this.setState({
            msgBody: "New Body Message"
        })
    }

    render(){
        return(
            <div>
                <div className="notelist"  onClick={this.clicked}>
                    <Notes header="Note Title 1"></Notes>
                    <Notes header="Note Title 2"></Notes>
                </div>
                <div>
                    <NoteBody msgBody={this.state.msgBody}></NoteBody>
                </div>
            </div>
        );
    }
}

export default NoteList;