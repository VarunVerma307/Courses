import React from 'react'

const Card = ({course}) => {
    console.log(course);
    console.log('hello');
  return (
    <div>
      <div>
        <img src={course.image.url}></img>
      </div>
    </div>
  )
}

export default Card
