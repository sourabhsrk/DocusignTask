import './App.css'
import React, {useState,useEffect} from 'react'
import axios from 'axios';
import Card from './components/Card';


function App() {
  const [apiData, setApiData] = useState([]);
  const [iconsPerPage, setIconsPerPage] = useState(120);
  const [category, setCategory] = useState('all');
  const categoryArray = apiData.filter((item)=>{
    if(category==='all'){
      return true;
    }
    else{
      return item.category === category;
    }
  });
  const totalPages = Math.ceil(categoryArray.length / iconsPerPage);
  const pagesArray = [...Array(totalPages + 1).keys()].slice(1);
  const [currentPage, setCurrentPage] = useState(1);

  const indexofLasticon = currentPage * iconsPerPage;
  const indexofFirsticon = indexofLasticon - iconsPerPage;
  const visibleicons = categoryArray.slice(indexofFirsticon, indexofLasticon);


  const handleClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.focus();
  };
  const handlePrevClick = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.focus();
  };
  const handleNextClick = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.focus();
  };
  
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  }

  useEffect(()=>{
    axios
    .get('https://emojihub.yurace.pro/api/all')
    .then(response => setApiData(response.data))
    .catch(error => {
        console.log(error.message);
    })
  },[]);

  return (
    <main>
      <h1 className='heading'>DocuSign Task - by SourabhSRK</h1>
      <div className='filter'>
        <label htmlFor="category">Choose a cateogry:</label>
        <select name="category" id="category" className='dropdown' onChange={(e)=>{handleCategoryChange(e)}}>
          <option value="all">All</option>
          <option value="smileys and people">Smileys and People</option>
          <option value="food and drink">Food and Drink</option>
          <option value="animals and nature">Animals and Nature</option>
          <option value="travel and places">Travel and Places</option>
          <option value="activities">Activities</option>
          <option value="objects">objects</option>
          <option value="symbols">Symbols</option>
          <option value="flags">Flags</option>
        </select>
      </div>
      <div className='cardContainer'>
      {visibleicons.map((item,i)=>{
        return(
          <Card item={item} key={i}/>
        )
      })}
      </div>
      <div className='button-container'>
      <div>
        <button
          onClick={() => {
            handlePrevClick();
          }}
          className='button'
        >
          previous
        </button>
        {pagesArray.map((page) => {
          return (
            <button
              key={page}
              onClick={() => {
                handleClick(page);
              }}
              className='button nbutton'
            >
              {page}
            </button>
          );
        })}
        <button
          onClick={() => {
            handleNextClick();
          }}
          className='button'
        >
          next
        </button>
      </div>
      </div>
    </main>
  )
}

export default App
