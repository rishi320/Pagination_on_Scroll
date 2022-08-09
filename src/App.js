
import { useState, useRef} from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import './App.css';
import Card from './Card';
import useLoadMore from './useLoadMore';
import "./App.css";
import axios from 'axios';

function App() {
  const [imageObj, setImageObj] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [isFirstLoad, setIsFirstLoad] = useState(true);
  // const [error, setError] = useState(false);
  const [skip, setSkip] = useState(0);
  const [isFetching, setIsFetching] = useLoadMore(getMoreData);

  const loadData = ()=>{
    let url = "https://dummyjson.com/products?skip=0&limit=5";
    axios.get(url).then((res)=>{
      setImageObj(res.data.products);
      setSkip(5);
    });
  }

  function getMoreData(){
    let url = `https://dummyjson.com/products?skip=${skip}&limit=5`;
    axios.get(url).then((res)=>{
      setImageObj([...imageObj, ...res.data.products]);
      setSkip(skip+5);
      setIsFetching(false);
    });
  }
 
  useEffect(()=>{
    loadData()
  },[])

  return(
    <div className='App'>
       {imageObj.map((img, index)=>(
        <Card key={index} data={img}/>
       ))}
    </div>
  )
}

export default App;
