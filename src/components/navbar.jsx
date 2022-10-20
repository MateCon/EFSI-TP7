import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-2 sm:px-10 md:px-20 lg:px-40">
            <Link to="/"><img src="../img/Logo.png" alt="logo" className="w-24 h-24" /></Link>
            <div className="flex gap-4 items-center">
                <a className="text-sm">INICIO</a>
                <a className="text-sm">QUIENES SOMOS</a>
                <a className="text-sm">PRODUCTOS</a>
                <a className="text-sm">CONTACTO</a>
            </div>
        </nav>
    )
}