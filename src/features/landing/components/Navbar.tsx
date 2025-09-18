import { Link, useLocation } from "react-router-dom"


export const Navbar = () => {

    const location = useLocation()
    const actualPath = location.pathname


    return (
        <nav className="flex">
            <div className="grid grid-cols-3 text-center w-[100vw]">
                <button
                    className={[
                        "p-4 text-gray-200",
                        actualPath == "/" ? "text-white bg-amber-800 rounded-md" : "font-light"
                    ].join(" ")}
                >
                    <Link
                        to={"/"}
                        aria-current={actualPath === "/" ? "page" : undefined}
                    >
                        Home
                    </Link>
                </button>
                <button
                    className={[
                        "p-4 text-gray-200",
                        actualPath == "/Products" ? "text-white bg-amber-800 rounded-md" : "font-light "
                    ].join(" ")}
                >
                    <Link
                        to={"/Products"}
                        aria-current={actualPath === "/home" ? "page" : undefined}
                    >
                        Productos
                    </Link>
                </button>
                <button
                    className={[
                        "p-4 text-gray-200",
                        actualPath == "/Contact" ? "text-white bg-amber-800" : "font-light"
                    ].join(" ")}
                >
                    <Link
                        to={"/Contact"}
                        aria-current={actualPath === "/Contact" ? "page" : undefined}
                    >
                        Contacto
                    </Link>
                </button>

            </div>
        </nav>
    )
}