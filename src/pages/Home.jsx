import React from 'react';
import placeholder from '../assets/placeholder.jpg';
import Carousel from "../components/HomepageCarousel";
const Home = () => {
  return (
    <>
      <main className="flex-auto overflow-y-scroll">
        <div className="sm:px-8 mt-9">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-base-content sm:text-5xl">
                    Part Time Hiker Trash, Full Time Software Engineer
                  </h1>
                  <p className="mt-6 text-base text-base-content/80">
                    I’m Axel, a fullstack software engineera based in Boulder, CO and Rochester, VT. I’m a Software Engineer at Precision Valley Communications, where we develop software to help Telecommunications companies with mapping, drafting and design work.  I own and maintain a suite of software built in Python, Ruby/Rails, React with Postgres and NoSQL databases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <Carousel> </Carousel>
        </div>
        {/* <div className="mt-16 sm:mt-20">
          <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
            <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-base-200 rotate-2">
              <img src={placeholder} alt="Gallery Image 1" className="object-cover w-full h-full" />
            </div>
            <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-base-200 -rotate-2">
              <img src={placeholder} alt="Gallery Image 2" className="object-cover w-full h-full" />
            </div>
            <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-base-200 rotate-2">
              <img src={placeholder} alt="Gallery Image 3" className="object-cover w-full h-full" />
            </div>
            <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-base-200 rotate-2">
              <img src={placeholder} alt="Gallery Image 4" className="object-cover w-full h-full" />
            </div>
            <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-base-200 -rotate-2">
              <img src={placeholder} alt="Gallery Image 5" className="object-cover w-full h-full" />
            </div>
          </div>
        </div> */}
        <div className="sm:px-8 mt-24 md:mt-28">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                  <div className="flex flex-col gap-16"></div>
                  <div className="space-y-10 lg:pl-16 xl:pl-24">
                    <div className="rounded-2xl border border-base-300 p-6">
                      <h2 className="flex text-sm font-semibold text-base-content">
                        <span className="ml-3">Work</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;