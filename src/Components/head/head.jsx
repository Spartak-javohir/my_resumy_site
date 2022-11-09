import "./head.css";
import myphoto from "./user.svg";
import local from "./local.svg";
const head = () => {
  return (
    <div className="head">
      <img className="myphoto" src={myphoto} alt="my photo" />
      <div className="head_info">
        <h3 className="my_name">Javohirbek Abdujalilov</h3>
        <div className="local_box">
          <img className="local_icon" src={local} alt="icon" />
          <p className="local_info">Tashkent Uzbekistan</p>
        </div>
        <p className="age_my">22y.o | FullStack developer</p>
      </div>
    </div>
  );
};

export default head;
