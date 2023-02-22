import Image from "next/image";

export default function Home() {
    return (


        <div className="grid h-screen w-screen  gap-1 items-center place-content-center">

            <Image
                src="https://bloggytalky.com/wp-content/uploads/2017/07/create-a-free-logo-design-logo-designs-design-a-free-logo-design-a-free-logo-alltech-just-free-logo-design.png"
                alt="https://bloggytalky.com/wp-content/uploads/2017/07/create-a-free-logo-design-logo-designs-design-a-free-logo-design-a-free-logo-alltech-just-free-logo-design.png"
                height='100'
                width='100'
            />

            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-6 md:gap-6">
                    <div className="w-screen">

                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div className=" overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Channel name</label>
                                            <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Channel Description</label>
                                            <input type="text" name="last_name" id="last_name" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

                                        </div>
                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="email_address" className="block mb-1 text-sm font-medium text-gray-700">Transmistion Type</label>
                                            <div className="flex col-span-1 ">
                                                <label htmlFor="email_address" className="flex py-2 pr-2 text-sm font-medium text-gray-700">Satelight</label>
                                                <input type="text" name="last_name" id="last_name" autoComplete="family-name" className=" focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                <label htmlFor="email_address" className="flex py-2 pr-2 pl-2 text-sm font-medium text-gray-700">Ip</label>
                                                <input type="text" name="last_name" id="last_name" autoComplete="family-name" className=" focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

                                            </div>
                                        </div>
                                        <div className="col-span-6">
                                            <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">Ip Certificate Number</label>
                                            <input type="text" name="street_address" id="street_address" autoComplete="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">Ip Registered Number</label>
                                            <input type="text" name="street_address" id="street_address" autoComplete="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">Ownership Name</label>
                                            <input type="text" name="street_address" id="street_address" autoComplete="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 text-right sm:px-5">
                                    <button className=" text-gray font-bold py-2 px-4  bg-primary rounded">
                                        Next Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>



    );
}