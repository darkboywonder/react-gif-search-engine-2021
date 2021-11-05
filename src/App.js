import SearchBar from "./components/SearchBar";

export default function App() {
    const handleOnTermChange = (term) => console.log(term);

    return <SearchBar onTermChange={handleOnTermChange} />;
}
