import React from 'react';
import IncidentCard from './IncidentCard';
import Chatbot from './Chatbot';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const location = useLocation();
    const incedents = [
        { heading: "Whitechapel Rd.", place: "Whitechapel Rd.", price: '1,456,654.00', img: "/Incident1.png" },
        { heading: "Whitechapel Rd.", place: "Whitechapel Rd.", price: '1,456,654.00', img: "/Incident2.png" },
        { heading: "Tulare County", place: "Tulare County,  Los Angles, CA 23415", price: '1,456,654.00', img: "/Incident3.png" },
        { heading: "Tulare County", place: "Tulare County,  Los Angles, CA 23415", price: '1,456,654.00', img: "/Incident4.png" },
        { heading: "Tulare County", place: "Tulare County,  Los Angles, CA 23415", price: '1,456,654.00', img: "/Incident5.png" },
        { heading: "Tulare County", place: "Tulare County,  Los Angles, CA 23415", price: '1,456,654.00', img: "/Incident6.png" },
    ]
    return (
        <div className='container grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 mt-10 xl:relative'>
            {
                incedents.map((incedent, i) => {
                    return <IncidentCard incedent={incedent} key={i} />
                })
            }
            {
                location.pathname === '/' && <Chatbot />
            }
        </div>

    );
};

export default Dashboard;