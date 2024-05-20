import { SlMagnifier } from "react-icons/sl"

export default function Header(){

    return(
        <header>
            <nav>
                <ul className="head">
                    <li>UIN POKEDEX</li>
                    <li>TEAMS</li>
                    <input
                        type="text"
                        placeholder="Søk etter Pokemon"
                        className="search"/>
                        <button className="searchbtn"><SlMagnifier /></button>
                </ul>
            </nav>
        </header>
    )
}