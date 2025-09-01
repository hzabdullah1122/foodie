import React from "react"
import card1 from "../images/card-1.png"
import drinks from "../images/soda Cans on plate.png"
import pizza from "../images/food-menu-3.png"
import burger from "../images/burger.png"
import big from "../images/big-pic.png"
import off from "../images/off-pic.png"
import { useNavigate } from "react-router-dom";
import '../App.css'


export default function Hero(params) {
    const navigate = useNavigate();

    return(
        <>
            <div class="main-2nd">
        <div id="container-3">
            <div class="section">
                <div class="icons">
                    <i class="fa-solid fa-pizza-slice "></i>
                    <h3>Maxican Pizza</h3>
                    <p> Food is any substance consumed to provide nutritional support for an organism</p>
                    <img src={pizza} alt="" width={"200px"} height={"200px"} />
                </div>
            </div>
            <div class="section">
                <div class="icons">
                    <i class="fa-solid fa-wine-bottle icon"></i>
                    <h3>Soft Drinks</h3>
                    <p> Food is any substance consumed to provide nutritional support for an organism</p>
                  <img src={drinks} alt="" width={"220px"} height={"220px"} />
                </div>

            </div>
            <div class="section">
                <div class="icons">
                    <i class="fa-solid fa-pepper-hot"></i>
                    <h3>Pepper Hot</h3>
                    <p> Food is any substance consumed to provide nutritional support for an organism</p>
                    <img src={card1} alt="" width={"200px"} height={"200px"} />
                </div>
            </div>
            <div class="section">
                <div class="icons">
                    <i class="fa-solid fa-burger"></i>
                    <h3>Burger Kingo</h3>
                    <p> Food is any substance consumed to provide nutritional support for an organism</p>
                    <img src={burger} alt="" width={"210px"} height={"210px"} />
                </div>
            </div>
        </div>
    </div>

        <div class="main-3rd">
        <div class="Banner-cmbine" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine">
            <div class="Banner">
                <img id="img-relative" src={big} alt="" />
                <img id="img-absolute" src={off} alt="" />
            </div>
            <div class="Banner-text">
                <h2>Caferio, Burgers, and Best Pizzas <span class="span">in Town!</span></h2>
                <p>The restaurants in Hangzhou also catered to many northern Chinese who had fled south from Kaifeng
                    during the Jurchen invasion of the 1120s, while it is also known that many restaurants were run by
                    families.</p>
                <ul>
                    <li class="item">Delicious & Healthy Foods</li>
                    <li class="item">Spacific Family And Kids Zone</li>
                    <li class="item">Music & Other Facilities</li>
                    <li class="item">Fastest Food Home Delivery</li>
                </ul>
                <button onClick={() => navigate("/food")} class="btn-2">Order Now</button>
            </div>
        </div>
    </div>
    </>
    )
}