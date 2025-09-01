import '../App.css'

export default function Footer(params) {
    return (
        <>
            <div id="footer">
                <div class="footer-sec">
                    <div class="footer-text">
                        <h2>Foodie</h2>
                        <p>Financial experts support or help you to to find out which way you can raise your funds more.</p>
                        <button class="btn-3">Read More</button>
                    </div>
                    <div class="footer-text">
                        <h2>Contact Info</h2>
                        <p>0313-5225423</p>
                        <p>abdullahmalik@gmail.com</p>
                        <p>Uni chowk, Goheer Town,Street No;1 Bahwalpur</p>
                    </div>
                    <div class="footer-text">
                        <h2>Opening Hours</h2>
                        <p>Monday-Friday 08:00-22:00</p>
                        <p>Thursday 4pm-Till Midnight</p>
                        <p>Saturday 10:00-16:00</p>
                    </div>
                    <div class="footer-text">
                        <div class="form">
                            <h2>Book a Table</h2>
                            <div class="input-wallpaper">
                                <input class="input" type="text" placeholder="Your Name" />
                                <input class="input" type="text" placeholder="Your Email" />
                                <select class="input" id="input" name="Total Person" placeholder="Select Person">
                                    <option class="input" value="Person">Person</option>
                                    <option class="input" value="Person-2">Person-2</option>
                                    <option class="input" value="Person-3">Person-3</option>
                                    <option class="input" value="Person-4">Person-4</option>
                                    <option class="input" value="Person-5">Person-5</option>
                                </select>
                                <input class="input" type="date" />
                                <textarea name="message" required="" placeholder="Message" aria-label="Message"
                                    class="input-field" />
                                <button class="btn-6">Book a Table</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="last-name">
                <p>© 2024 <a href="https://www.linkedin.com/in/abdullah-iqbal-b5709528b/">Abdullah Iqbal</a> All Rights
                    Reserved.</p>
            </div>
        </>

    )
}