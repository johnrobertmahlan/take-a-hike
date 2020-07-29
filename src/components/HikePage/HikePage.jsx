import React, { Component } from 'react';
import Hikes from '../Hikes/Hikes';
import styles from './HikePage.module.css';

class HikePage extends Component {

    componentDidUpdate() {
        const script = document.createElement("script");
        script.src = "../../../slider.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }

    render() {
        return(
            <div>
                <div className={`${styles.slider} slider`}>
                    <div className={`${styles.slideViewer} slideViewer`}>
                        <div className={`${styles.slideGroup} slideGroup`}>
                            {this.props.trails.map((trail, idx) => <Hikes groupStyles={styles.group} trail={trail} idx={idx} />)}
                        </div>
                    </div>
                <div className="slideButtons"></div>
                </div>
            </div>
        )
    };
};

export default HikePage;