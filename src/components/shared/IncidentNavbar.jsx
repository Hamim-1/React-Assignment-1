import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { IconX } from '../Icons';

const IncidentNavbar = () => {
    const Navigate = useNavigate();
    const [currentPath, setCurrentPath] = useState('/dashboard');
    const [currentStep, setCurrentStep] = useState(2);
    const location = useLocation();
    let [progressWidth, setProgressWidth] = useState('w-1/3');

    useEffect(() => {
        setCurrentPath(location.pathname);

    }, [location.pathname]);

    const navigateNextStep = () => {
        if (currentStep < 4) {

            setCurrentStep(currentStep + 1);
        } else {
            setCurrentStep(0);
        }
    }

    const navigatePreviousStep = () => {

        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    }

    useEffect(() => {
        setProgressWidth(`w-${currentStep - 1}/3`);
        if (currentStep === 0) {
            Navigate('/incidents');
        } else {
            Navigate(`/incidents/step${currentStep}`);
        }
    }, [currentStep])
    return (
        <div className='container flex flex-col xs:flex-row space-y-10 xs:space-y-0 justify-between items-center relative'>

            <div className='flex w-full xs:w-fit flex-row-reverse xs:flex-row justify-between xs:justify-start  space-x-5 items-center'>

                <div className='flex justify-center items-center bg-white size-10 rounded-full cursor-pointer'>
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
                <div className={`${progressWidth} h-1 bg-primary rounded-md transition-all duration-200`}>

                </div>
            </div>

            <div className='flex space-x-5 text-xs text-secondary'>
                <button onClick={navigatePreviousStep} className="bg-white border-[#FAFAFA] rounded-md py-3 px-7">Back</button>

                <button onClick={navigateNextStep} className="primary-button">
                    {
                        currentStep === 4 ? 'Finished' :
                            'Next step'
                    }
                </button>
            </div>

        </div>
    );
};

export default IncidentNavbar;