import React from 'react';

const NewIncidentStep3 = () => {
    return (
        <div className='flex flex-col space-y-5 max-w-[750px] mx-auto py-10 px-2'>
            <h1 className='text-2xl font-bold'>Let’s give the incident a title?</h1>
            <p className='text-sm text-secondary'>Make a title that will easily identify the incidents</p>

            <input type="text" className='p-2 border border-[#E4E4E7] focus:outline-none w-full rounded-md text-xs' placeholder='Add title here' />

            <h1 className='text-2xl font-bold'>Describe what happened during the incident?</h1>
            <p className='text-sm text-secondary'>Share some information about the incident. The when, where, how. </p>

            <textarea type="text" className='p-2 border border-[#E4E4E7] focus:outline-none w-full h-[127px] rounded-md text-xs' placeholder='Type here' />
        </div>
    );
};

export default NewIncidentStep3;