'use client'
import NavBar from '../sections/appbar/secondNav'
import Footer from '../sections/footer/footer'
import React, { useState, useRef, useEffect } from 'react'
import data from './data'
import styled from 'styled-components';
interface ChildInterface {
    title: string;
    url: string;
    isNew: boolean;
}

interface DataType {
    id: number
    title: string;
    children: Array<ChildInterface>;
}
function ENoticeBoard() {
    const [activeArr, setActiveArr] = useState<number[]>([]);
    const transitioningRefs = useRef<(HTMLDivElement | null)[]>([]);
    const toggleActive = (index: number) => {
        if (activeArr.includes(index)) {
            setActiveArr(activeArr.filter(itemIndex => itemIndex !== index));
        } else {
            setActiveArr([...activeArr, index]);
        }
    };
    useEffect(() => {
        transitioningRefs.current.forEach((ref, index) => {
            if (ref) {
                if (activeArr.includes(index)) {
                    ref.style.maxHeight = `${ref.scrollHeight}px`;
                } else {
                    ref.style.maxHeight = '0px';
                }
            }
        });
    }, [activeArr]);
    return (
        <div className='w-full h-fit'>
            <NavBar />
            <div className='w-full font-semibold text-4xl py-4 text-center'>E-Notice Board</div>
            <div className='w-full font-semibold text-gray-500 text-center pb-8'>Note : These are the latest notices, for previous notices please visit Archive section</div>
            <div className='w-full h-fit p-2 flex items-center justify-center'>
                <div className='w-full flex justify-center max-w-[1200px] flex-wrap gap-4 mb-8'>
                    {
                        data.map((index: DataType) => {
                            return (
                                <div className='min-w-[250px] w-[30%] max-w-[350px] flex flex-col cursor-pointer'>
                                    <StyledDiv className='w-full h-[32px] max-h-[32px] text-center' onClick={() => toggleActive(index.id)}>
                                        {index.title}
                                    </StyledDiv>

                                    <StyledDivTwo className={`w-full border overflow-hidden transition-all duration-500 ${activeArr.includes(index.id) ? `` : 'h-[0px]'}`} ref={el => (transitioningRefs.current[index.id] = el)}>
                                        <ul className='py-2 px-4 mx-[12px]' style={{ listStyleType: 'disc' }}>
                                            {index.children.map((i) => {
                                                return (
                                                    <li className='' style={{ display: 'list-item' }}>
                                                        {i.isNew ?
                                                            <div className='hover:text-[rgb(82,219,216)]'><span className='border py-1 px-2 rounded-3xl text-[12px] text-black mr-2'>New</span>{i.title}
                                                            </div> : <div className='hover:text-[rgb(82,219,216)]'>{i.title}</div>}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </StyledDivTwo>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ENoticeBoard

const StyledDiv = styled.div`
  border: 2px solid rgb(141, 221, 255);

  &:hover {
    border: 2px solid white;
    box-shadow: 9px 9px 18px #93c2d9, -9px -9px 18px #c7ffff;
  }
`;

const StyledDivTwo = styled.div`
    border: 2px solid rgb(141, 221, 255);
    // box-shadow: 9px 9px 18px #93c2d9, -9px -9px 18px #c7ffff;
`;