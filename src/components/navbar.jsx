export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-2 sm:px-10 md:px-20 lg:px-40">
            <img src="../img/Logo.png" alt="logo" className="w-24 h-24" />
            <div className="flex gap-4 items-center">
                <a className="text-sm" href="#">INICIO</a>
                <a className="text-sm" href="#">QUIENES SOMOS</a>
                <a className="text-sm" href="#">PRODUCTOS</a>
                <a className="text-sm" href="#">CONTACTO</a>
            </div>
        </nav>
    )
}