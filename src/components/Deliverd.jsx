import banner from "../images/cta-banner.png"
import sale from "../images/sale-shape.png"
import deliveryboy from "../images/delivery-boy.svg"
import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom";



export default function Delivery(params) {
    const navigate = useNavigate();

    return(
        <>
        <div class="img-2nd">
        <div class="big">
            <div class="big-1">
                <h2>The Foodie Have Excellent Ofs <span class="span">Quality Burgers!</span> </h2>
                <p>The restaurants in Hangzhou also catered to many northern Chinese who had fled south from Kaifeng
                    during the Jurchen invasion of the 1120s, while it is also known that many restaurants were run by
                    families.</p>
                <button onClick={() => navigate("/food")} class="btn-2">Order Now</button>
            </div>
            <div class="big-2" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <img id="img-big" src={banner} alt="img" width={"100%"} height={"100%"}/>
                <img id="img-small" src={sale} alt="img" />
            </div>
        </div>
    </div>


    <div class="delivery">
        <div class="delivery-main">
            <div class="delivery-1st">
                <h2>A Moments Of Delivered On <span class="span">Right Time</span> & Place</h2>
                <p>The restaurants in Hangzhou also catered to many northern Chinese who had fled south from Kaifeng
                    during the Jurchen invasion of the 1120s, while it is also known that many restaurants were run by
                    families.</p>
                <button onClick={() => navigate("/food")} class="btn-2">Order Now</button>
            </div>
            <div class="delivery-2nd">
                <img src={deliveryboy} alt="" />
            </div>
        </div>
    </div>
</>
    )
}