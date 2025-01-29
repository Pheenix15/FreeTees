import './App.css';
import { useState, useEffect, useRef } from 'react';
import tees from './teeArray';
import textColor from './colorArray';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [teeColor, setTeeColor] = useState('black'); // Initial tee color size
  const [count, setCount] = useState(0) //Initial Number of Tees
  const [textOverlayColor, setTextOverlayColor] = useState('white'); // Initial text ovverlay size
  const [fontSize, setFontSize] = useState(48); // Initial font size
  const textContainerRef = useRef(null);


  const handleInputValue = (e) => {
    setInputValue(e.target.value) // Update the text-overlay in the value from the input
  }

  const increaseCount = () => {
    setCount(count + 1)
  }
  const decreaseCount = () => {
    setCount(count - 1)
  }

  // const handleTeeColor = () => {
  //   setTeeColor(color.name)
  // }

  const handleTextColor = (e) => {
    setTextOverlayColor(e.target.value)
  }

  return (
    <div className="free-tees-site">
      <header className="App-header">
        <p>Free Tees Website</p>
      </header>
      <div className="hero">
        <h1>If you are reading this, you've got yourself a free tee! 🥳</h1>
        <div className="hero-img">
          <img src="./img/hero-T-shirt.png" alt="a customized t-shirt" />
        </div>
        
      </div>



      <section className="tee-section">
        <div className="tee-container">

          <div className="section-left">           
            {/* T-Shirt Form */}
              
            <form class="member-form" action="https://formsubmit.co/191d3b3dfecb291facdd6ba2efb8365a" method="POST">
              <h3>Customize your Tee!!</h3>
              <input type="hidden" name="_subject" value="New Order" />

              <p>
                okay you can stop smiling now and listen CHI. I need you to do a few things for your tee please:
              </p>
              

              {/* <p>Your name that has the 'CHI'. It can be first, middle or last name and nickname too. (don't lie I'll catch you 😎).</p>
              <label htmlFor="">Fill it in this gap</label>
              <input type="text" name="Name" placeholder="Enter your name here" required /> */}

              {/* tee logo */}
              <label htmlFor="logo picker">Choose a logo here</label>
              {/* tee color */}
              <label htmlFor="">Now pick a color for your tee</label>    
              <div id="color-select" className='color-palette'>
                {tees.map((color) =>(
                  <div 
                    key={color.name} 
                    onClick={() => setTeeColor(color.name)}
                    style={{
                      backgroundColor: color.hex,
                      width: '20px',
                      height: '20px',
                      border: teeColor === color.name ? '2px solid black' : '1px solid #ccc',
                      cursor: 'pointer',
                    }}
                  ></div>
                ))}
              </div>
              <input type="hidden" name="_subject" value={teeColor} />
              <label htmlFor="name">Enter your actual Name</label>
              <input type="text" name="Name" placeholder="Enter your name here" required />
              <label htmlFor="Email">and your email address</label>
              <input type="email" name="Email" placeholder="Enter Email" required />
              <input type="text" name="PhoneNumber" placeholder="Enter Your Phone Number" required />

              <button class="submit-btn" type="submit">Clame Your Tee!</button>
              <input type="hidden" name="_captcha" value="false" />

            </form>
            
              
            {/* SIZE GUIDE */}
            {/* <div className="size-selection">
              
              <select name="size Guide" className='size-guide' id="size-guide">
                <option value="L">L</option>
                <option value="M">M</option>
              </select>
            </div> */}
          </div>

          {/* T-shirt image */}
          <div className="tee-selection">

            <div className="tee-shirt-img">
              <img src={`./img/tees/${teeColor}.png`} alt={`${teeColor} t-shirt`} className="tee-shirt" />
              
              {/* TEXT OVERLAY */}
              <div 
                ref={textContainerRef}
                id='text-overlay' 
                className="text-overlay" 
                style={{
                  color: `${textOverlayColor}`,
                  fontSize: `${fontSize}px`,
                }}
              >
                  {inputValue}
              </div>
            </div>
            
          </div>

        </div>
      </section>

      <section className="footer-section">
        <footer className='footer'>
          <p> <p>&copy; {new Date().getFullYear()}.</p> </p>
        </footer>
      </section>
    </div>
  );
}

export default App;
