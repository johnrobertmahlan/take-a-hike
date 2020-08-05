import React, { Component } from 'react';
import hikeService from '../../services/hikeService';
import userService from  '../../services/userService';
import Comments from '../Comments/Comments';
import styles from './IndividualHike.module.css';
import { Link } from 'react-router-dom';

class IndividualHike extends Component {

    state = {
        hike: {},
        mostRecent: '',
        hikeComments: [],
        userComments: ''
    }

    async componentDidMount() {
        const id = this.props.trailId;
        console.log(id);
        console.log(id);
        const hike = await hikeService.getHike(id);
        console.log(hike);
        if(hike) {
            console.log('hike', hike);
            this.setState({ hike })
        } else {
            const newHike =  await hikeService.create({id});
            console.log(newHike);
            this.setState({ hike: newHike })
        }
        // const hikeComments = await hikeService.getComments(id);
        // console.log(hikeComments);
        // this.setState({ hikeComments })
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
        this.setState({mostRecent: comment});
        // const userComments = {...this.state.userComments};
        // this.setState({userComments, hikeComments})
        //DO I EVEN NEED THE ABOVE 4 LINES GIVEN THE STRUCTURE OF HIKE?
        //this.setState({userComments: hikeComments}) //this really ought to be an array, but I'll worry about that later
        // I will need to use existing state and then push comment to the appropriate array afterwards
    }

    render() {
        if(this.props.user) {
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
                            <p>The {this.props.trails[this.props.location.state.idx].name} is {this.props.trails[this.props.location.state.idx].length} miles long, ascending {this.props.trails[this.props.location.state.idx].ascent} feet to reach a height of {this.props.trails[this.props.location.state.idx].high} feet. The descent is {Math.abs(this.props.trails[this.props.location.state.idx].descent)} feet.</p>
                        </div>
                    </div><br /><br />
                <div className={styles.commentForm}>
                    <h4>Feel free to leave a comment about this trail for your fellow hikers:</h4>
                    <form className={styles.Form} onSubmit={this.addComment}>
                        <br /><br />
                        <textarea cols="40" rows="10" placeholder="How was it?" name="comments" value={this.state.userComments} onChange={this.handleChange}></textarea><br />
                        <br />
                        <button className={styles.authLinks}>Share</button>
                    </form>
                </div>
                <Comments user={this.props.user} id={this.props.trailId} comments={this.state.hike.comments} mostRecent={this.state.mostRecent} oldComments={this.state.hikeComments} />
            </div>
            )
        } else {
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
                            <p>The {this.props.trails[this.props.location.state.idx].name} is {this.props.trails[this.props.location.state.idx].length} miles long, ascending {this.props.trails[this.props.location.state.idx].ascent} feet to reach a height of {this.props.trails[this.props.location.state.idx].high} feet. The descent is {Math.abs(this.props.trails[this.props.location.state.idx].descent)} feet.</p>
                        </div>
                    </div><br /><br />
                    <div className={styles.Comments}>
                        <h3>Want to see what other hikers thought of this trail? Want to share your own thoughts?</h3>
                        <div className={styles.commentNav}>
                            <Link to="/login" className={styles.authLinks}>LOG IN</Link>
                            &nbsp;&nbsp; OR &nbsp;&nbsp;
                            <Link to="/signup" className={styles.authLinks}>SIGN UP</Link>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default IndividualHike;