import React from "react";
import logoo from "./logo.png";
import './Navbar.css';
import profilePic from "./profile.avif";

function Navbar() {
    // Supposons que l'utilisateur est déjà connecté
    const user = {
        name: "lili", // Nom de l'utilisateur
        profilePic: profilePic, // URL de la photo de profil
    };

    return (
        <nav>
            <img src={logoo} alt="Logo" className="logoo" />
            <div>
                <ul id="navbar">
                    <li className="navbarelement"> <a href="index.html">Accueil</a></li>
                    <li className="navbarelement"> <a href="index.html">Roadmap</a></li>
                    <li className="navbarelement"> <a href="index.html">Contact</a></li>
                    {/* Afficher la photo de profil et le nom de l'utilisateur */}
                    <li className="navbarelement nav-right">
                        <div className="user-info">
                            <img src={user.profilePic} alt="Profile" className="profile-pic" />
                            <span className="username">{user.name}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;