import { Link, useLocation } from "react-router-dom"


export const Navbar = () => {

    const location = useLocation()
    const actualPath = location.pathname


    return (
        <nav className="flex">
            <div className="grid grid-cols-3 text-center w-[100vw]">
                <button
                    className={[
                        "p-4 border border-pink-400 rounded-t-md text-pink-600",
                        actualPath == "/" ? "text-white bg-pink-400" : "font-light bg-pink-100"
                    ].join(" ")}
                >
                    <Link
                        to={"/"} aria-current={actualPath === "/" ? "page" : undefined}
                        className="p-4"

                    >
                        Home
                    </Link>
                </button>
                <button
                    className={[
                        "p-4",
                        actualPath == "/Contact" ? "font-bold " : "font-light"
                    ].join(" ")}
                >
                    <Link
                        to={"/Contact"}
                        aria-current={actualPath === "/Contact" ? "page" : undefined}

                    >
                        Contacto
                    </Link>
                </button>
                <button
                    className={[
                        "p-4",
                        actualPath == "/Products" ? "font-bold" : "font-light"
                    ].join(" ")}
                >
                    <Link
                        to={"/Products"}
                        aria-current={actualPath === "/home" ? "page" : undefined}

                    >
                        Productos
                    </Link>
                </button>
            </div>
        </nav>
    )
}