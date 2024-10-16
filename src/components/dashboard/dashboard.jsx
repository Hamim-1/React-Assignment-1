import React from 'react';
import IncidentCard from './IncidentCard';

const Dashboard = () => {
    const incedents = [
        { heading: "Whitechapel Rd.", place: "Whitechapel Rd.", price: '1,456,654.00', img: "/Incident1.png" },
        { heading: "Whitechapel Rd.", place: "Whitechapel Rd.", price: '1,456,654.00', img: "/Incident2.png" },
        { heading: "Tulare County", place: "Tulare County,  Los Angles, CA 23415", price: '1,456,654.00', img: "/Incident3.png" },
        { heading: "Tulare County", place: "Tulare County,  Los Angles, CA 23415", price: '1,456,654.00', img: "/Incident4.png" },
        { heading: "Tulare County", place: "Tulare County,  Los Angles, CA 23415", price: '1,456,654.00', img: "/Incident5.png" },
        { heading: "Tulare County", place: "Tulare County,  Los Angles, CA 23415", price: '1,456,654.00', img: "/Incident6.png" },
    ]
    return (
        <div className='container grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10'>
            {
                incedents.map((incedent, i) => {
                    return <IncidentCard incedent={incedent} key={i} />
                })
            }
        </div>
    );
};

export default Dashboard;