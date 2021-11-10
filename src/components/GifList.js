import GifItem from './GifItem';

export default function GifList({ gifs, onGifSelect }) {

    return (
        <div className="gif-list">
            {gifs.map((image) => {
                return <GifItem key={image.id} gif={image} onGifSelect={onGifSelect} />
            })}
        </div>
    );
};
