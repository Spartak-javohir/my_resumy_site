import "./body.css";
import github from "./github.svg";
import linkedin from "./linkedin.svg";
import instagram from "./instagram.svg";
import facebook from "./facebook.svg";
import telegram from "./telegram.svg";
const body = () => {
  return (
    <ul className="body">
      <li className="social_media">
        <a
          href="https://github.com/Spartak-javohir"
          className="social_link social_link_git"
        >
          <span>
            <img src={github} alt="social logo" className="socal_icon" />
          </span>
          <p className="social_name">Github</p>
        </a>
      </li>
      <li className="social_media">
        <a
          href="https://www.instagram.com/javohir__abdujalilov/"
          className="social_link social_link_insta"
        >
          <span>
            <img src={instagram} alt="social logo" className="socal_icon" />
          </span>
          <p className="social_name">Instagram</p>
        </a>
      </li>
      <li className="social_media">
        <a
          href="https://t.me/abdujaliloff_javohir"
          className="social_link social_link_teleg"
        >
          <span>
            <img src={telegram} alt="social logo" className="socal_icon" />
          </span>
          <p className="social_name">Telegram</p>
        </a>
      </li>
      <li className="social_media">
        <a
          href="https://www.linkedin.com/in/javohirbek-abdujalilov-933617223"
          className="social_link social_link_lind"
        >
          <span>
            <img src={linkedin} alt="social logo" className="socal_icon" />
          </span>
          <p className="social_name">LinkedIn</p>
        </a>
      </li>
      <li className="social_media">
        <a
          href="https://www.facebook.com/javohirbek.abdujalilov.7/"
          className="social_link social_link_face"
        >
          <span>
            <img src={facebook} alt="social logo" className="socal_icon" />
          </span>
          <p className="social_name">Facebook</p>
        </a>
      </li>
    </ul>
  );
};

export default body;
