import { useCallback, useState } from "react";
import GifList from "./components/GifList";
import GifModal from "./components/GifModal";
import SearchBar from "./components/SearchBar";
import request from "superagent";
import "./styles/app.css";

export default function App() {
    const [gifs, setGifs] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedGif, setSelectedGif] = useState(null);

    const handleOnTermChange = useCallback((term) => {
        const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;

        request.get(url, function(err, res) {
            setGifs(res.body.data);
        });
    }, []);


    const closeModal = () => {
        setSelectedGif(null);
        setModalIsOpen(false);
    }

    const openModal = (gif) => {
        setSelectedGif(gif);
        setModalIsOpen(true);
    }

    return (
        <>
            <SearchBar onTermChange={handleOnTermChange} />
            <GifList gifs={gifs} onGifSelect={(selectedGif) => openModal(selectedGif)} />
            <GifModal
                modalIsOpen={modalIsOpen}
                selectedGif={selectedGif}
                onRequestClose={() => closeModal()}
            />
        </>
    )
}
