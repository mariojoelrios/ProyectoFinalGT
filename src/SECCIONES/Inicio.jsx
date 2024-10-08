import "./Inicio.css"
import "../componentes/Fonts.css"
import { Section_Inicio } from "./Section_Inicio"

export function Inicio() {
    return (
        <>
            <div className="centrar">
                <div className="videoContainer">
                    <video autoPlay loop muted>
                        <source src="/video/HeroFeedback4.mp4" type="video/mp4" />
                        el video no es compatible con tu dispositivo
                    </video>
                </div>
            </div>
            <Section_Inicio />
        </>
    )
}