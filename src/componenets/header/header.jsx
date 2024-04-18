import profileImg from "./../../assets/profile.jpeg"
import s from "./header.module.css"


function Header(){
    return(
        <div className={s.header}>
          <div>
            <h1 className={s.header_heading}>Hi, Umanga</h1>
            <p className={s.header_tagline}>Your devices are under control.</p>
          </div>
          <div>
            <img src={profileImg} alt='' className={s.profile_img}/>
          </div>
        </div>
    );
}

export default Header;