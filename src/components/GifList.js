import GifItem from './GifItem';

export default function GifList({ gifs }) {

    return (
        <ul>
            {gifs.map((image) => {
                return <GifItem key={image.id} gif={image} />
            })}
        </ul>
    );
};
