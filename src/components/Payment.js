// import qrcode from '../images/qrcode.jpeg'
import Navbar from './NavBar';
const Payment = () => {
    const amount = JSON.parse(sessionStorage.getItem('payment'))
    console.log(amount)

   
    return (
        <div>


            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left p-3">
                    <h1 className="lg:text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">Your total amount is </span>{' '}
                        <span className="block text-pink xl:inline">₹{amount.cartTotal}</span>
                    </h1>
                    <div className="grid lg:grid-cols-2 sm:grid-cols-1  border border-indigo-600  font-bold text-2xl  lg:p-4 sm:p-4" >
                        <div >Pay Using UPI <br /> <p className="text-2xl">8823870238@paytm </p>

                        </div>
                        <div className="w-full">Scan QR code
                            <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/MSNBC/Components/Photo/_new/110322-qr-code-hmed-425p.jpg " allt="scan_code" />
                        </div>


                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="">
                                <a
                                    href="/delivery"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                >
                                    Confirm Payment
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </main>

        </div>
    )
}

export default Payment