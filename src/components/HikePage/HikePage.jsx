import React, { Component } from 'react';
import Hikes from '../Hikes/Hikes';
import styles from './HikePage.module.css';


class HikePage extends Component {

    componentDidMount() {
        const script = document.createElement("script");
        script.src = "../../../slider.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }

    componentDidUpdate() {
        const script = document.createElement("script");
        script.src = "../../../slider.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }

    // componentWillUnmount() {
    //     const script = document.createElement("script");
    //     script.src = "../../slider.js";
    // }

    render() {
        return(
                    <div className={`${styles.slider} slider`} style={{backgroundImage: "url(https://i.imgur.com/KJ63hsy.jpg)"}}>
                        <div className={`${styles.slideViewer} slideViewer`}>
                            <div className={`${styles.slideGroup} slideGroup`}>
                                {this.props.trails.map((trail, idx) => <Hikes groupStyles={styles.group} trail={trail} idx={idx} />)}
                            </div>
                        </div>
                        <div className={`${styles.slideButtons} slideButtons`}><br />
                        </div>
                    </div>
        )
    };
};

export default HikePage;