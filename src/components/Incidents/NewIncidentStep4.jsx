import React from 'react';

const NewIncidentStep4 = () => {
    return (
        <div className='flex flex-col space-y-5 mx-auto max-w-[755px] pt-10'>
            <h1 className='text-2xl font-bold'>Where’s the incident?</h1>
            <p className='text-sm text-secondary'>Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide</p>

            <div className='w-full relative'>
                <img src="/map.png" alt="" />
            </div>
        </div>
    );
};

export default NewIncidentStep4;