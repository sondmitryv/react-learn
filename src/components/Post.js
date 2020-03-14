import React, {Component} from 'react';
import User from './User';

export default class Post extends Component{
    render(){
        return(
            <div className="post">
                <User
                    src="data:image/jpeg;base64,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"
                    alt="prince"
                    name="Harry_the_prince"
                    />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    lorem ipsum
                </div>
            </div>
        )
    }
}