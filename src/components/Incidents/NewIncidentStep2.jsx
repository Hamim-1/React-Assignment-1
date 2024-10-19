import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain, faHillRockslide, faSnowflake, faSunPlantWilt, faBolt, faHand, faCloudBolt, faWater, faTornado, faHouseTsunami, faVolcano, faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { SunIcon } from "@heroicons/react/24/outline";
import { useState } from 'react';

const NewIncidentStep2 = () => {

    const [selectedType, setSelectedType] = useState(10);
    const icons = [
        { type: 'fa', Icon: faHillRockslide, label: 'Avalanche' },
        { type: 'fa', Icon: faHillRockslide, label: 'Biological' },
        { type: 'fa', Icon: faCloudRain, label: 'Blizzard' },
        { type: 'fa', Icon: faSnowflake, label: 'Cold/Freezing' },
        { type: 'fa', Icon: faSunPlantWilt, label: 'Drought' },
        { type: 'fa', Icon: faHeartPulse, label: 'Earthquake' },
        { type: 'fa', Icon: faWater, label: 'Flooding' },
        { type: 'hero', Icon: SunIcon, label: 'Heat Wave' },
        { type: 'fa', Icon: faHillRockslide, label: 'Hail' },
        { type: 'fa', Icon: faBolt, label: 'Lightning' },
        { type: 'fa', Icon: faHand, label: 'Man Made' },
        { type: 'fa', Icon: faCloudBolt, label: 'Mudslide' },
        { type: 'fa', Icon: faHillRockslide, label: 'Severe Storm' },
        { type: 'fa', Icon: faHillRockslide, label: 'Avalanche' },
        { type: 'fa', Icon: faTornado, label: 'Tornado' },
        { type: 'fa', Icon: faHouseTsunami, label: 'Tsunami' },
        { type: 'fa', Icon: faVolcano, label: 'Volcanic Eruption' },
        { type: 'fa', Icon: faHillRockslide, label: 'Wildfire' },
    ];

    return (
        <div className='max-w-[755px] mx-auto px-2'>

            <h2 className='text-2xl font-bold my-10 text-center'>Which of these best describes the incident?</h2>
            <div className='flex flex-wrap justify-center items-center gap-[10px]'>

                {
                    icons.map(({ Icon, label, type }, i) => {
                        return <div onClick={() => setSelectedType(i)} className={`w-[180px] h-[70px] border border-[#E4E4E7] rounded-md flex space-x-3 p-5 cursor-pointer ${i === selectedType ? 'bg-primary text-white transition-colors' : 'bg-background text-secondary'}`} key={i}>
                            <div>
                                {
                                    type === 'fa' ?
                                        <FontAwesomeIcon icon={Icon} />
                                        :
                                        <Icon className='size-6'></Icon>
                                }
                            </div>
                            <p className='text-sm'>{label}</p>
                        </div>
                    })
                }

            </div>

        </div>
    );
};

export default NewIncidentStep2;




