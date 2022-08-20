import React from 'react';
import styles from './style/card.module.css';
const Card=({width, height, imageUrl} : {width: any, height: any, imageUrl: string})=>{
    return (
        <div className={styles.card} 
        style={{height: height, width: width}}
        >
            <img src={imageUrl}></img>
        </div>

    )
}

export default Card;