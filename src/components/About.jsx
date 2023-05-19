import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="about-top"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="about-bottom">
        <h1>HAKKIMIZDA</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          sequi ut vel. Cumque ad corrupti non tempora voluptas autem quaerat
          expedita molestias! Iure vero eligendi, quaerat molestiae distinctio
          veritatis sed unde hic qui maiores fugiat accusantium, quis nam.
          Aspernatur debitis, sint numquam omnis porro sunt quas exercitationem
          corrupti nobis cumque inventore illum. Facere laudantium, illum
          molestiae ullam commodi maiores. Aliquid nostrum quod, tenetur, ipsa,
          quo labore laborum impedit similique inventore deleniti aspernatur
          odit repudiandae cupiditate officiis dolor dolorum asperiores omnis
          aliquam sunt quis animi. Minus aperiam tenetur possimus nam, delectus
          error molestias illo omnis explicabo blanditiis totam quidem optio
          voluptas.
        </p>
      </div>
    </div>
  );
}

export default About;
