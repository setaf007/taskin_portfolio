import React from 'react'
import { FaPython } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { MdOutlineStorage } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { TbBrandAzure } from "react-icons/tb";
import { SiMaterialdesignicons } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import SingleSkill from './SingleSkill';

const skills = [
    {skill:"Python", icon:FaPython,},
    {skill:"ML", icon:SiTensorflow,},
    {skill:"Data Engineering", icon:MdOutlineStorage,},
    {skill:"AI", icon:FaRobot,},
    {skill:"MERN", icon:FaReact,},
    {skill:"SQL", icon:BsFiletypeSql,},
    {skill:"Azure", icon:TbBrandAzure,},
    {skill:"System Design", icon:SiMaterialdesignicons,},
]

const AllSkills = () => {
  return (
    <div>
        <div className='flex items-center justify-center relative gap-2
        max-w-[1200px] mx-auto'>
            {skills.map((item, index)=>{
                return <SingleSkill key={index} text={item.skill} 
                imgSvg={<item.icon />}/>
            })}
        </div>
    </div>
  )
}

export default AllSkills