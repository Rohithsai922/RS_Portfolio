import React from 'react'
import "./Timeline.css"
import svnit from "../../assets/svnit.png"
import bhashyam from "../../assets/bhashyam.png"
import {Fade} from "react-reveal"
import { FaUserGraduate } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";
import { AttentionSeeker } from 'react-awesome-reveal'
import { Slide } from 'react-awesome-reveal'
const Timeline = () => {

 
  
  return (
    <Fade>
    <div className="ag-timeline-container">
    <div  className="ag-timeline-block">
  <div className="ag-timeline_title-box">
    <AttentionSeeker effect="pulse">
    <div className="ag-timeline_tagline">Education</div>
    </AttentionSeeker>
  </div>
  <section className="ag-section">
    <div className="ag-format-container">
      <div className="js-timeline ag-timeline">
        <div className="js-timeline_line ag-timeline_line">
          <div className="js-timeline_line-progress ag-timeline_line-progress"></div>
        </div>
        <div className="ag-timeline_list">
          
          <div className="js-timeline_item ag-timeline_item">
            <div className="ag-timeline-card_box">
              <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                
                <div className="ag-timeline-card_point"><FaUserGraduate/></div>
              </div>
              <div className="ag-timeline-card_meta-box">
                <div className="ag-timeline-card_meta">B.Tech (2021-2025)</div>
              </div>
            </div>

            <div className="ag-timeline-card_item">
              <Slide triggerOnce >

           
              <div className="ag-timeline-card_inner">
                <div className="ag-timeline-card_img-box">
                  <img src={svnit} class="ag-timeline-card_img" width="400" height="300" />
                </div>
                <div className="ag-timeline-card_info">
                  <div className="ag-timeline-card_title">B.Tech</div>
                  <div className="ag-timeline-card_desc">
                    
                     Pursuing Bachelor of Technology at NIT SURAT
                    <br></br>
                    A Computer Science Under-Graduate.<br>
                    </br>
                    Batch :2025
                  </div>
                </div>
              </div>
              </Slide>
            </div>
          </div>

          <div class="js-timeline_item ag-timeline_item">
            <div class="ag-timeline-card_box">
              <div class="ag-timeline-card_meta-box">
                <div class="ag-timeline-card_meta">11th & 12th (2019-2021)</div>
              </div>
              <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                <div class="ag-timeline-card_point"> <FaSchool /></div>
              </div>
            </div>
             
            <div class="ag-timeline-card_item">
                <Slide direction='right' triggerOnce>
              <div class="ag-timeline-card_inner">
                <div class="ag-timeline-card_img-box">
                  <img src={bhashyam} class="ag-timeline-card_img" width="600" height="300" alt="" />
                </div>
                <div class="ag-timeline-card_info">
                  <div class="ag-timeline-card_title">11th & 12th</div>
                  
                  <div class="ag-timeline-card_desc">
                      2019-2021<br></br>
                     I had Completed my Intermediate at Bhashyam Junior College. <br></br>
                      My  Group was : Maths Physics Chemistry (MPC) <br></br>
                     JEE Main Percentile : 99.5%


                  </div>
                  
                </div>
              </div>
              </Slide>
            </div>
            
          </div>
              
            </div>
          </div>
        </div>
      
    
  </section>
</div>
  </div>
  </Fade>
  )
}

export default Timeline

