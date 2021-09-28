import React from "react";
import {MailIcon} from "@heroicons/react/solid";

export default function Contact() {
    return (
        <section id="contact" className="relative">
            <div className="container px-20 py-10 mx-auto">
                <div className="text-center mb-20">
                    <MailIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Me contacter
                    </h1>
                </div>
                    <div className="bg-gray-800 bg-opacity-40 relative flex flex-wrap py-6 rounded shadow-md text-center">
                        <div className="lg:w-1/3 px-2">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                ADRESSE
                            </h2>
                            <p className="mt-1">
                                Les allées de Balguerie <br />
                                33000, Bordeaux
                            </p>
                        </div>
                        <div className="lg:w-1/3 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a className="text-indigo-400 leading-relaxed">
                                leo2a2b@gmail.com
                            </a>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                TELEPHONE
                            </h2>
                            <p className="leading-relaxed">0630156687</p>
                        </div>
                        <div className="lg:w-1/3 px-2 rounded-lg relative ">
                            <iframe
                                width="95%"
                                height="100%"
                                title="map"
                                className="absolute inset-0"
                                frameBorder={0}
                                marginHeight={0}
                                marginWidth={0}
                                style={{ filter: "opacity(0.7)" }}
                                src="https://www.google.com/maps/embed/v1/place?q=les+allées+balguerie+Bordeaux&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                            />
                        </div>
                    </div>
            </div>
        </section>
    );
}