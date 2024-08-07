import fish from "../assets/fish.png"

const ThirdPage = () => {
  return (
    <div id="third">
      <h1>Media Coverage</h1>
      <div className="divs">
        <div className="div-1">
          <div className="img">
          <img src={fish} alt="fish" />
          </div>
          <h4>Deepfake video app Avatarify, which processes on-phone</h4>
          <p>Making deepfake videos used to be hard. Now all you need is a smartphone</p>
          <span>Read</span>
        </div>
        <div className="div-1"></div>
        <div className="div-1"></div>
        <div className="div-1"></div>
        <div className="div-1"></div>
        <div className="div-1"></div>

      </div>
    </div>
  )
}

export default ThirdPage