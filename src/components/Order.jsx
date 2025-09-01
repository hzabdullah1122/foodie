import menu1 from "../images/food-menu-1.png"
import menu2 from "../images/food-menu-2.png"
import menu3 from "../images/food-menu-3.png"
import menu4 from "../images/food-menu-4.png"
import menu5 from "../images/food-menu-5.png"
import menu6 from "../images/food-menu-6.png"
import { useNavigate } from "react-router-dom";


export default function Order(params) {
    const navigate = useNavigate();
    return(
            <div class="Food-Section">
        <div class="food-text">
            <p class="para-1">Popular Dishes</p>
            <h2>Our Delicious <span class="span">Foods</span></h2>
            <p class="para-2">Food is any substance consumed to provide nutritional support for an organism.</p>
            <div class="food-para">
                <p>All</p>
                <p>Pizza</p>
                <p>Burger</p>
                <p>Drinks</p>
                <p>Sandwich</p>
            </div>
        </div>
        <div id="food-flex">
            <div class="food-width">
                <div class="food-main">
                    {/* <img src="/images/food-menu-1.png"> */}
                    <img src={menu1} alt="" />
                    <p class="card-banner">-15%</p>
                    <button onClick={() => navigate("/food")}  class="btn-4">Order Now</button>
                    <p class="Chicken">Chicken</p>
                    <h3>Fried Chicken Unlimited</h3>
                    <div class="price">
                        <p class="price-1">Price:</p>
                        <p class="price-2">$49.00</p>
                        <del class="del" value="$69.00">$69.00</del>
                    </div>
                </div>
                <div class="food-main">
                    {/* <img src="/images/food-menu-2.png"> */}
                    <img src={menu2} alt="" />

                    <p class="card-banner">-15%</p>
                    <button onClick={() => navigate("/food")}  class="btn-4">Order Now</button>
                    <p class="Chicken">Noddles</p>
                    <h3>Burger King Whopper</h3>
                    <div class="price">
                        <p class="price-1">Price:</p>
                        <p class="price-2">$29.00</p>
                        <del class="del" value="$69.00">$39.00</del>
                    </div>
                </div>
                <div class="food-main">
                    {/* <img src="/images/food-menu-3.png"> */}
                    <img src={menu3} alt="" />

                    <p class="card-banner">-15%</p>
                    <button onClick={() => navigate("/food")}  class="btn-4">Order Now</button>
                    <p class="Chicken">Pizzas</p>
                    <h3>White Castle Pizzas</h3>
                    <div class="price">
                        <p class="price-1">Price:</p>
                        <p class="price-2">$32.00</p>
                        <del class="del" value="$69.00">$42.00</del>
                    </div>
                </div>
                <div class="food-main">
                    {/* <img src="/images/food-menu-4.png"> */}
                    <img src={menu4} alt="" />

                    <p class="card-banner">-15%</p>
                    <button onClick={() => navigate("/food")}  class="btn-4">Order Now</button>
                    <p class="Chicken">Burrito</p>
                    <h3>Bell Burrito Supreme</h3>
                    <div class="price">
                        <p class="price-1">Price:</p>
                        <p class="price-2">$19.00</p>
                        <del class="del" value="$69.00">$29.00</del>
                    </div>
                </div>
                <div class="food-main">
                    {/* <img src="/images/food-menu-5.png"> */}
                    <img src={menu5} alt="" />

                    <p class="card-banner">-15%</p>
                    <button onClick={() => navigate("/food")}  class="btn-4">Order Now</button>
                    <p class="Chicken">Nuggets</p>
                    <h3>Kung Pao Chicken BBQ</h3>
                    <div class="price">
                        <p class="price-1">Price:</p>
                        <p class="price-2">$39.00</p>
                        <del class="del" value="$69.00">$49.00</del>
                    </div>
                </div>
                <div class="food-main">
                    {/* <img src="/images/food-menu-6.png"> */}
                    <img src={menu6} alt="" />
                    <p class="card-banner">-15%</p>
                    <button onClick={() => navigate("/food")}  class="btn-4">Order Now</button>
                    <p class="Chicken">Chicken</p>
                    <h3>Wendy's Chicken</h3>
                    <div class="price">
                        <p class="price-1">Price:</p>
                        <p class="price-2">$35.00</p>
                        <del class="del" value="$69.00">$25.00</del>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}