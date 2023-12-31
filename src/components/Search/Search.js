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
import {toast} from "react-toastify";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {useAppData} from "../../redux/selectors/selectors";
import {onlyEnglishRegExp} from "../../utils/common";

const Search = () => {
    const dispatch = useDispatch();
    const { siteLightTheme } = useAppData();
    const [textInput, setTextInput] = useState("");
    const theme = createTheme({
        palette: {
            type: siteLightTheme ? 'light' : 'dark'
        }
    });
    const onChange = (e) => {
        const input = e.target?.value;
        if(!onlyEnglishRegExp.test(input)){
            toast(`Only English characters allowed`);
            return;
        }
        const config = {
            params: {
                q: input,
            }
        }
        axios.get('locations/v1/cities/autocomplete', config)
            .then(res => {
                if (res.data?.length) {
                    dispatch({
                        type: actions.SetLocationKey,
                        payload: res.data[0]?.Key
                    });
                    dispatch({
                        type: actions.SetLocationName,
                        payload: res.data[0]?.LocalizedName
                    });
                }
            })
            .catch(err => {
                toast(`Something wrong happend: ${err.message}`);
            });
    };

    const debounceOnChange = debounce(onChange, 500);

    return (
        <div className={styles.container}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
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
                    onChange={debounceOnChange}
                />
            </ThemeProvider>
        </div>
    )
}

export default Search;