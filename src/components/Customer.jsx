import avatar1 from "../images/avatar-1.jpg"
import avatar2 from "../images/avatar-2.jpg"
import avatar3 from "../images/avatar-3.jpg"
import { useNavigate } from "react-router-dom";


export default function Customer(params) {
    const navigate = useNavigate();
    return(
        <>
        <div class="customer">
        <div>
            <div class="food-text">
                <p class="para-1">Testimonials</p>
                <h2>Our Customer <span class="span">Reveiws</span></h2>
                <p class="para-2">Food is any substance consumed to provide nutritional support for an organism.</p>
            </div>
        </div>
        <div class="customer-box" data-aos-offset="300" data-aos="zoom-in-right" data-aos-duration="1000">
            <div class="customer-width">
                <div class="customer-text">
                    <div class="customer-card-1">
                        <div class="customer-flex">
                            <div class="customer-img">
                                {/* <img src="/images/avatar-1.jpg"> */}
                                <img src={avatar1} alt="" />
                            </div>
                            <div class="customer-text-2">
                                <h3>Robert William</h3>
                                <p>CEO King Fisher</p>
                            </div>
                        </div>
                        <div class="customer-para">
                            <p>"I would be lost without restaurant. I would like to personally thank you for your
                                outstanding product."</p>
                        </div>
                    </div>
                </div>
                <div class="customer-text">
                    <div class="customer-card-1">
                        <div class="customer-flex">
                            <div class="customer-img">
                                {/* <img src="/images/avatar-2.jpg"> */}
                                <img src={avatar2} alt="" />
                            </div>
                            <div class="customer-text-2">
                                <h3>Thomas Joseph</h3>
                                <p>CEO Getforce</p>
                            </div>
                        </div>
                        <div class="customer-para">
                            <p>"I would be lost without restaurant. I would like to personally thank you for your
                                outstanding product."</p>
                        </div>
                    </div>
                </div>
                <div class="customer-text">
                    <div class="customer-card-1">
                        <div class="customer-flex">
                            <div class="customer-img">
                                {/* <img src="/images/avatar-3.jpg"> */}
                                <img src={avatar3} alt="" />
                            </div>
                            <div class="customer-text-2">
                                <h3>Charles Richard</h3>
                                <p>CEO Angela</p>
                            </div>
                        </div>
                        <div class="customer-para">
                            <p>"I would be lost without restaurant. I would like to personally thank you for your
                                outstanding product."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="menu">
        <div class="menu-container">
            <div class="menu-1st">
                <div class="menu-order">
                    <p class="menu-off">50% OFF NOW! </p>
                    <p class="menu-bg">Discount For Delicious Tasty Burgers!</p>
                    <p class="menu-sm">Sale off 50% only this week</p>
                    <button onClick={() => navigate("/food")} 
                    class="btn-2">Order Now</button>
                </div>
            </div>
            <div class="menu-2nd">
                <div class="menu-flex">
                    <div class="menu-flex-1">
                        <div class="menu-inside-1">
                            <div class="menu-item-2nd">
                                <h3>Delicious Pizza</h3>
                                <p>50% Off Now</p>
                                {/* <P></P> */}
                                <button onClick={()=> navigate("/food")} class="btn-3">Order NOw</button>
                            </div>
                        </div>
                        <div class="menu-inside-2">
                            <div class="menu-item-2nd">
                                <h3>American Burger</h3>
                                {/* <P>50% Off Now</P> */}
                                <p>50% Off Now</p>
                                <button onClick={()=> navigate("/food")} class="btn-3">Order NOw</button>
                            </div>
                        </div>

                    </div>
                    <div class="menu-flex-2">
                        <div class="menu-item-3rd">
                            <h3>Tasty Buzzed Pizza</h3>
                            <p>50% Off Now only this week</p>
                            <button onClick={()=> navigate("/food")}  class="btn-3">Order NOw</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div id="last-section">
        <div class="food-text">
            <p class="para-1">Latest Blog Posts</p>
            <h2>This is All About<span class="span">Foods!</span></h2>
            <p class="para-2">Food is any substance consumed to provide nutritional support for an organism.</p>
        </div>
        <div class="last-sec">
            <div class="last-flex">
                <div class="last-1">
                    <div class="last-img">
                    </div>
                    <button class="btn-5">Pizza</button>
                    <div class="last-text">
                        <div class="text-flex">
                            <p>Jan 01 2022</p>
                            <p>Abdullah Iqbal</p>
                        </div>
                        <a href="#">What Do You Think About Cheese Pizza Recipes?</a>
                        <h6>Financial experts support or help you to to find out which way you can raise your funds
                            more...</h6>
                        <p>Read More</p>
                    </div>
                </div>
                <div class="last-1">
                    <div class="last-img-2">
                    </div>
                    <button class="btn-5">Burger</button>
                    <div class="last-text">
                        <div class="text-flex">
                            <p>Jan 01 2022</p>
                            <p>Ahmad Farooq</p>
                        </div>
                        <a href="#">Making Chicken Strips With New Delicious Ingridents.</a>
                        <h6>Financial experts support or help you to to find out which way you can raise your funds
                            more...</h6>
                        <p>Read More</p>
                    </div>
                </div>
                <div class="last-1">
                    <div class="last-img-3">
                    </div>
                    <button class="btn-5">Chicken</button>
                    <div class="last-text">
                        <div class="text-flex">
                            <p>Jan 01 2022</p>
                            <p>Usama Basher</p>
                        </div>
                        <a href="#">Innovative Hot Chessyraw Pasta Make Creator Fact.</a>
                        <h6>Financial experts support or help you to to find out which way you can raise your funds
                            more...</h6>
                        <p>Read More</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </>
    )
}