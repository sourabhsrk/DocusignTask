import React, {useState} from 'react'

const Card = ({item}) => {
  const [showDetail, setShowDetail] = useState(false);
  const handleMouseEnter = ( )=>{
    setShowDetail(true);
  }
  const handleMouseLeave = ( )=> {
    setShowDetail(false);
  }
  const CopytoClipboard = (text) => {
    navigator.clipboard.writeText(text);
  }
  return (
    <div className='card' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
       <span dangerouslySetInnerHTML={{ __html: item.htmlCode[0]}} className='emoji'/>
       {showDetail && 
        <div className='cardDetail'>
         <p dangerouslySetInnerHTML={{ __html: item.htmlCode[0]}} className='detailemoji'/>
         <p className='emojiname'>{item.name}</p>
         <div className='codeContainer'>
            <span style={{fontWeight:'bold'}}>HTML Code:</span><button className='detailbutton' onClick={()=>{CopytoClipboard(item.htmlCode[0])}}>{item.htmlCode[0]}</button>
         </div>
         <div className='codeContainer'>
            <span style={{fontWeight:'bold'}}>Uni Code:</span><button className='detailbutton' onClick={()=>{CopytoClipboard(item.unicode[0])}}>{item.unicode[0]}</button>
         </div>
         
        </div>}
    </div>
  )
}

export default Card
