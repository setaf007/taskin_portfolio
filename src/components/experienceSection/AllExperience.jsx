import React from 'react'
import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa";

const experiences = [
    {job:'Software Engineer', 
    company:'Infosys Compaz',
    date:'August 2023 - Present', 
    responsibilities:[
        'Built Spark + Airflow ETL pipelines for real-time monitoring systems',
        'Decommissioned legacy systems and databases',
        'Wrote Perl CGI scripts with PostgreSQL (migrated from Oracle)',
        'Created AI Teams bot for meeting summarization (NLP, Docker)',
        'Integrated ServiceNow with monitoring system (JavaScript, ServiceNow API)',
        ]
    },
    {job:'Software Developer', 
        company:'Razer Inc.',
        date:'August 2022 - August 2023', 
        responsibilities:[
            'Developed virtual device simulator for Razer peripherals (Python, JavaScript)',
            'Automated testing using Python, Selenium and maintained DevOps processes (Jenkins)',
            'Maintained and extended test suites for daily QA workflows',
            'Tracked and resolved hardware bugs using JIRA',
        ]
    },
    {job:'Data Science Intern', 
        company:'SPRIM Fibronostics',
        date:'January 2022 - June 2022', 
        responsibilities:[
            'Built ML models to predict liver fibrosis using biomarker data',
            'Collaborated on feature engineering from research papers',
            'Created ETL pipeline for biomarker data ingestion and analysis',
            'Visualized data insights for executive reporting',
        ]
    },
    {job:'Lead Developer', 
        company:'LoadedCrates (Personal Crypto Startup)',
        date:'January 2021 - January 2022', 
        responsibilities:[
            'Built NFT minting site and dApp with MERN stack + Solana RPC',
            'Automated NFT distribution and handled high-traffic loads',
            'Managed full tech stack from infra to smart contract integration',
            'Sold 3,000 NFTs, grew community to 10,000+ Discord members',
        ]
    },

]

const AllExperience = () => {
  return (
    <div>
        <h2 className='flex flex-col text-6xl text-lightGrey font-bold underline decoration-cyan-500 mb-8 items-center justify-between'>Experience</h2>
        <div className='flex md:flex-row sm:flex-col sm:items-center md:items-start justify-between'>
            {experiences.map((experience, index)=>{
                return (
                <>
                    <SingleExperience key={index} experience={experience}/>
                    {index < 3 ? <FaArrowRight className='text-6xl text-cyan 
                    self-center lg:block sm:hidden'/> : ""}
                </>
                );
            })}
        </div>
    </div>
  )
}

export default AllExperience