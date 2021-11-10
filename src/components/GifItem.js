export default function GifItem({ gif }) {
    return (
        <li>
            <img src={gif.images.downsized.url} alt={gif.title} />
        </li>
    )
}
