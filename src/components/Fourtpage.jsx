import star from "../assets/stars.png"
import arrow from "../assets/arrow.png"

const Fourtpage = () => {
  return (
    <div id="fourth">
    <div className="flex">
    <h1>Reviews</h1>
    {/* <img className="arrow" src={arrow} alt="right arrow" /> */}
    {/* <img src={"https://static.tildacdn.com/tild3837-6361-4237-b631-663236353432/Group_15.svg"} alt="" /> */}
    </div>
      
      <div className="divs-2">
        <div className="div-2">
          <div className="img2">
          <img src={star} alt="fish" />
          </div>
          <h4>Best app ever</h4>
          <p>I love this app because i can do whatever i want and any picture i want</p>
          <span>Little little chicken dinner</span>
        </div>

        <div className="div-2">
          <div className="img2">
          <img src={star} alt="fish" />
          </div>
          <h4>Outstanding</h4>
          <p>Thanks to the developers of this app. They made my day. Very intertaining.</p>
          <span>Jomensonline</span>
        </div>

        <div className="div-2">
          <div className="img2">
          <img src={star} alt="fish" />
          </div>
          <h4>Hilarious</h4>
          <p>It's amazing to use. Got my grandpa to sing with this thing.</p>
          <span>Read</span>
        </div>

        <div className="div-2">
          <div className="img2">
          <img src={star} alt="fish" />
          </div>
          <h4>Brilliant</h4>
          <p>Love this app!! So amazing to bring to life photos, especially of loved ones passed away</p>
          <span>BridgetAsiya</span>
        </div>

        <div className="div-2">
          <div className="img2">
          <img src={star} alt="fish" />
          </div>
          <h4>Brilliant app</h4>
          <p>I've had so much fun with this app everyone loves it when they see the videos</p>
          <span>Stefanie</span>
        </div>

        <div className="div-2">
          <div className="img2">
          <img src={star} alt="fish" />
          </div>
          <h4>Read this</h4>
          <p>This is a very creative app i love it so much i can't stop using it!</p>
          <span>Jomensonline</span>
        </div>

      </div>
    </div>
  )
}

export default Fourtpage