
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
    </div>
  )
}

export default Home