import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import '../styleSheet/Navbar.css';
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
import cardImage from '../assets/images/firstlady.jpeg'

function Dashboard() {
    const baseURL = "https://jsonplaceholder.typicode.com";
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const nav = useNavigate()

    const handleSingleCard = (id) => {
        nav(`/card-details?id=${id}`)
    }
    const userDetails = useSelector(state => state.user.user)
    // const post = useSelector(state => state.posts.value)

    useEffect( () => {
        setLoading(true)
        console.log(userDetails.email)
        // if (userDetails.email) {
            axios.get(baseURL + '/posts')
            .then(response => {
                console.log('response', response)
                const cutPost = response.data.splice(0,6)
                setPosts(cutPost)
                setLoading(false)
            }) 
        // } else {
        //     setLoading(false)
        //     nav('/login')
        // }
    }, [])
    return (
        <div>
            <Navbar />
            {
            loading ? <p className='login_amt'>Loading...</p>: 
            <div className="cards_div">
                {
                    posts.map(post => {
                        return (
                            <div className="cards" key={post.id} onClick={() => handleSingleCard(post.id)}>
                                <div className="card-header" style={{ backgroundImage:`url(${cardImage})` }}>
                                </div>
                                <div className="card_body">
                                <p className="title">{post.title}</p>
                                    {post.body}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            }
        </div>
    )
}

export default Dashboard
