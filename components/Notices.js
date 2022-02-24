import React,{ useState } from 'react'
import NoticesStyles from '../styles/Notices.module.css'

const Notices = () => {

  const [notices,SetNotices] = useState([
    {date:"20 DEC" , text:"NITC Admissions  2021-2022  Registration brochure "},
    {date:"19 DEC" , text:"NIRF- India Rankings 2021: Architecture- NITC Ranked 2"},
    {date:"15 DEC" , text:"JEE CSAB Supernumerary Round 2021-: Information sheet - online reporting - B Tech/B. Arch institute admission"},
    {date:"11 DEC" , text:"Ph. D admission December 2021-22: List of shortlisted candidates for interview"},
    {date:"2 DEC" , text:"Document verification of students admitted in B.Tech/B.Arch - 2020"},
    {date:"25 NOV" , text:"NITC CALENDAR 2022"},
    {date:"22 NOV" , text:"Circular regarding inviting application from Research Scholars for change of vacant Apartments/ Quarters"},
    {date:"21 NOV" , text:"Notice for Kerala E grantz students"},
    {date:"17 NOV" , text:"MBA Admission 2022-24: Call for Applications"},
    {date:"15 NOV" , text:"Pariksha Pe Charcha"},
  ])

  return (
    <div className={NoticesStyles.container}>
      
      <h1 className={NoticesStyles.title}>NOTICES</h1>

      <div className={NoticesStyles.NoticeContainer}>
        <div className={NoticesStyles.board}>
     
        {notices.map(e => (

            <div className={NoticesStyles.tiles}>
            
            <div className={NoticesStyles.tileContent}>
              <div className={NoticesStyles.dateContainer}>
                <h2 className={NoticesStyles.date}>{e.date}</h2>
              </div>
              <div className={NoticesStyles.textContainer}>
               <h2 className={NoticesStyles.text}>{e.text} </h2> 
              </div>
            </div>
            <div className={NoticesStyles.bottomBorder}> </div>

          </div>
          
        ))}
        
        </div>
      </div>
    </div>
  )
}

export default Notices