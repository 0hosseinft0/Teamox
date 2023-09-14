import React from 'react';
import styles from "../Landing/Card.module.css";
const Card = (props) => {

    const {image , name , introduce ,mozoh} = props;
    return (
        <div>
                <div className={styles.container}>
                <div className={styles.icon}><img src={image} alt='cardimg' /></div>
                <h3> {name} </h3>
                <h2>{mozoh}</h2>
                <p> { introduce } </p>
            </div>
        </div>
    );
};

export default Card;