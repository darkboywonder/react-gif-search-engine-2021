export default function GifItem({ gif }) {
    return (
        <li>
            <img src={gif.url} alt="Alt Text" />
        </li>
    )
}
