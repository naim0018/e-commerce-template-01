import React from 'react'

const DealsOfTheDay = () => {
  return (
    <div className='h-[400px] flex flex-col items-center justify-center space-y-5' >
        <h2 className='pl-10  w-full '>DealsOfTheDay</h2>
        <div className="px-10 pb-10 grid grid-cols-2 items-center justify-center">
            <div className=" shadow-xl place-self-center">
                <img src="https://i.ibb.co/5kdNb1r/AMD-Ryzen-5-5600x.jpg" alt="" className='w-full h-full bg-cover'/>
            </div>

            <div className="place-self-center text-center">
                <h4>AMD-Ryzen-5-5600x</h4>
                <p>Gaming Processor</p>
                <div className="">
                    <p>$154</p>
                    <del>$200</del>
                </div>
                <div className="">
                    <p>Sold : 0</p>
                    <p>Available : 10</p>
                </div>
                <div className="">
                <h4>Hurry up! Offer ends in : </h4>
                
                </div>
                <button className="btn btn-primary">Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default DealsOfTheDay