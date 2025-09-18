import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export const Hero = () => {
    return (
        <div >
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div> */}
            <div className="flex flex-col items-center">
                <img src="https://res.cloudinary.com/dkrzsj6te/image/upload/v1757796521/amodoraLogo_zk99vr.png" alt="Logo Amodora" className="relative z-10 rounded-full w-[250px]" />
                <Link
                    to={"/Products"}
                >
                    <Button variant="default" className="relative z-10  cursor-pointer my-2 text-amber-950 border border-amber-600 bg-amber hover:bg-amber-600 hover:text-white">Mira nuestro catálogo </Button>
                </Link>
            </div>
        </div>
    )
}