import fish from "../assets/fish.png"
import hellow from "../assets/hello.png"
import coffie from "../assets/coffie.png"
import cat from "../assets/cat.png"
import animal from "../assets/animal.png"
import chief from "../assets/chief.png"

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
        <div className="div-1">
        <div className="img">
          <img src={hellow} alt="hollowin" />
          </div>
          <h4>Anyone with an iPhone can now make deepfakes</h4>
          <p>With just a photo and an app, I can create a video of any face saying </p>
          <span>Read</span>
        </div>

        <div className="div-1">
        <div className="img">
          <img src={coffie} alt="coffie" />
          </div>
          <h4>Elon Musk Zoom meeting using realtime Deepfake AI</h4>
          <p>A programmer named Ali Aliev recently developed a method </p>
          <span>Read</span>
        </div>

        <div className="div-1">
        <div className="img">
          <img src={cat} alt="cat" />
          </div>
          <h4>AI lets you be Albert Einstein or the Mona Lisa</h4>
          <p>Real-time animated deepfakes that transform your face </p>
          <span>Read</span>
        </div>

        <div className="div-1">
        <div className="img">
          <img src={animal} alt="animal" />
          </div>
          <h4>Gatecrash your next Zoom call as Steve Jobs or Elon Musk</h4>
          <p>Zoom calls have exploded during the current coronavirus lockdown </p>
          <span>Read</span>
        </div>
        
        <div className="div-1">
        <div className="img">
          <img src={chief} alt="shef" />
          </div>
          <h4>This Open-Source Program</h4>
          <p>Avatarify runs on Skype and Zoom, and  </p>
          <span>Read</span>
        </div>

      </div>
    </div>
  )
}

export default ThirdPage