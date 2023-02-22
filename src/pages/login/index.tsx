export default function Home() {
    return (
        <div className="bg-blue-500">
            <div className="flex justify-center container mx-auto my-auto w-screen h-screen items-center flex-col">
                <div className="text-slate-100 items-center">

                    <div className="text-center pb-3 text-4xl">Welcome back!</div>
                </div>
                <div className="w-full md:w-3/4  lg:w-1/2 flex flex-col items-center bg-slate-50 rounded-md pt-12">
                    <div className="w-3/4 mb-6">
                        <input type="email" name="email" id="email" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300" placeholder="Email adress" />
                    </div>
                    <div className="w-3/4 mb-6">
                        <input type="password" name="password" id="password" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500  border-solid border-2 border-slate-300" placeholder="Password" />
                    </div>
                    <div className="w-3/4 mb-12">
                        <button type="submit"
                            className="py-4 bg-primary w-full rounded text-gray font-bold ">
                            LOGIN</button>
                    </div>
                    <p className="py-4 w-3/4 mb-12">IN CASE FORGOT PASSWORD OR USERNAMKE PLEASE SEND YOUR LICENS NO(RESET LECIENCE NO ******) TO 916487776</p>

                </div>
            </div>
        </div>

    );
}