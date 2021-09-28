import React from "react";
export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Je suis Léo,
                        <br className="hidden lg:inline-block" />
                            bienvenue sur mon portfolio.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Étudiant en développement web.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="CV (4).pdf"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            TELECHARGER CV
                        </a>
                        <a
                            href="https://www.linkedin.com/in/léo-chevalier-b84988190/"
                            className="ml-4 inline-flex bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded bg-white ">
                            <img
                                className="w-8 rounded-full flex-shrink-0 object-cover object-center fill-current text-green-600"
                                src="./in.svg"
                            />
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img src="./web-development.svg"/>
                </div>
            </div>
        </section>
    );
}