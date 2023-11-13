import React from 'react'
import {  VscTriangleDown } from "react-icons/vsc";
import { HiTranslate } from "react-icons/hi";
import '../styles/select.css'

const Language = () => {
  return (
    <div className='language-select-box'>
                <HiTranslate className='global-icon'/>
                <select name="languages" id="languages">
                    <option value="english">English</option>
                    <option value="turkce">Türkçe</option>
                </select>
                <VscTriangleDown className='arrow-icon' />
            </div>
  )
}

export default Language