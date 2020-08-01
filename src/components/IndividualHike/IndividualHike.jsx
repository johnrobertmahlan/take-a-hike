import React, { Component } from 'react';
import hikeService from '../../services/hikeService';
import userService from  '../../services/userService';
import styles from './IndividualHike.module.css';

class IndividualHike extends Component {

    state = {
        hike: {},
        userComments: ''
    }

    async componentDidMount() {
        const id = this.props.trailId;
        console.log(id);
        const hike = await hikeService.create({id});
        console.log('hike', hike);
        this.setState({ hike });
        //this.setState({ hike: this.state.hike.id });
    };

    handleChange = (e) => {
        e.preventDefault();
        this.setState({userComments: e.target.value});
    }

    addComment = async e => {
        e.preventDefault();
        const comment = this.state.userComments;
        console.log(comment);
        const userComment = await hikeService.createComment({content: comment, createdBy: userService.getUser()}, this.state.hike._id);
        console.log(userComment);
        // I will need to use existing state and then push comment to the appropriate array afterwards
    }

    render() {
        return(
            <div className={styles.individualHike}>
                <div className={styles.individualHikeImage} style={{backgroundImage: `url(${this.props.trails[this.props.location.state.idx].imgMedium})`, backgroundSize: 'cover'}}>
                <div className={styles.individualHikeImageLayer}>
                    <h1>{this.props.trails[this.props.location.state.idx].name}</h1>
                </div>
                </div>
                <div className={styles.individualHikeInfo}>
                    <h3>{this.props.trails[this.props.location.state.idx].location}</h3>
                    <div className={styles.individualHikeDetails}>
                        <h4>{this.props.trails[this.props.location.state.idx].summary}</h4>
                        <p>The {this.props.trails[this.props.location.state.idx].name} is {this.props.trails[this.props.location.state.idx].length} miles long, reaching a height of {this.props.trails[this.props.location.state.idx].high} feet.</p>
                        <p>The hike has an ascent of {this.props.trails[this.props.location.state.idx].ascent} feet and a descent of {Math.abs(this.props.trails[this.props.location.state.idx].descent)} feet.</p>
                    </div>
                </div>
            {/* DO SOMETHING WITH LEVEL OF DIFFICULTY */}
            <div className='comment-form'>
                <form onSubmit={this.addComment}>
                    <textarea placeholder="comments" name="comments" value={this.state.userComments} onChange={this.handleChange}></textarea>
                    <button>Submit</button>
                </form>
            </div>
            </div>
// </div>
        )
    }
}

export default IndividualHike;