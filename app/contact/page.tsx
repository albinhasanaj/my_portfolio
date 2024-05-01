"use client";
import React from 'react'
import { FormEvent, useState, useRef } from 'react'
import toast from 'react-hot-toast';
import { BeatLoader } from 'react-spinners';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [sending, setSending] = useState(false);


    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        if (!formRef.current) return; // Ensures the form is mounted

        const fieldNames = ["firstname", "lastname", "email", "message"];

        const validateFieldNames = fieldNames.every(fieldName => {
            const field = formRef.current?.elements.namedItem(fieldName) as HTMLInputElement;
            if (!field) return false;
            const fieldValue = field.value.trim();
            return fieldValue !== "";
        });

        const emailField = formRef.current?.elements.namedItem("email") as HTMLInputElement;
        const emailValue = emailField?.value.trim();

        if (emailValue && !emailValue.includes("@")) {
            toast.error("Please enter a valid email address!");
            return;
        } else if (!validateFieldNames) {
            toast.error("Please fill in all the fields!");
            return;
        }

        setSending(true);

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
            formRef.current, {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        })
            .then(() => {
                toast.success("Message sent successfully!");
                formRef.current?.reset();
                setSending(false);
            }, (error: Error) => { // Provide the expected type for the error parameter
                toast.error("An error occurred, please try again later!");
                setSending(false);
                console.error("Error sending email: ", error);
            });
    }

    return (
        <main className="flex flex-col items-center gap-2 h-full overflow-hidden">
            <div className="flex flex-col items-center mt-32 md:mt-40">
                <h1 className="text-[28px] sm:text-[40px] md:text-[64px] lg:text-[96px] font-bold text-[#018EBB] text-center text-nowrap">Like what you see?</h1>
                <div className="w-full md:w-3/4 bg-white h-[1px]" />
            </div>
            <div className="flex flex-col items-center">
                <p className="text-[14px] w-2/3 md:text-[18px] lg:text-[24px] text-center">Send me a message and we'll keep in touch!</p>
            </div>
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col max-w-[800px] mt-16">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-auto lg:w-[400px]">
                        <label htmlFor="firstname"
                            className="text-heading2 text-[10px] lg:text-[14px] font-bold"
                        >YOUR FIRST NAME*</label>
                        <input type="text" id="firstname" name="firstname"
                            placeholder="First name"
                            className="w-full h-12 mt-2 p-3 text-white bg-transparent border-[2px] border-slate-800 placeholder:font-bold rounded-[5px] border-active"
                            autoComplete="given-name"
                        />
                    </div>
                    <div className="w-auto lg:w-[400px]">
                        <label htmlFor="lastname"
                            className="text-heading2 text-[10px] lg:text-[14px] font-bold"
                        >YOUR LAST NAME*</label>
                        <input type="text" id="lastname" name="lastname"
                            placeholder="Last name"
                            className="w-full h-12 mt-2 p-3 text-white bg-transparent border-[2px] border-slate-800 placeholder:font-bold rounded-[5px] border-active"
                            autoComplete="family-name" />
                    </div>
                </div>
                <div className="w-full mt-6">
                    <label htmlFor="email"
                        className="text-heading2 text-[10px] lg:text-[14px] font-bold"
                    >EMAIL ADDRESS*</label>
                    <input type="email" id="email" name="email"
                        placeholder="Eg: example@gmail.com"
                        className="w-full h-12 mt-2 p-3 text-white bg-transparent border-[2px] border-slate-800 placeholder:font-bold rounded-[5px] border-active"
                        autoComplete="email"
                    />
                </div>
                <div className="w-full mt-6">
                    <label htmlFor="message"
                        className="text-heading2 text-[10px] lg:text-[14px] font-bold"
                    >YOUR MESSAGE*</label>
                    <textarea id="message" name="message"
                        placeholder="Please enter your message here"
                        className="w-full h-32 mt-2 p-3 text-white bg-transparent border-[2px] border-slate-800 placeholder:font-bold rounded-[5px] border-active"
                    />
                </div>

                <div className="w-full flex justify-center my-6">

                    <button
                        type="submit"
                        className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-0 focus:ring-slate-800 focus:ring-offset-2 focus:ring-offset-slate-500"
                        disabled={sending} // Disable the button when sending is true
                    >
                        {sending ? <BeatLoader size={10} color="#fff" /> : "Submit"}
                    </button>

                </div>

            </form>
        </main>
    )
}

export default Contact