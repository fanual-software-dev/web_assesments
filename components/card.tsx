'use client'
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { useSelector,useDispatch} from "react-redux";
import { decrement, increment } from "../redux/slices";

import Link from "next/link";

export interface HospitalType {
    _id: string;
    institutionName: string;
  
  
    address: {
      region: string;
      woreda: string;
      zone: string;
      summary: string;
    };
  
  
    availability: {
      twentyFourHours: boolean;
      startDay: string;
      endDay: string;
      opening: string;
      closing: string;
    };
  
  
    photo: string;
  
  
    phoneNumbers: string[];
    emails: string[];
  }

  
  




const Card = ({_id,photo,phoneNumbers,emails,address,availability,institutionName}:HospitalType) =>{
    return (
        <>
           <div className=" border-2 w-1029 h-232 gap-10 mt-4">

                <div className="flex justify-between  w-3/5 mt-2">
                    <Image src={photo} alt="Image Not Found" className="rounded-lg" width={332} height={232}/>
                    <div className="flex justify-between border-2">
                        <div>
                          <p>{address?.summary}</p>
                          <h1>{institutionName}</h1>
                          <div>
                            {phoneNumbers.map((item)=>(item))}
                            {emails.map((item)=>(item))}
                          </div>

                        </div>
                        <div>
                          <button className="border-2 text-base w-20"> Opening {availability.opening}</button>
                        </div>
                    </div>
                </div>
           </div>
           
        </>
    )
}
export default Card;