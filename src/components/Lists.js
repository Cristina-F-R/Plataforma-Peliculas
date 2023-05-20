import '../styles/lists.scss';

import murder from '../images/cover_muerder.png';
import snatch from '../images/cover_snatch.png';
import intouchables from '../images/cover_intouchables.png';
import hangover from '../images/cover_hangover.png';
import monsters from '../images/cover_monsters.png';

import warrior from '../images/cover_warrior.png';
import billy from '../images/cover_billy.png';
import swiss from '../images/cover_swiss.png';
import titanic from '../images/cover_titanic.png';
import forest from '../images/cover_forest.png';

import memento from '../images/cover_memento.png';
import machinis from '../images/cover_machinis.png';
import leon from '../images/cover_leon.png';
import american from '../images/cover_american.png';
import old from '../images/cover_old.png';
import land from '../images/cover_land.png';

import spider from '../images/cover_spiderman.png';
import harry from '../images/cover_harry.png';
import lord from '../images/cover_lord.png';
import avengers from '../images/cover_avengers.png';


const Lists = () =>{
    return(
        <section className="lists">
            <article className="lists_article">
                <h2 className="lists_article_title">Comedy</h2>
                <ul className="lists_article_list">
                    <li className="lists_article_list_item"><img src={monsters} alt="" /> </li>
                    <li className="lists_article_list_item"><img src={hangover} alt="" /></li>
                    <li className="lists_article_list_item"><img src={intouchables} alt="" /></li>
                    <li className="lists_article_list_item"><img src={snatch} alt="" /></li>
                    <li className="lists_article_list_item"><img src={murder} alt="" /></li>
                </ul>
            </article>
            <article className="lists_article">
                <h2 className="lists_article_title">Drama</h2>
                <ul className="lists_article_list">
                    <li className="lists_article_list_item"><img src={forest} alt="" className="lists_article_list_item_cover"/></li>
                    <li className="lists_article_list_item"><img src={titanic} alt="" className="lists_article_list_item_cover"/></li>
                    <li className="lists_article_list_item"><img src={swiss} alt="" className="lists_article_list_item_cover"/></li>
                    <li className="lists_article_list_item"><img src={billy} alt="" className="lists_article_list_item_cover"/></li>
                    <li className="lists_article_list_item"><img src={warrior} alt="" className="lists_article_list_item_cover"/></li>
                </ul>
            </article>
            <article className="lists_article">
                <h2 className="lists_article_title">Thriller</h2>
                <ul className="lists_article_list">
                    <li className="lists_article_list_item"><img src={land} alt="" className="lists_article_list_item_cover"/></li>
                    <li className="lists_article_list_item"><img src={old} alt="" className="lists_article_list_item_cover" /></li>
                    <li className="lists_article_list_item"><img src={american} alt="" className="lists_article_list_item_cover"/></li>
                    <li className="lists_article_list_item"><img src={leon} alt="" className="lists_article_list_item_cover"/></li>
                    <li className="lists_article_list_item"><img src={machinis} alt="" className="lists_article_list_item_cover"/></li>
                    <li className="lists_article_list_item"><img src={memento} alt="" className="lists_article_list_item_cover"/></li>
                </ul>
            </article>
            <article className="lists_article">
                <h2 className="lists_article_title">Cooming soon</h2>
                <ul className="lists_article_list">
                    <li className="lists_article_list_item"><img src={spider} alt="" className="lists_article_list_item_cooming"/></li>
                    <li className="lists_article_list_item"><img src={harry} alt="" className="lists_article_list_item_cooming"/></li>
                    <li className="lists_article_list_item"><img src={lord} alt="" className="lists_article_list_item_cooming"/></li>
                    <li className="lists_article_list_item"><img src={avengers} alt="" className="lists_article_list_item_cooming"/></li>
                </ul>
            </article>
            <article className="lists_article">
                <h2 className="lists_article_title">My List</h2>
                <ul className="lists_article_list">
                    <li className="lists_article_list_item"><img src={swiss} alt="" className="lists_article_list_item_cover"/></li>
                    <li className="lists_article_list_item"><img src={old} alt="" className="lists_article_list_item_cover"/></li>
                </ul>
            </article>

            </section>
    )
}

export default Lists;