
const Home = () => {
  return (
    <div id="home">
    <div className="background-image"></div>
      {/* <img src={"https://static.tildacdn.com/tild3737-6137-4566-b362-643039666437/I_axis.svg"} alt="background image" /> */}
      <div className="flex">
        <div className="left">
          <h1>Bring Your <br /> <span>Photos to life</span></h1>
          <p>Pick a song, apply to your photo and share <br />a magical singing portrait with your friends!</p>
        </div>
        <div className="right">
          <img src={"https://static.tildacdn.com/tild3236-6266-4466-a366-306566626663/ezgifcom-gif-maker_6.gif"} alt="" />
        </div>
      </div>
      <div className="btn-flex">
        <div className="one">
          <img src={"https://static.tildacdn.com/tild6137-3564-4134-b833-353738663663/PlatformButton.svg"} alt="" />
        </div>
          <div className="two" >
          <img src={"https://static.tildacdn.com/tild3031-3065-4530-b464-303135343235/PlatformButton.svg"} alt="" />
        </div>
        <img src={"https://static.tildacdn.com/tild3664-3834-4035-a136-643162313839/Badge.svg"} alt="" />
      </div>
    </div>
  )
}

export default Home