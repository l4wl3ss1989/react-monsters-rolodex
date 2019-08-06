import React from 'react';

import styles from  './card.module.scss';

export const Card = props => (
    <div className={styles.Card}>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
        <h1>{props.monster.name}</h1>
        <h2>{props.monster.email}</h2>
    </div>
)