import React from 'react';

const ActivityCard = ({ activity }) => {
    const { heading, place, img, price } = activity;
    return (
        <div className='flex space-x-3 bg-background rounded-md p-3 items-center'>
            <img src={img} alt="" className='size-24' />

            <div className='flex flex-col space-y-1'>
                <h4 className="text-base font-bold">{heading}</h4>
                <p className='text-secondary text-sm'>{place}</p>
                <h4 className="text-base font-bold">{price}</h4>
            </div>
        </div>
    );
};

export default ActivityCard;