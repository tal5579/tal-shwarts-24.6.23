import React, {useState} from 'react';
import styles from './Search.module.scss';
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import axios from "../../utils/api/api";
import debounce from "lodash/debounce";
import {useDispatch} from "react-redux";
import {actions} from "../../redux/actions/actions";

const Search = () => {
    const dispatch = useDispatch();
    const onChange = (e) => {
        const config = {
            params: {
                q: e.target.value,
            }
        }
        axios.get('locations/v1/cities/autocomplete', config)
            .then(res => {
                dispatch({type: actions.SetSearchData, payload: res?.data});
                dispatch({type: actions.SetLocationKey, payload: res?.data[0]?.Key});
            });
    };

    const debounceOnChange = debounce(onChange, 500);
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
                    ),
                    onChange: (e) => debounceOnChange(e)
                }}
            />
        </div>
    )
}

export default Search;