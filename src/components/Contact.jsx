import BannerImage from "../assets/banner.png";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="left-contact">
        <div
          className="image"
          style={{ backgroundImage: `url(${BannerImage}) ` }}
        ></div>
      </div>
      <div className="right-contact">
        <h1 className="contact-title margin-5">Bizimle İletişime Geçin</h1>
        <form>
          <label className="margin-5">Ad Soyad</label>
          <input
            className="margin-5 contact-input"
            type="text"
            name="name"
            placeholder="AD SOYAD GİRİNİZ"
          />
          <label className="margin-5">eMail</label>
          <input
            className="margin-5 contact-input"
            type="email"
            name="email"
            placeholder="EMAİL GİRİNİZ"
          />
          <label className="margin-5">MESAJINIZ</label>
          <textarea
            className="margin-5"
            name="message"
            cols="30"
            rows="10"
            placeholder="Mesajınızı Giriniz"
          ></textarea>
        </form>
      </div>
    </div>
  );
}

export default Contact;
