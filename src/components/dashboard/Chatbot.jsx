import React, { useState } from 'react';
import { IconCamera, IconCopy, IconPhoto, IconX } from '../Icons';

const Chatbot = () => {
    const [isChatbotOpened, setIsChatbotOpened] = useState(false);
    return (
        <div className='w-7xl flex flex-col fixed xl:absolute bottom-5 right-2 space-y-5 z-10 mx-auto'>

            <div className={`w-[330px] h-[485px] bg-background rounded-md transition-all duration-300 origin-bottom-right transform ${isChatbotOpened ? 'scale-100' : 'scale-0'}`}>
                <h3 className='text-lg font-bold py-6 px-4 bg-primary text-white rounded-t-lg'>Chat with Cypher</h3>

                <div className='flex flex-col space-y-3 py-3 px-4'>
                    <p className='text-white bg-[#3F3F46] rounded-lg  p-3 self-end text-xs'>Lorem ipsum dolar sit general sac <br /> mascho werho</p>

                    <p className='text-secondary bg-[#F4F4F5] border border-[#E4E4E7] rounded-lg  p-3 text-xs w-fit'>Lorem ipsum dolar sit general sac <br /> mascho werho</p>

                    <p className='text-secondary bg-[#F4F4F5] border border-[#E4E4E7] rounded-lg  p-3 text-xs w-fit'>Lorem ipsum dolar sit general sac <br /> mascho werho</p>

                    <p className='text-white bg-[#3F3F46] rounded-lg  p-3 text-xs self-end'>Lorem ipsum dolar sit general sac <br /> mascho werho</p>

                    <p className='text-secondary bg-[#F4F4F5] border border-[#E4E4E7] rounded-lg  p-3 text-xs'>Enter your question...</p>

                    <div className='flex justify-between items-center p-3'>
                        <div className='flex space-x-4 items-center text-secondary'>
                            <IconCamera size={22} />
                            <IconPhoto size={22} />
                            <IconCopy size={22} />
                        </div>

                        <button className="primary-button !rounded-3xl !font-normal" >Send</button>
                    </div>
                </div>
            </div>

            <div onClick={() => setIsChatbotOpened(!isChatbotOpened)} className={`${!isChatbotOpened ? 'bg-primary text-white' : 'bg-white text-black'} shadow-xl size-20 rounded-full flex justify-center items-center cursor-pointer self-end transition-all duration-300`}>
                {
                    !isChatbotOpened
                        ?
                        <img src="/C.png" alt="" />
                        :
                        <IconX size={38} />
                }
            </div>
        </div>
    );
};

export default Chatbot;