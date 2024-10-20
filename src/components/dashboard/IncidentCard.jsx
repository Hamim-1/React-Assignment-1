import React from 'react';
import { IconBuilding, IconCloud } from '../Icons';

const IncidentCard = ({ incedent, type }) => {
    const { heading, place, price, img } = incedent;
    return (
        <div className='w-4/5 xs:max-w-[300px] flex flex-col space-y-1 relative mx-auto'>
            <img src={img} alt="" className='w-full cursor-pointer hover:scale-110 transition-transform' />
            <h2 className='text-base font-bold'>{heading}</h2>
            <p className='text-sm text-secondary'>{place}</p>
            <p className='text-base font-bold'>${price}</p>

            <div className='absolute top-2 right-2 bg-white rounded-full py-1.5 px-[10px] flex items-center space-x-1'>
                {
                    type === 'incident' ?
                        <> <IconCloud />
                            <p className='text-xs font-bold'>Blizzard</p> </> :
                        <> <IconBuilding />
                            <p className='text-xs font-bold'>Building</p>
                        </>
                }
            </div>
        </div>
    );
};

export default IncidentCard;