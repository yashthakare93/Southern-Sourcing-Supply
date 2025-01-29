import { Twitter, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20">
            <div className="container">
                <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[0.75fr_1fr] lg:gap-y-4 lg:pb-20">
                    <div className="flex flex-col">
                        <a href="#" className="mb-5 md:mb-6">
                            <img
                                src="/assests/logo.jpg"
                                alt="Logo"
                                className="h-12 w-12"  // Set a fixed height and width
                            />

                        </a>
                        <p className="mb-5 md:mb-6">
                            Join our newsletter to stay up to date on features and releases.
                        </p>
                        <div className="w-full max-w-md">
                            <form className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4">
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="border p-3 rounded-md w-full"
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 md:mt-0"
                                >
                                    Subscribe
                                </button>
                            </form>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: `<p class='text-xs'>By subscribing you agree to with our <a href='#' class='underline'>Privacy Policy</a> and provide consent to receive updates from our company.</p>`,
                                }}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-3 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
                        <div className="flex flex-col items-start justify-start">
                            <h2 className="mb-3 font-semibold">Company Info</h2>
                            <ul>
                                <li className="py-2 text-sm"><a href="#">About Us</a></li>
                                <li className="py-2 text-sm"><a href="#">Careers</a></li>
                                <li className="py-2 text-sm"><a href="#">Press</a></li>
                                <li className="py-2 text-sm"><a href="#">Blog</a></li>
                                <li className="py-2 text-sm"><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <h2 className="mb-3 font-semibold">Our Services</h2>
                            <ul>
                                <li className="py-2 text-sm"><a href="#">Free Shipping</a></li>
                                <li className="py-2 text-sm"><a href="#">Gift Cards</a></li>
                                <li className="py-2 text-sm"><a href="#">Custom Orders</a></li>
                                <li className="py-2 text-sm"><a href="#">Returns & Exchanges</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <h2 className="mb-3 font-semibold md:mb-4">Follow us</h2>
                            <ul>
                                <li className="py-2 text-sm flex items-center gap-3">
                                    <Facebook size={24} />
                                    <a href="#">Facebook</a>
                                </li>
                                <li className="py-2 text-sm flex items-center gap-3">
                                    <Instagram size={24} />
                                    <a href="#">Instagram</a>
                                </li>
                                <li className="py-2 text-sm flex items-center gap-3">
                                    <Twitter size={24} />
                                    <a href="#">X</a>
                                </li>
                                <li className="py-2 text-sm flex items-center gap-3">
                                    <Linkedin size={24} />
                                    <a href="#">LinkedIn</a>
                                </li>
                                <li className="py-2 text-sm flex items-center gap-3">
                                    <Youtube size={24} />
                                    <a href="#">Youtube</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="h-px w-full bg-black" />
                <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
                    <p className="mt-6 md:mt-0">© 2024 Southern Sourcing Supply. All rights reserved.</p>
                    <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
                        <li className="underline"><a href="#">Privacy Policy</a></li>
                        <li className="underline"><a href="#">Terms of Service</a></li>
                        <li className="underline"><a href="#">Cookies Settings</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;