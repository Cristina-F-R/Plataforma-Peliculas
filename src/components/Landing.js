import Footer from "./Footer";
import Header from "./Header";
import '../styles/landing.scss';
import Lists from "./Lists";

const Landing = ({ hovered, handleMouseEnter, handleMouseLeave }) =>{
    return(
        <>
        <Header hovered={hovered} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
        <main className="main">
            <section className="main_buttons">
                <button className="main_buttons_btn">Comedy</button>
                <button className="main_buttons_btn">Drama</button>
                <button className="main_buttons_btn">Thrillers</button>
            </section>
            <Lists/>
        </main>
        <Footer/>
        </>
    )
}

export default Landing; 