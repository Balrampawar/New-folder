import React from "react";
import "../css/Home.css";
import logo from '../images/logo.jpg'
import image1 from '../images/screen1.png'
import image2 from '../images/screen2.png'
import image3 from '../images/screen3.png'
import Footer from "../components/Footer"
import { Link } from "react-router-dom";



const apps = [
  { name: "Audiomack", desc: "Add an Audiomack player to your Linktree", img: "/icons/icon1.png" },
  { name: "Bandsintown", desc: "Drive ticket sales by listing your events", img: "/icons/icon2.png" },
  { name: "Bonfire", desc: "Display and sell your custom merch", img: "/icons/icon3.png" },
  { name: "Books", desc: "Promote books on your Linktree", img: "/icons/icon4.png" },
  { name: "Buy Me A Gift", desc: "Let visitors support you with a small gift", img: "/icons/icon5.png" },
  { name: "Cameo", desc: "Make impossible fan connections possible", img: "/icons/icon6.png" },
  { name: "Clubhouse", desc: "Let your community in on the conversation", img: "/icons/icon7.png" },
  { name: "Community", desc: "Build an SMS subscriber list", img: "/icons/icon8.png" },
  { name: "Contact Details", desc: "Easily share downloadable contact details", img: "/icons/icon9.png"}]

const Home = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to = "/"><img src={logo} alt="" /></Link>
        </div>
        <Link to ="/Signup"><button>Sign up free</button></Link>
      </div>
      <div className="section1">
        <h1>
          CNNCT - Easy <br /> scheduling Ahead <br />
          <Link to ="/Signup"><button>Sign up free</button></Link>
        </h1>

        <img src={image1} alt="screen1" />

        <h2>Simplified scheduling for you and your team</h2>
        <p>CNNCT eliminates the back-and-forth of scheduling meetings so you can focus on what matters. Set your availability, share your link,<br /> and let others book time with you instantly.</p>
      </div>
      <div className="section2">
        <div className="section2-left">
          <h2>Stay Organized with Your Calendar & Meetings</h2>
          <ul>
          <p>Seamless Event Scheduling</p>
            <li>View all your upcoming meetings and appointments in one place.</li>
            <li>Syncs with Google Calendar, Outlook, and iCloud to avoid conflicts</li>
            <li>Customize event types: one-on-ones, team meetings, group sessions, and webinars.</li>
          </ul>
        </div>
        <div className="section2-right">
          <div className="img">
            <img src={image3} alt=""  className="img1"/>
            <img src={image2} alt="" className="img2"/>
          </div>
        </div>
      </div>
      <div class="section3">
        <div class="customer-text">
            <h1>Here's what our <span class="highlight">customer</span> has to say</h1>
            <button class="customer-btn">Read customer stories</button>
        </div>
        <div class="customer-info">
            <span class="icon">✳</span>
            <p><strong>[short description goes in here]</strong> lorem ipsum is a placeholder text to demonstrate.</p>
        </div>
    </div>
    <div className="section4">
      <div className="card1">
        <h3>Amazing too!! Saved me months</h3>
        <i>This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.</i>
        <div className="badge">
          <img src="" alt="" />
          <p>john master <br />
          <p>director,Spark.com</p></p>
        </div>
      </div>
      <div className="card2">
        <h3>Amazing too!! Saved me months</h3>
        <i>This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.</i>
        <div className="badge">
          <img src="" alt="" />
          <p>john master <br />
          <p>director,Spark.com</p></p>
        </div>
      </div>
      <div className="card2">
        <h3>Amazing too!! Saved me months</h3>
        <i>This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.</i>
        <div className="badge">
          <img src="" alt="" />
          <p>john master <br />
          <p>director,Spark.com</p></p>
        </div>
      </div>
      <div className="card1">
        <h3>Amazing too!! Saved me months</h3>
        <i>This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.</i>
        <div className="badge">
          <img src="" alt="" />
          <p>john master <br />
          <p>director,Spark.com</p></p>
        </div>
      </div>
    </div>
    <section className="apps-section">
      <h2>All Link Apps and Integrations</h2>
      <div className="apps-container">
        {apps.map((app, index) => (
          <div key={index} className="app-card">
            <img src={app.img} alt={app.name} />
            <div className="app-info">
              <h3>{app.name}</h3>
              <p>{app.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    

        <Footer/>
    
        
    </>
  );
};

export default Home;
