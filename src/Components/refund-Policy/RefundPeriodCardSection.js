import Image from 'next/image'
import React from 'react'

function RefundPeriodCardSection() {
    const cardData = [
        {
            logo: '/refund-logo.svg',
            title: 'Refund Period:',
            desc: 'Refund requests can be made within the duration of the service allotted for.',
            mr: true,
        },
        {
            logo: '/trial-logo.svg',
            title: 'Trial Period: ',
            desc: ' No trial period is offered for our subscription plans.',
            mr: false
        },
    ]
    return (
        <section className="font-mulish w-screen h-[40rem] max-lg:h-fit bg-[url('/refund-bg.png')] bg-cover bg-no-repeat">
            <div className='flex max-lg:flex-col max-lg:pt-10 justify-between items-center h-full px-8 container mx-auto'>
                <div className=''>
                    <Image
                        className='relative -bottom-20'
                        src="/refund-img.svg"
                        alt="bg image"
                        width="540"
                        height="380"
                    />
                </div>
                <div className='flex flex-col pt-10 max-lg:mt-20'>
                    {
                        cardData.map((item, index) => {
                            return (
                                <div key={index} className={`bg-[url('/refund-card-bg.png')] bg-cover bg-no-repeat h-[9rem] w-full lg:w-[37rem] mb-8 ${item.mr ? ' relative -left-20 max-md:left-0' : ''}`}>
                                    <div className='flex items-center p-6'>
                                        <Image
                                            className=''
                                            src={item.logo}
                                            alt="bg image"
                                            width="50"
                                            height="50"
                                        />
                                        <div className='flex-col pl-6 flex-wrap text-white max-w-[80%]'>
                                            <p className='text-2xl font-semibold'>{item.title}</p>
                                            <p className='text-lg font-normal'>{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default RefundPeriodCardSection