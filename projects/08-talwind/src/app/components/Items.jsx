import Image from "next/image";
import ImageLogo from "../public/me.png";

export default function Items() {
    
    return (

        <div className="bg-blue-200 rounded-xl max-w-sm">
            
            <div className="flex justify-center">
                
                <Image src={ImageLogo} className="w-24 h-24 rounded-lg mt-3"></Image>
            
            </div>

            <div className="flex flex-col justify-center items-center mt-4">
                
                <h1 className="text-xl font-bold">Santi</h1>

                <p className="font-bold text-md text-center mb-4">
                    Nulla ea duis incididunt dolor ea tempor velit cillum labore aute
                    Lorem occaecat.Nulla ea duis 
                </p>

            </div>

        </div>

    );

}