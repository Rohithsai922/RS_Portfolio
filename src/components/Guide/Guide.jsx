import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./TalkingGuide.css"; // Import CSS file
import { Fade } from "react-awesome-reveal"; 
const TalkingGuide = ({ activeSection }) => {
  
    const messages = {
        "hero-section": "Hi.. I am Chitti (Rohith PA). Let's have a quick tour about him.😊",
        "About": "Oh, look! These are his interests! He is really so motivated towards his work.",
        "Current-Position" : "He likes to explore different opportunities and learn new things .",
        "projects": " He is so dedicated about projects. Even he don't talk to me while doing projects",
        "Timeline":" He has a degree from National Institute of Technology, Surat. ",
        "contact": " Give him one chance and you won't regret..Here is his mail : rohithsai352@gmail.com 📩",
      };

 
  

  

  return (
    
    <div className="talking-guide">
        <Fade triggerOnce fraction={0.1}>
      {/* Speech Bubble */}
      <div className="speech-bubble">
      {messages[activeSection]}
        <div className="speech-bubble-tail"></div>
      </div>

      {/* Talking Character Animation */}
      <DotLottieReact
        src="https://lottie.host/097922be-e38a-4ce0-a154-8dcec4afca36/gWdNwL2FdL.lottie"
        loop
        autoplay
        className="talking-character"
      />
      </Fade>
    </div>
   
  );
};

export default TalkingGuide;
