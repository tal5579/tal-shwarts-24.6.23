import React from 'react';
import styles from './Search.module.scss';
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
const Search = () => {
    return (
        <div className={styles.container}>
            <TextField
                InputProps={{
                    startAdornment: (
                        <InputAdornment position={"start"}>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
        </div>
    )
}

export default Search;