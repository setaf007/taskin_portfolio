import React from 'react'
import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa";

const experiences = [
    {job:'Software Engineer', 
    company:'Infosys Compaz',
    date:'August 2023 - Present', 
    responsibilities:['Implement and optimized ETL processes for data pipelines using Apache Airflow and Spark in new monitoring system database',
        'Decommission legacy on-call notification monitoring systems and databases',
        'Perl Scripting for Common Gateway Interface (CGI) to intergrate applications with PostgreSQL databases, and migrate scripts from Oracle to PostgreSQL',
        'Developed and Deployed AI agent/tool with Microsoft Teams Graph API to automatically summarize meetings, extract key decisions, action points, dockerized and notifies participants via Teams bot and Outlook',
        'Implement JavaScript flows to integrate ServiceNow with on-call notification monitoring system and create comprehensive documentation for future users',
        ]
    },
    {job:'Software Developer', 
        company:'Razer Inc.',
        date:'August 2022 - August 2023', 
        responsibilities:[
            'Development of Razer Virtual Device Simulator to simulate functions of several Razer peripheral devices to allow testing without connecting physically. Improved QA testing teams efficiency and reduced testing dependency on physical devices',
            'Planning and implementing automation scripts in Python/Selenium for Razer Virtual Device Simulator, accelerating manual testing and feature evaluation',
            'Maintenance of previous automation test suite and development of new automation scripts to be used for daily testing purposes of physical Razer devices',
            'Tracking and reporting issues in JIRA, conduct manual testing of devices, ensuring accurate issue identification and resolution0',
        ]
    },
    {job:'Data Science Intern', 
        company:'SPRIM Fibronostics',
        date:'January 2022 - June 2022', 
        responsibilities:[
            'Implement supervised machine learning algorithms and neural networks on extracted biomarker data points to predict liver fibrosis risk percentages',
            'Collaborate with company researchers to identify and incorporate key biomarkers into ML model training',
            'Development of end-to-end ETL data pipeline, managing data ingestion, processing, and storage components',
            'Conducted in-depth analysis of processed data and leveraged data visualization techniques to communicate insights to stakeholders',
        ]
    },
    {job:'Lead Developer', 
        company:'LoadedCrates (Personal Crypto Startup)',
        date:'January 2021 - January 2022', 
        responsibilities:[
            'Build website (frontend and backend) using MERN stack to allow users to mint NFTs and to regulate high volume of traffic during mint, develop decentralized App for distributing NFTs',
            'Handle all tech stack requirements and issues during project, from managing Solana RPC nodes, setup of nodes, and automated system for NFT prize distribution to buyers',
            'Foster partnerships and collaborations, enhancing project visibility and engagement with other NFT projects',
            'Closed project with successful selling out of 3000 NFTs with peak discord members at 10000',
        ]
    },

]

const AllExperience = () => {
  return (
    <div>
        <h2 className='text-6xl text-lightGrey underline mb-10 items-center justify-between'>Experience</h2>
        <div className='flex md:flex-row sm:flex-col items-start justify-between'>
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