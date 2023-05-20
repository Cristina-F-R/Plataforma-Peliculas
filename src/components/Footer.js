import '../styles/footer.scss';

const Footer = () =>{
    return (
        <div className="footer">
            <div className='footer_content'>
                <nav className="footer_content_nav nav1">
                    <a href="/" rel="noreferrer" className="link">Link 1</a>
                    <a href="/" rel="noreferrer" className="link">Link 2</a>
                    <a href="/" rel="noreferrer" className="link">Link 3</a>
                    <a href="/" rel="noreferrer" className="link">Link 4</a>
                </nav>
                <nav className="footer_content_nav nav2">
                    <a href="/" rel="noreferrer" className="link">Link 5</a>
                    <a href="/" rel="noreferrer" className="link">Link 6</a>
                </nav>
                <nav className="footer_content_nav nav3">
                    <a href="/" rel="noreferrer" className="link">Link 7</a>
                </nav>
                <nav className="footer_content_nav nav4">
                    <a href="/" rel="noreferrer" className="link">Link 8</a>
                </nav>
            </div>
        </div>
    )
}

export default Footer; 