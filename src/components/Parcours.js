import React from "react";
import {AcademicCapIcon} from "@heroicons/react/solid";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { parcours } from "../data";

export default function Parcours() {
    return (
        <section id="parcours">
            <div className="container px-5 py-10 mx-auto text-center">
                <AcademicCapIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Mon parcours professionnel
                </h1>
                <React.Fragment>
                    <Timeline position="alternate">
                        {parcours.map((parcour) =>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    {parcour.date}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="info"/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent className="text-white">
                                    {parcour.title}
                                </TimelineContent>
                            </TimelineItem>
                        )}
                    </Timeline>
                </React.Fragment>
            </div>
        </section>
    );
}