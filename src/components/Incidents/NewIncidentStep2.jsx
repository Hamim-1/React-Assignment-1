import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain, faHillRockslide, faHouse, faSnowflake, faSunPlantWilt } from '@fortawesome/free-solid-svg-icons';


const NewIncidentStep2 = () => {
    const icons = [
        { icon: faHillRockslide, label: 'Avalanche' },
        { icon: faHillRockslide, label: 'Biological' },
        { icon: faCloudRain, label: 'Blizzard' },
        { icon: faSnowflake, label: 'Cold/Freezing' },
        { icon: faSunPlantWilt, label: 'Drought' },
        { icon: faHillRockslide, label: 'Earthquake' },
        { icon: faHillRockslide, label: 'Avalanche' },
        { icon: faHillRockslide, label: 'Avalanche' },
        { icon: faHillRockslide, label: 'Avalanche' },
        { icon: faHillRockslide, label: 'Avalanche' },
        { icon: faHillRockslide, label: 'Avalanche' },
        { icon: faHillRockslide, label: 'Avalanche' },
        { icon: faHillRockslide, label: 'Avalanche' },
        { icon: faHillRockslide, label: 'Avalanche' },
        { icon: faHillRockslide, label: 'Avalanche' },
        { icon: faHillRockslide, label: 'Avalanche' },
    ];
    return (
        <div className='max-w-[755px] mx-auto'>

            <h2 className='text-2xl font-bold'>Which of these best describes the incident?</h2>

            <div className='flex flex-wrap justify-center items-center gap-[10px]'>

                <div className='w-[180px] h-[70px] bg-background border border-[#E4E4E7] rounded-md flex space-x-3 p-5 text-secondary'>
                    <div className='size-6'>
                        <FontAwesomeIcon icon={icons[0].icon} />
                    </div>
                    <p className='text-sm'></p>
                </div>

            </div>

        </div>
    );
};

export default NewIncidentStep2;