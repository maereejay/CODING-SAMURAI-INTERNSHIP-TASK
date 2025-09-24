import "./section3.css";

export default function Section3() {
  return (
    <div className="section3">
      <h2>Contact Me</h2>
      <div className="contactContainer">
        <div className="section3Content">
          <div className="form">
            <form action="">
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Name" />
              <label htmlFor="">Email</label>
              <input type="email" placeholder="Email" />
              <label htmlFor="">Subject</label>
              <input type="text" placeholder="Subject" />
              <label htmlFor="">Message</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
              <div className="submitbutton">
                <button>Submit</button>
              </div>
            </form>
          </div>
          <div className="infoplate">
            <h3>ONWUASOR MARY-JANE</h3>
            <div className="info">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident doloremque expedita aliquam molestias soluta! Sequi
                omnis in aliquam, molestias vitae inventore autem minus et
                doloribus maiores! Ipsa velit cumque amet ad accusamus
                perspiciatis, consectetur temporibus corporis at officia ratione
                placeat explicabo eveniet autem, commodi odio. Deleniti quam
                nostrum officiis libero?
              </p>
            </div>
            <div className="socials">
              <h4>Socials</h4>
              <p>
                <div className="icon">IC</div>github
              </p>
              <p>
                <div className="icon">IC</div>Instagram
              </p>
              <p>
                <div className="icon">IC</div>Linkedin
              </p>
              <p>
                <div className="icon">IC</div>Email
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
