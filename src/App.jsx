import './App.css'

import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";
import Bag1 from "./assets/bag_1.png";
import Bag2 from "./assets/bag_2.png";
import Bag3 from "./assets/bag_3.png";
import Bag4 from "./assets/bag_4.png";
import Brand from "./assets/brand.png";
import Designers from "./assets/our_story.png";
import Tile from "./components/Tile.jsx";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>

            <nav>

                <Button
                    buttonText='to the collection'
                    onClick={() => console.log('To the collection')}/>
                <Button

                    buttonText='shop all bags'
                    onClick={() => console.log('shop all bags')}/>
                <Button disabled={true}

                        buttonText='pre-orders'
                        onClick={() => console.log('pre-orders')}/>

            </nav>

            <main>
                <Product
                    label='Best seller'
                    image={Bag1}
                    title='The handy bag'
                    price='400'
                />

                <Product
                    label='Best seller'
                    image={Bag2}
                    title='The stylish bag'
                    price='250'
                />

                <Product
                    label='New collection'
                    image={Bag3}
                    title='The simple bag'
                    price='300'
                />
                <Product
                    label='New collection'
                    image={Bag4}
                    title='The trendy bag'
                    price='150'
                />
            </main>

            {/*<footer>
                <section>
                    <h2>The Brand</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                </section>

                <section>
                    <img src={Brand} alt='product brand'/>
                </section>
                <section>
                    <img src={Designers} alt='our story'/>
                </section>
                <section>
                    <h2>Our Story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                </section>

            </footer>*/}

            <footer>
                <Tile
                    title="The Brand"
                    paragraphs={[
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    ]}
                />

                <Tile
                    image={Brand}
                    alt="product brand"
                />

                <Tile
                    image={Designers}
                    alt="our story"
                />

                <Tile
                    title="Our Story"
                    paragraphs={[
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    ]}
                />
            </footer>

        </>
    )
}

export default App
