import React, {useState, useEffect} from 'react';
import axios from 'axios';

function useLoadMore(callback) {

    const [isFetching, setIsFetching]  = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=> window.removeEventListener("scroll", handleScroll)
    }, []);

    useEffect(()=>{
        if(!isFetching) return;
        callback();
    },[isFetching]);

    const handleScroll = ()=>{
        if( Math.ceil(window.innerHeight + window.scrollY) <
        document.documentElement.offsetHeight
            || isFetching) return;
            
            setIsFetching(true);
    }

    return [isFetching, setIsFetching];
   
}

export default useLoadMore