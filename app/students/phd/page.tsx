'use client'
import '../../../styles/Phd/phd.css'
import React from 'react';
import { useState } from 'react';
import data from './data'
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import NavBar from '../../sections/appbar/secondNav';
import Footer from '../../sections/footer/footer';
import Link from 'next/link';
import { useEffect } from "react";


const PHDStudents = () => {
    const [hovering, setHovering] = useState(0)
    const [decider, setDecider] = useState(-1)
    const [active, setActive] = useState(-1)
    useEffect(() => {
        document.title =
            "PhD | Indian Institute of Information Technology, Kalyani";
    }, []);
    return (

        <div style={{}}>
            <NavBar />
            <div className='w-full font-[800] text-4xl pl-8 my-8'>
                IIIT Kalyani PhD students
            </div>
            {
                data.map((index) => {
                    return (
                        <div className='w-full py-8 border flex overflow-hidden gap-8 justify-around px-[10%] responsive'>
                            <div className='flex-[1] w-full min-w-[150px] center500'>
                                <div className='h-36 w-36 rounded-[50%] ' style={{ backgroundImage: `url('https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg')`, backgroundSize: '100% 100%', backgroundPosition: 'center' }}>
                                </div>
                            </div>

                            <div className='flex flex-col justify-between flex-[3] w-full min-w-[280px] center500'>
                                {index.status == 'Ongoing' ? <div className='text-[rgb(134,133,47)] font-bold text-lg'>Ongoing</div> : <div className='text-[rgb(47,165,49)] font-bold text-lg'>Completed</div>}
                                <div className='flex gap-2'>
                                    <div className='font-bold text-xl'>{index.name}</div>
                                    <div className='border rounded-xl px-2 max-h-[24px] flex items-center justify-center text-base text-white bg-[rgb(137,139,137)]'>External</div>
                                </div>
                                <div className='flex gap-2'>
                                    <div className=''>{index['Student ID ']}</div>
                                    <div className='border rounded-xl px-2 max-h-[24px] flex items-center justify-center text-base text-white bg-[rgb(97,234,161)]'>{index.session}</div>
                                </div>
                                <div className=''>{index.supervisor}</div>
                                <div className=''>{index.fellowship}</div>
                                <div className='flex gap-2'>
                                    <MailIcon />
                                    <InstagramIcon />
                                    <LinkedInIcon />
                                    <InsertLinkIcon />
                                </div>
                            </div>
                            <div className='font-semibold text-lg flex-[2] w-full min-w-[250px] min-h-12 center500'>{index.research_area}</div>
                            <div className='font-semibold text-lg flex-[1] w-full min-w-[250px] min-h-12 center500'>
                                <ul style={{ listStyleType: 'disc' }}>
                                    {index.pub_details ? <li>
                                        <ul style={{ listStyleType: 'disc' }}>
                                            {index.pub_details.map((publication) => {
                                                return (
                                                    <li>{publication}</li>
                                                )
                                            })}
                                        </ul>
                                    </li> : <></>}
                                    {index.links ? <Link target={"_blank"} href={index.links}><li className='text-[rgb(43,159,159)]'>External link</li></Link> : <></>}
                                    {index.links || index.pub_details ? <></> : <li className="text-[rgb(239,95,66)]">No data found</li>}
                                </ul>
                            </div>
                        </div>
                    )
                })
            }

            <Footer />
        </div>)
        ;
};


export default PHDStudents;