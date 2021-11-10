import GifItem from './GifItem';

export default function GifList({ gifs }) {

    return (
        <div className="gif-list">
            {gifs.map((image) => {
                return <GifItem key={image.id} gif={image} />
            })}
        </div>
    );
};
