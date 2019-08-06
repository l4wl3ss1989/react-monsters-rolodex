import React from 'react';

import { Card } from '../card/card.component';

import styles from './card-list.module.scss';

export const CardList = props => (
    <div className={styles.CardList}>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
)