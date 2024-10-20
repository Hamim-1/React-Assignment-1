import React from 'react';
import IncidentCard from '../dashboard/IncidentCard';
import ActivityCard from './ActivityCard';

const Locations = () => {
    const locations = [
        { heading: "Whitechapel Rd.", place: "Whitechapel Rd.", price: '1,456,654.00', img: "/location1.png" },
        { heading: "Whitechapel Rd.", place: "Whitechapel Rd.", price: '1,456,654.00', img: "/location2.png" },
        { heading: "Whitechapel Rd.", place: "Whitechapel Rd.", price: '1,456,654.00', img: "/location1.png" },
        { heading: "Whitechapel Rd.", place: "Whitechapel Rd.", price: '1,456,654.00', img: "/location1.png" },
    ]
    const activities = [
        { heading: "Whitechapel Rd.", place: "Whitechapel Rd.", price: '1,456,654.00', img: "/location1.png", heading: 'Activity name' },
        { heading: "Whitechapel Rd.", place: "Whitechapel Rd.", price: '1,456,654.00', img: "/location1.png", heading: 'Activity name' },
    ]

    const documents = [
        { heading: "Whitechapel Rd.", place: "Whitechapel Rd.", price: '1,456,654.00', img: "/location1.png", heading: 'Document name' },
        { heading: "Whitechapel Rd.", place: "Whitechapel Rd.", price: '1,456,654.00', img: "/location1.png", heading: 'Document name' },
    ]
    return (
        <div className='container flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 mt-10'>

            <div className='flex flex-col space-y-10'>
                <div className='flex items-center space-x-2'>
                    <img src="/locationIcon.png" alt="" />

                    <div className='flex flex-col'>
                        <p className='text-sm text-secondary'>Location</p>
                        <h2 className='text-xl font-bold'>Tulare County,  Los Angles, CA 23415</h2>
                    </div>
                </div>

                <div className='flex items-center space-x-2'>
                    <img src="/moneyIcon.png" alt="" />

                    <div className='flex flex-col'>
                        <p className='text-sm text-secondary'>Approx. Cost:</p>
                        <h2 className='text-xl font-bold'>$60,607,456.00</h2>
                    </div>
                </div>

                <hr />

                <div className='flex flex-col space-y-5'>
                    <p className='text-sm font-bold'>Description</p>
                    <p className='text-base text-secondary'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
                </div>

                <hr />

                <div className='flex flex-col space-y-5'>
                    <p className='text-sm font-bold'>Locations</p>

                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-y-5'>
                        {
                            locations.map(location => {
                                return <IncidentCard incedent={location} />
                            })
                        }
                    </div>
                </div>

                <hr />

                <div className='flex flex-col space-y-5'>
                    <p className='text-sm font-bold'>Locations</p>

                    {
                        activities.map((activity, i) => {
                            return <ActivityCard activity={activity} key={i} />
                        })
                    }
                </div>


                <hr />

                <div className='flex flex-col space-y-5'>
                    <p className='text-sm font-bold'>Documents</p>

                    {
                        documents.map((document, i) => {
                            return <ActivityCard activity={document} key={i} />
                        })
                    }
                </div>

            </div>

            <div className='flex flex-col space-y-5 md:w-[1200px]'>
                <p className="text-sm text-secondary">Incident Map</p>
                <img src="/map2.png" alt="" className='w-full' />
                <p className="text-sm text-secondary">Start 19.1232, -118.233     End 19.3245, -119.2323</p>
            </div>

        </div>
    );
};

export default Locations;