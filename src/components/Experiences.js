import React from "react";
import { BriefcaseIcon } from "@heroicons/react/solid";
import {experiences} from "../data";

export default function Experiences() {
    return (
        <section id="testimonials">
            <div className="container px-5 py-10 mx-auto text-center">
                <BriefcaseIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Mes expériences professionnelles
                </h1>
                <div className="flex flex-wrap m-4">
                    {experiences.map((experience) => (
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                                    {experience.title}
                                </h1>
                                <p className="leading-relaxed mb-6">{experience.subtitle}</p>
                                <p className="leading-relaxed mb-6">{experience.description}</p>
                                <div className="inline-flex items-center">
                                    <img
                                        src={experience.image}
                                        className="w-12 rounded-full flex-shrink-0 object-cover object-center bg-white"
                                    />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-white">
                                            {experience.name}
                                        </span>
                                        <span className="text-gray-500 text-sm uppercase">
                                          {experience.company}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}