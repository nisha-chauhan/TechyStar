import React from "react";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"


const Home = () => {
  return (
    <>
      <div className="home" id="home">
        Home
        <main>
          <h1>TechyStra</h1>
          <p>Solutions to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            everyday.We are leading tech company whoes aim is to increase the
            problem solving ability in the children
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, omnis incidunt. Error quia repudiandae accusantium a tempora aspernatur soluta, expedita in nam sequi tenetur porro numquam ipsam dicta nulla obcaecati quisquam? Sapiente consequuntur magnam debitis corrupti ex aliquam dolorum totam, dicta quis velit, iure facilis. Consequatur, sint earum non, nulla dolorum magnam tempore nemo placeat repudiandae animi accusamus vel incidunt voluptas. Modi, sit fugit! Sunt reiciendis ipsam, sed similique impedit, nesciunt optio laboriosam porro recusandae molestias itaque aliquam quibusdam facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptas!
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{animation : "0.3s imgUp linear infinite alternate"}} >
              < AiFillGoogleCircle />
              <p>Google</p>

            </div>
            <div style={{animation : "0.5s imgUp linear infinite alternate"}}>
              < AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{animation : "0.7s imgUp linear infinite alternate"}}>
              < AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{animation : "1s imgUp linear infinite alternate"}}>
              < AiFillInstagram />
              <p>Instagram</p>
            </div>

          </article>
        </div>

      </div>
    </>
  );
};

export default Home;
