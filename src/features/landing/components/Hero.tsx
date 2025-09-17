import { Button } from "@/components/ui/button"

export const Hero = () => {
    return (
        <div className=" relative w-screen h-[50vh] bg-[url('https://res.cloudinary.com/dkrzsj6te/image/upload/v1757798698/banner_gk2rt2.avif')] bg-cover bg-center flex flex-col items-start justify-center pl-4">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
            <div className="flex flex-col items-center">
                <img src="https://res.cloudinary.com/dkrzsj6te/image/upload/v1757796521/amodoraLogo_zk99vr.png" alt="Logo Amodora" className="relative z-10 rounded-full w-[250px]" />
                <Button variant="default" className="relative z-10  cursor-pointer my-2 bg-transparent text-pink-500 border border-pink-700 hover:bg-pink-700 hover:text-white">Mira nuestro catálogo </Button>
            </div>
        </div>
    )
}