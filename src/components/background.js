import React, { Fragment } from 'react';

const data = [
    {
        heading: "LianHua Primary School",
        subHeading: "2008-2012: Graduated with PSLE",
        direction: "right"
    },
    {
        heading: "Shuqun Secondary School",
        subHeading: "2013-2016: Graduated with O-Level",
        direction: "left"
    },
    {
        heading: "Republic Polytechnic",
        subHeading: "2017-2020: Graduated with Diploma in Information Technology",
        direction: "right"
    },
    {
        heading: "University of Wollongong",
        subHeading: "2021-2023: Graduated with Distinction in Computer Science-Cyber Security",
        direction: "left"
    }
];

const Circle = () => {
    return <div className='bg-gradient-to-r from-blue-900 to-teal-900 rounded-full w-10 h-10 mx-auto shadow-lg border-2 border-blue-200'></div>
};

const Pillar = () => {
    return (
        <div className='bg-gradient-to-r from-blue-600 to-teal-600 rounded-t-full rounded-b-full w-3 h-full mx-auto'></div>
    );
};

const EventCard = ({ heading, subheading }) => {
    return (
        <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl flex flex-col gap-y-2 border shadow-md rounded-2xl p-4 bg-gray-900'>
            <div className='text-blue-400 font-bold text-3xl border-b'>
                {heading}
            </div>
            <div className='text-base text-white'>{subheading}</div>
        </div>
    );
};

const Background = () => {
    return (
        <div className='background-container pt-20'>
            <div className='flex flex-col gap-y-3 w-full my-4'>
            <div className='text-cyan-200 font-bold text-5xl text-center'>Education</div>
                <Circle />
                {data.map((event, key) => {
                    return (
                        <Fragment key={key}>
                            <div className='grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto'>
                                {event.direction === 'left' ? (
                                    <EventCard
                                        heading={event.heading}
                                        subheading={event.subHeading}
                                    />
                                ) : (
                                    <div></div>
                                )}
                                <Pillar />
                                {event.direction === 'right' ? (
                                    <EventCard
                                        heading={event.heading}
                                        subheading={event.subHeading}
                                    />
                                ) : (
                                    <div></div>
                                )}
                            </div>
                            {key < data.length - 1 && <Circle />}
                        </Fragment>
                    );
                })}
                <Circle />
            </div>
        </div>
    );
};

export default Background;
