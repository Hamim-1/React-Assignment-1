import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconX } from '../Icons';

const IncidentNavbar = () => {
    const Navigate = useNavigate();
    const [currentPath, setCurrentPath] = useState('/dashboard');
    const progressBar = useRef();
    const location = useLocation();

    useEffect(() => {
        setCurrentPath(location.pathname);

    }, [location.pathname]);

    const navigateNextStep = () => {

        const stepNum = Number(currentPath[currentPath.length - 1]);

        if (stepNum < 4) {
            progressBar.current.style.width = `${stepNum * 33}%`;
            Navigate(`/incidents/step${stepNum + 1}`);
        } else {
            progressBar.current.style.width = '33%';
            Navigate(`/incidents`);
        }
    }

    const navigatePreviousStep = () => {

        const stepNum = Number(currentPath[currentPath.length - 1]);
        progressBar.current.style.width = `${(stepNum - 2) * 33}%`;
        if (stepNum > 1) {
            Navigate(`/incidents/step${stepNum - 1}`);
        }
    }


    return (
        <div className='container flex flex-col xs:flex-row space-y-10 xs:space-y-0 justify-between items-center relative'>

            <div className='flex w-full xs:w-fit flex-row-reverse xs:flex-row justify-between xs:justify-start  space-x-5 items-center'>

                <div className='flex justify-center items-center bg-white size-10 rounded-full cursor-pointer' onClick={() => Navigate('/incidents')}>
                    <IconX size={20} color='gray' />
                </div>

                <div className='flex flex-col sm:items-start space-y-2'>
                    <p className='text-secondary text-xs'>
                        Home - Incidents - New Incident
                    </p>
                    <h2 className='text-2xl font-bold'>
                        New Incident
                    </h2>
                </div>
            </div>

            <div className='w-4/5 lg:w-[527px] h-1 bg-[#E5E7EB] rounded-md absolute left-1/2 -translate-x-1/2 top-8 xs:-top-5 lg:top-1/2 lg:-translate-y-1/2'>
                <div className={`w-1/3 h-1 bg-primary rounded-md transition-all duration-200`} ref={progressBar}>

                </div>
            </div>

            <div className='flex space-x-5 text-xs text-secondary'>
                <button onClick={navigatePreviousStep} className="bg-white border-[#FAFAFA] rounded-md py-3 px-7">Back</button>

                <button onClick={navigateNextStep} className="primary-button">
                    {
                        currentPath === '/incidents/step4' ? 'Finished' :
                            'Next step'
                    }
                </button>
            </div>

        </div>
    );
};

export default IncidentNavbar;