import { Link } from "react-router-dom";
import '../styles/detail.scss';
import Footer from "./Footer";

const Detail = ({handleMouseEnter, handleMouseLeave, hovered}) =>{
    return(
        <>
            <header className="details">
                <div className="user" onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>
                    <div className='user_avatar'></div>
                    {hovered && <button className='user_btn'>Sign out</button>}
                    
                </div>
            </header>
            
            <main className="main">
                <div className="main_btns">
                    <button className="main_btns_btn1">Trailer</button>
                    <button className="main_btns_btn2">Play</button>
                </div>
                <div className="main_info">
                    <div className="main_info_fav">
                        <div className="main_info_fav_cross">
                            <div className="main_info_fav_cross_horizontal"></div>
                        <div className="main_info_fav_cross_vertical"></div>
                        </div>
                        <p className="main_info_fav_text">Add to my list</p>
                    </div>
                    <div className="main_info_stars">
                        <p className="main_info_taq">Rating:</p>
                        <div className="main_info_stars_star"></div>
                        <div className="main_info_stars_star"></div>
                        <div className="main_info_stars_star"></div>
                        <div className="main_info_stars_star"></div>
                        <div className="main_info_stars_star"></div>
                    </div>
                    <p className="main_info_taq">Cast: <span className="main_info_span">Pedro Pascal, Bella Ramsey</span></p>
                    <p className="main_info_taq">Genre: <span className="main_info_span">Thrillers</span></p>
                </div>
                <div className="main_descContainer">
                    <h2 className="main_descContainer_title">The last of us</h2>
                    <p className="main_descContainer_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam dui, rutrum vitae facilisis vitae, semper vitae eros. Sed vestibulum porttitor velit, a hendrerit leo cursus nec. Nulla vitae dignissim est. Pellentesque luctus nisi vel ligula interdum, sit amet tristique nunc posuere. Nunc mi velit, convallis at euismod sed, mollis et enim. Morbi facilisis posuere ante, vitae euismod dui. Aliquam eu sodales odio. Praesent non nisi a est ullamcorper aliquet. Vivamus sit amet porttitor ligula, et sodales sem. Nullam vestibulum mattis magna, a dapibus nunc accumsan ut.</p>
                </div>
            </main>
            <Footer/>

        </>
    )
}

export default Detail;