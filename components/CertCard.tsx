import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CertCardProps {
    imageUrl: string
    heading: string
    issuedBy: string
    issuedOn: string
    ID: string
    link: string
};

const CertCard = ({ imageUrl, heading, issuedBy, issuedOn, link }: CertCardProps) => {
    return (
        <div className="flex flex-col items-center bg-[#E5E4E2] p-4 rounded-lg shadow-lg mt-4">
            <div className="md:flex-row flex flex-col items-center gap-4">
                <Image
                    src={imageUrl}
                    width={200}
                    height={200}
                    alt={heading}
                    className="w-[128px] h-[128px] md:w-[200px] md:h-[200px]"
                />
                <div className="flex flex-col gap-2 text-black">
                    <h6 className="text-[20px] font-semibold text-[#02A0C7]">{heading}</h6>
                    <p className="text-[14px]">Issued by: {issuedBy}</p>
                    <p className="text-[14px]">Issued on: {issuedOn}</p>
                    <p className="text-[14px]">Validate: <Link
                        target="_blank"
                        className="text-[#02A0C7] underline"
                        href={link}
                    >Click Here</Link></p>
                </div>
            </div>
        </div>
    )
}

export default CertCard