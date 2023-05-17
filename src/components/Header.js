import '../styles/header.scss';
import user from '../images/user.png'

const Header = () =>{

    return(
        <div className="header">
            <div className="header_content">
                <img src="" alt="" />
                <h1 className="header_content_title">The Last of Us</h1>
                <p className="header_content_description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra lacus quam, in molestie dolor consectetur in. Praesent ullamcorper fringilla pharetra.... </p>
                <button className="header_btn">Discover</button>
            </div>
            <div className="header_user">
                <div className='header_user_avatar'></div>
            </div>
            <div className="header_pages">
                <div className="header_pages_pag"></div>
                <div className="header_pages_pag pag_inactive"></div>
                <div className="header_pages_pag pag_inactive"></div>
                <div className="header_pages_pag pag_inactive"></div>
            </div>
        </div>
        
    )
}

export default Header;