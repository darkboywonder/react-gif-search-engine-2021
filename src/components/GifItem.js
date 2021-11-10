export default function GifItem({ gif }) {
    return (
        <div className="gif-item">
            <img src={gif.images.downsized.url} alt={gif.title} />
        </div>
    )
}
