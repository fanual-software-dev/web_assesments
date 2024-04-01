
'use client'
import Image from "next/image";
import Card, { HospitalType } from "@/components/card";
import Link from "next/link";
import { useGetallhospitalsQuery} from "@/redux/service/Dumydata";



export default function Home() {
  const {data:hospitals, isError, isLoading } = useGetallhospitalsQuery(null)
  console.log(hospitals)

if(isLoading){
  return <p> is loading</p>
}

if (isError){
  return <p>err</p>
}

  return (
    <>
    
    {Array.isArray(hospitals?.data) && hospitals.data.length > 0 && hospitals.data.map((item:HospitalType) => (
        <div className="flex justify-center">
          <Card
          key = {item._id}
          address ={item.address.summary}
          availability={item.availability}
          photo={item.photo}
          phoneNumbers={item.phoneNumbers}
          emails={item.emails}
          institutionName={item.institutionName}
        />
        <div className="h-20"></div>
        </div>
    ))}

   </>

  );
}
