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

const AllSkillsSM = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
        {skills.map((item,index)=>{
            return <div key={index} className='flex flex-col items-center'>
                <item.icon className='text-7xl text-cyan'/>
                <p className='text-center mt-4 text-white cursor-default'>{item.skill}</p>
            </div>
        })}
    </div>
  )
}

export default AllSkillsSM