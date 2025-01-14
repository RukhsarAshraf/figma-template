import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-200 py-10 px-5 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Address Section */}
        <div>
          <p className="text-sm text-gray-700">
            400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-medium">Links</h3>
          <Link href="/" className="text-sm text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/shop" className="text-sm text-gray-700 hover:text-gray-900">
            Shop
          </Link>
          <Link href="/about" className="text-sm text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="text-sm text-gray-700 hover:text-gray-900">
            Contact
          </Link>
        </div>

        {/* Help Section */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-medium">Help</h3>
          <Link
            href="/payment-options"
            className="text-sm text-gray-700 hover:text-gray-900">
            Payment Options
          </Link>
          <Link href="/returns" className="text-sm text-gray-700 hover:text-gray-900">
            Returns
          </Link>
          <Link
            href="/privacy-policies"
            className="text-sm text-gray-700 hover:text-gray-900">
            Privacy Policies
          </Link>
        </div>
      </div>

      {/* Newsletter Section */}
      <div>
      <h3 className="text-xl font-medium mb-2 mt-10">Newsletter</h3>
        <form className="flex items-center space-x-2">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="px-4 py-2 w-full md:w-auto border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white rounded-md text-sm">
            SUBSCRIBE
          </button>
        </form>
      </div>
      <div className="text-sm text-center p-2 mt-4 bg-slate-300 text-black">
        © 2024 Rukhsar Ashraf . All rights reserved
      </div>
    </footer>
  );
}
