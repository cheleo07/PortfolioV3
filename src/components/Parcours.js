import React from "react";
import {AcademicCapIcon} from "@heroicons/react/solid";
import { parcours } from "../data";
import { Chrono } from "react-chrono";

export default function Parcours() {
    return (
        <section id="testimonials">
            <div className="container px-7 py-5 mx-auto text-center" style={{ width: "500px", height: "400px" }}>
                <AcademicCapIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Mon parcours professionnel
                </h1>
                <Chrono items={parcours} />
            </div>
        </section>
    );
}