import React, {useState} from 'react'

const Card = ({item}) => {
  const [showDetail, setShowDetail] = useState(false);
  const handleMouseEnter = ( )=>{
    setShowDetail(true);
  }
  const handleMouseLeave = ( )=> {
    setShowDetail(false);
  }
  return (
    <div className='card' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
       <span dangerouslySetInnerHTML={{ __html: item.htmlCode[0]}} className='emoji' />
       {showDetail && 
        <div className='cardDetail'>
         {item.name}
        </div>}
    </div>
  )
}

export default Card
