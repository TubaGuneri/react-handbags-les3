

// label= 'Best seller'
// image={Bag1}
// title = 'The handy bag'
// price = '400'
function Product({label, image, title, price}) {
    return (
        <>
            <article>
                    <span>{label}</span>
                    <img src = {image} alt= 'image product' />
                    <p>{title}</p>
                    <h4>€{price},-</h4>
            </article>
        </>
    )
}

export default Product;
