import React from 'react';
import Card from './Card.js'

const Cards = (props) => {
    const allcourses=[];
    const getcourses= ()=>{
        Object.values(props.courses).foreach((courseCategory)=>{
            courseCategory.foreach((course)=>{
                 allcourses.push(course);
            })
        })
        return allcourses;
    }
  return (
    <div>
      {getcourses().map((course)=>{
        return <Card course={course}/>
      })}
    </div>
  )
}

export default Cards;
