
function Tile({ title, image, paragraphs }) {
    return (
        <section>
            {title && <h2>{title}</h2>}
            {image && <img src={image} alt={title || 'Image'} />}
            {paragraphs && paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </section>
    );
}


    export default Tile;
