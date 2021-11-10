import { useCallback, useState } from "react";
import GifList from "./components/GifList";
import SearchBar from "./components/SearchBar";
import request from "superagent";
import "./styles/app.css";

export default function App() {
    const [gifs, setGifs] = useState([]);

    const handleOnTermChange = useCallback((term) => {
        const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;

        request.get(url, function(err, res) {
            setGifs(res.body.data);
        });
    }, []);

    return (
        <>
            <SearchBar onTermChange={handleOnTermChange} />
            <GifList gifs={gifs} />
        </>
    )
}
