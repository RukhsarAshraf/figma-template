import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <div className="w-full h-screen  sm:[h-600px] py-4 md:[h-1000px] px-10 sm:px-2 md:px-4 bg-[#FBEBB5]">
                <div className="max-w-7xl flex flex-col lg:flex-row items-center justify-between mx-20">
                 <div className="text-center lg:text-left">
                   <h1 className=" text-5xl sm:text-xl md:text-5xl text-center font-bold ">Rocket Single 
                    <br/>Seater</h1>
                    <div className="mt-10">
                     <button className="py-2 px-6 text-2xl sm:text-xl md:text-2xl border-black underline font-semibold">Shop Now</button>
                     </div>
                 </div>
                 <div className="mt-8 lg:mt-0">
                     <Image src='/bg1.png' width={0} height={0} alt="single seater" className="flex justify-around items-center w-[650px] h-[700px]:" sizes="100%"></Image>
                 </div>
                </div>
            </div>
             <div className="min-h-screen justify-center items-center bg-[#FAF4F4]">
                 <div className="grid grid-col-1 sm:grid-cols-2 px-4 gap-7">
                    <div className="flex flex-col items-center px-8 sm:px-16">
                     <Image src='/sidetable2.png' width={0} height={0} alt="bg" className="flex justify-around items-center w-[450px] h-[300px]:" sizes="100%"></Image>
                     <h1 className=" text-4xl sm:text-xl md:text-5xl text-start">Side Table</h1>
                     <Link href="/shop">
                     <button className="border-b-2 w-24 mt-2 text-xl sm:text-xl md:text-xl border-black">View More</button>
                     </Link>
                     </div>
                    <div className="flex flex-col items-center px-8 sm:px-18">
                     <Image src='/cloud3.png' width={0} height={0} alt="bg" className="flex justify-around items-center w-[450px] h-[300px]:" sizes="100%"></Image>
                     <h1 className=" text-4xl sm:text-xl md:text-5xl text-start">Side Table</h1>
                     <Link href="/shop">
                     <button className="border-b-2 w-24 mt-2 text-xl sm:text-xl md:text-xl border-black">View More</button>
                     </Link>
                    </div>
                </div>
             </div>
                 <div>
                     <div className="pb-14 cards-container">
                         <div className="text-center sm:text-center md:text-center py-16">
                         <h1 className="font-semibold sm:text-xl md:text-4xl text-4xl">Top Picks For You</h1>
                         <p className=" text-xl sm:text-xl md:text-xl text-center">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p> 
                    </div>
                         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 p-5 bg-[#FFFFFF]">
                             <div className="bg-[#FFFFFF]">
                                <Image src='/img4.png' width={0} height={0} alt="bg" className="flex justify-between py-4 items-center w-[200px] h-[150px]:" sizes="100%"></Image>                            
                               <p className=" text-xl sm:text-xl md:text-xl">Trenton modulor sofa_3</p>                           
                                <p className="text-xl sm:text-xl md:text-xl font-semibold">Rs. 25,000.00</p>                           
                            </div>
                              <div className="bg-[#FFFFFF]">
                                <Image src='/chair5.png' width={0} height={0} alt="bg"       className="flex justify-between py-8 items-center w-[200px] h-[200px]:" sizes="100%"></Image>
                              <p className="text-xl sm:text-xl md:text-xl">Granite dining table with</p>
                           <p>dining chair</p>
                           <p className="text-xl sm:text-xl md:text-xl font-semibold">Rs. 25,000.00</p>
                        </div>
                        <div className="bg-[#FFFFFF]"><Image src='/Outdoortble6.png' width={0} height={0} alt="bg" className="flex justify-between py-2 items-center w-[200px] h-[150px]:" sizes="100%"></Image>
                            <p className="text-xl sm:text-xl md:text-xl">Outdoor bar table and</p>
                            <p> stool</p>
                            <p className="text-xl sm:text-xl md:text-xl font-semibold">Rs. 25,000.00</p>
                        </div>
                        <div className="bg-[#FFFFFF]"><Image src='/mirror7.png' width={0} height={0} alt="bg" className="flex justify-between py-8 items-center w-[200px] h-[200px]:" sizes="100%"></Image>
                             <p className="text-xl sm:text-xl md:text-xl">Plain console with teak </p> <p> mirror</p>
                             <p className="text-xl sm:text-xl md:text-xl font-semibold">Rs. 25,000.00</p>
                             </div>
                        </div>
                        <div className="flex justify-center">
                        <Link href="/shop">
                            <button className="border-b-2 w-24 text-xl sm:text-xl md:text-xl border-black">View More</button>
                            </Link>
                        </div>
                   </div>
                 </div>
            {/* New Arrivals Section */}
            <div className="flex flex-col lg:flex-row items-center bg-slate-500 py-10 px-5 lg:px-20">
                <div className="w-full lg:w-[50%] flex justify-center">
                    <Image src="/Asgaard8.png" alt="Asgaard Sofa" width={850} height={600} className="w-full max-w-[750px] h-auto" />
                </div>
                <div className="flex flex-col items-center lg:items-start gap-5 mt-8 lg:mt-0 lg:ml-10 text-center lg:text-left">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">New Arrivals</h1>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">Asgaard Sofa</h1>
                    <button className="inline-block border mt-4 px-6 py-2 text-2xl text-center font-semibold rounded hover:bg-slate-500 text-black border-black">
                     <Link href="/shop">Order Now</Link>
                    </button>
                </div> 
                </div>
                <div>
                    {/* Blogs Section */}
                    <section className="bg-white py-10 px-5 lg:px-20">
                        <div className="text-center">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Our Blogs</h1>
                            <p className="text-xl sm:text-sm md:text-2xl mt-2">
                                Find a bright idea to suit your taste with our great selection
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                            {/* Blog Card */}
                            <div className="flex flex-col items-center bg-[#F9F9F9] p-4 rounded-lg shadow-md">
                                <Image
                                    src="/Rect9.png"
                                    alt="Blog Post"
                                    width={300}
                                    height={200}
                                    className="rounded-md"
                                />
                                <h2 className="text-lg sm:text-xl font-medium mt-4">
                                    Going all-in with minimalist design
                                </h2>
                                <p className="text-sm text-gray-500 mt-2">5 min • 01 Dec 2024</p>
                                <Link href="/blog">
                                <button className="border-b-2 w-28 mt-4 px-4 py-2 border-black text-sm sm:text-base bg-white text-black">
                                    Read More
                                </button>
                                </Link>
                            </div>
                            <div className="flex flex-col items-center bg-[#F9F9F9] p-4 rounded-lg shadow-md">
                                <Image
                                    src="/Rect10.png"
                                    alt="Blog Post"
                                    width={300}
                                    height={200}
                                    className="rounded-md"
                                />
                                <h2 className="text-lg sm:text-xl font-medium mt-4">
                                    Going all-in with minimalist design
                                </h2>
                                <p className="text-sm text-gray-500 mt-2">5 min • 01 Dec 2024</p>
                                <Link href="/blog">
                                <button className="border-b-2 w-28 border-black mt-4 px-4 py-2 text-sm sm:text-base bg-white text-black">
                                    Read More
                                </button>
                                </Link>
                            </div>
                            <div className="flex flex-col items-center bg-[#F9F9F9] p-4 rounded-lg shadow-md">
                                <Image
                                    src="/rect11.png"
                                    alt="Blog Post"
                                    width={300}
                                    height={200}
                                    className="rounded-md"
                                />
                                <h2 className="text-lg sm:text-xl font-medium mt-4">
                                    Going all-in with minimalist design
                                </h2>
                                <p className="text-sm text-gray-500 mt-2">5 min • 01 Dec 2024</p>
                                <Link href="/blog">
                                <button className="border-b-2 w-28 border-black mt-4 px-4 py-2 text-sm sm:text-base bg-white text-black">
                                    Read More
                                </button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <button className="border-b-2 border-black px-6 py-3 text-base sm:text-lg md:text-xl bg-white text-black">
                             View All Posts
                            </button>
                        </div>
                    </section>

                    {/* Instagram Section */}
                    <section 
                     style={{backgroundImage:"url(/Rect17.png)"}} className="flex flex-col justify-center items-center lg:px-20 h-[450px] text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                            Our Instagram
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl mt-2">
                            Follow our store on Instagram
                        </p>
                        <button className="border-b-4 rounded-3xl bg-[#FAF4F4] mt-4 w-[20%] p-3 text-base sm:text-lg md:text-xl text-black">
                            Follow Us
                        </button>
                    </section>
                </div>
        </>

    );
}
