import {Component} from "react";
import {allService} from "../../services/axiose.service";
import {Comment} from "./Comment";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        }

    }

    componentDidMount() {
        allService.getAllComments().then(value => value.data).then(value => this.setState({comments:value}))
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment=><Comment key={comment.id}comment={comment}/>)}
            </div>
        )
    }
}

export {Comments}