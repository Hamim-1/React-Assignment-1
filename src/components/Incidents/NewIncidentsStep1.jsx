import React from 'react';
import { Link } from 'react-router-dom';

const NewIncidentsStep1 = () => {
    const steps = [
        { heading: 'What type of incident?', datails: 'Choose the category that best describes the incident.' },
        { heading: 'Tell us about the incident?', datails: 'Let’s connect the dots and see where to start.' },
        { heading: 'Where did the incident occur?', datails: 'Lorem ipsum dolar sit general sac mascho werho' },
    ]
    return (
        <div className='w-full lg:max-w-[820px] flex flex-col space-y-8 mx-auto px-2 lg:px-0 my-8 justify-center items-center'>
            <h2 className='text-3xl font-bold'>Let’s get started</h2>
            <p className='text-base text-secondary'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum <br /> dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>

            <div className='flex xs:flex-col space-x-7 xs:space-x-0 xs:space-y-10'>
                <div className='h-[585px] w-1 xs:w-[530px] lg:w-[610px] relative xs:h-1 bg-background mx-auto mt-[130px]'>
                    <div className='size-7 rounded-full bg-background absolute top-0 left-1/2 -translate-x-1/2 xs:left-0 xs:top-1/2 xs:-translate-y-1/2'></div>

                    <div className='size-7 rounded-full bg-background absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'></div>

                    <div className='size-7 rounded-full bg-background absolute bottom-0 left-1/2 -translate-x-1/2 xs:left-auto xs:translate-x-0 xs:right-0 xs:top-1/2 xs:-translate-y-1/2'></div>
                </div>

                <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-14'>
                    {
                        steps.map((step, i) => {
                            return <div className='w-60 h-[270px] bg-background rounded-lg flex flex-col justify-between py-6 px-5'>
                                <img src={`/Frame${i + 1}.png`} alt="" className={`${i === 2 ? 'w-8' : 'w-12'}`} />
                                <div className='flex flex-col space-y-5'>
                                    <h3 className='text-xl font-bold'>{step.heading}</h3>
                                    <p className="text-sm text-secondary">{step.datails}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>

            <button className='primary-button w-fit mx-auto'> <Link to='/incidents/step2'>Get started</Link> </button>
        </div>
    );
};

export default NewIncidentsStep1;