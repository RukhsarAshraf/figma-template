
import { IoIosArrowForward } from "react-icons/io";


export default function Account() {
    return (
        <div>
            <section
                style={{ backgroundImage: "url(/shop1.png)" }}
                className="flex flex-col justify-center items-center h-[500px] text-center bg-cover bg-center lg:px-15">
                <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-bold">My Account</h1>
                <span className="mt-2 flex items-center justify-center">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold flex items-center">
                        Home
                        <IoIosArrowForward className="mx-2 text-lg sm:text-xl lg:text-2xl size-8" />
                        My account
                    </p>
                </span>
            </section>
            
        </div>
    );
};