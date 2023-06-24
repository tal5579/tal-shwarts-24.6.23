import React, {useState} from 'react';
import styles from './Search.module.scss';
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import axios from "../../utils/api/api";
import debounce from "lodash/debounce";

const Search = () => {
    const [result, setResult] = useState();
    const onChange = (e) => {
        const config = {
            params: {
                q: e.target.value,
            }
        }
        axios.get('cities/autocomplete', config).then(res => console.log('res', res))
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