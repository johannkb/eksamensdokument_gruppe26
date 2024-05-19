import { useState } from "react";
import { Link } from "react-router-dom";


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
                </ul>
            </nav>
        </header>
    )
}