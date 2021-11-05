import { useEffect, useState } from "react";

export default function SearchBar({ onTermChange }) {
    const [term, setTerm] = useState('');

    useEffect(() => {
        onTermChange(term);
    }, [term, onTermChange]);

    return (
        <div className="search">
            <input onChange={(event) => setTerm(event.target.value)} />
        </div>
    );
}
