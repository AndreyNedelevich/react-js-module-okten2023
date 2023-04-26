import {Component} from "react";

class Comment extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {id,name, email, body} = this.props.comment;
        return(
            <div>
                <div>id:  {id}</div>
                <div>name: {name}</div>
                <div>email: {email}</div>
                <div>body: {body}</div>
            </div>
        )
    }
}

export {Comment}