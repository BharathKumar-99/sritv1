import Head from 'next/head'
import Link from 'next/link';
import React from 'react'
import Image from 'next/image'

export default function Layout({ title, children }) {
    return (
        <>
            <Head>
                <title>{title ? title + "- " + process.env.NEXT_PUBLIC_APP_NAME : process.env.NEXT_PUBLIC_APP_NAME}</title>
                <meta name="description" content="Ecommeers Website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex min-h-screen flex-col justify-between">
                <header>
                    <nav className='flex h-20 items-center justify-between shadow-md px-4'>
                        <div class='w-2/5'><Link href="/"
                        ><span className='text-lg font-bold'>
                                {process.env.NEXT_PUBLIC_APP_NAME}
                            </span>
                        </Link></div>
                        <Image
                            src="https://bloggytalky.com/wp-content/uploads/2017/07/create-a-free-logo-design-logo-designs-design-a-free-logo-design-a-free-logo-alltech-just-free-logo-design.png"
                            alt="https://bloggytalky.com/wp-content/uploads/2017/07/create-a-free-logo-design-logo-designs-design-a-free-logo-design-a-free-logo-alltech-just-free-logo-design.png"
                            width={50}
                            height={50}
                        />
                        <button
                            type="button"
                            class="inline-block rounded bg-primary p-2 text-gray">
                            <p class='text-white font-bold'>Search Channel</p>
                        </button>
                        <div
                            data-te-chip-init
                            data-te-ripple-init
                            class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-primary py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-gray shadow-none transition-[opacity] duration-300 ease-linear "
                            data-te-close="true">
                            Active
                        </div>
                        <div class="grid grid-rows-2 grid-flow-col ">
                            <div class="row-span-1 col-span-1">Username</div>
                            <div class="row-span-1 col-span-1 ">Add Logo</div>
                        </div>
                    </nav>
                </header>
                <main className='container m-auto mt-4 px-4 bg-gray'>
                    {children}
                </main>
                <footer className='flex h-10 shadow-inner justify-center items-center'>
                    <p> Copyright © {process.env.NEXT_PUBLIC_APP_NAME} </p>
                </footer>
            </div>
        </>
    );
}
