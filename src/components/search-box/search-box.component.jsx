import React from 'react'

import styles from './search-box.module.scss';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input className={styles.SearchBox}
        type="search" 
        placeholder={placeholder}
        onChange={handleChange}
    />
)