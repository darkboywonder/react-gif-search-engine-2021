import { useState } from "react";
import GifList from "./components/GifList";
import SearchBar from "./components/SearchBar";

export default function App() {
    const [gifs, setGifs] = useState([
        {
            id: 1,
            url: 'http://fakeimg.pl/300/'
        },
        {
            id: 2,
            url: 'http://fakeimg.pl/300/'
        },
        {
            id: 3,
            url: 'http://fakeimg.pl/300/'
        }
    ]);

    const handleOnTermChange = (term) => console.log(term);

    return (
        <>
            <SearchBar onTermChange={handleOnTermChange} />
            <GifList gifs={gifs} />
        </>
    )
}
