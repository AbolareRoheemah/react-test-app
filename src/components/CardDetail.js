import React, { useEffect, useState } from 'react'
import '../styleSheet/Auth.css';
import axios from 'axios'
import cardImage from '../assets/images/discover.jpg'
import { Link } from 'react-router-dom';

export default function CardDetail(props) {
    const useQuery = () => {
        return new URLSearchParams(window.location.search)
    }
    const baseURL = "https://jsonplaceholder.typicode.com";
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState({})
    const id = useQuery().get('id')

    useEffect(() => {
        setLoading(true)
        axios.get(baseURL + '/posts/' + id)
        .then(response => {
            console.log('response', response.data)
            setPost(response.data)
            setLoading(false)
        }) 
    }, [id])
  return (
    <div className='card_detail_container'>
      {
          loading ? <p className='login_amt'>Loading...</p> : 
              <div>
                  <div className="image_div">
                    <img src={cardImage} alt="" width="40%" height="auto" />
                </div>
                <div className="details_body">
                    <p className="detail_title">{post.title}</p>
                    <p className="post_body">{post.body}</p>
                    <Link to="/dashboard"><p className="post_body post_link">Go Back</p></Link>
                </div>
              </div>
      }
      </div>
  )
}
