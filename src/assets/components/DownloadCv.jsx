import React from 'react'

const DownloadCv = () => {
    return (
        <section id="projects" className="bg-slate-100 text-slate-700 py-16">
            <div className="container mx-auto px-8 flex flex-col items-center">
                <div>
                    <h2 className="text-4xl font-bold mb-8 text-center sm:text-left">Resume</h2>
                </div>
                <div>
                    <a
                        href="/a.pdf"
                        download="a.pdf"
                        className="inline-block px-6 py-3 bg-slate-600 text-white font-semibold rounded-lg shadow-md hover:bg-slate-900 transition duration-300"
                    >
                        Download Resume Here
                    </a>
                </div>
            </div>
        </section>
    )
}

export default DownloadCv