import { useEffect, useState } from "react";

export default function SearchBar({ onTermChange }) {
    const [term, setTerm] = useState('');

    useEffect(() => {
        onTermChange(term);
    }, [term, onTermChange]);

    return (
        <div className="search">
            <input placeholder="Enter text to search for gifs!" onChange={(event) => setTerm(event.target.value)} />
        </div>
    );
}
