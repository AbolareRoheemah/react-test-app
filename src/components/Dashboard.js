import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import '../styleSheet/Navbar.css';
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
import cardImage1 from '../assets/images/amazon.png'
import cardImage2 from '../assets/images/google.jpg'
import cardImage3 from '../assets/images/microsoft.jpg'
import cardImage4 from '../assets/images/code.jpg'
import cardImage5 from '../assets/images/social.jpg'
import cardImage6 from '../assets/images/ai.jpg'
import cloudImg from "../assets/images/cloud.png"

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
    // const apiKey = 'd682149871e737b731128f20e9bad375'
    // const cityId = '524901'

    // const getForecast = () => {
    //     axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}`)
    //     .then(res => {
    //         console.log('res', res)
    //     })
    // }
    const furstCall = () => {
        setLoading(true)
        // getForecast()
        // setLoading(false)
        // console.log(userDetails.email)
        if (userDetails.email) {
            axios.get(baseURL + '/posts')
            .then(response => {
                console.log('response', response)
                const cutPost = response.data.splice(0,6)
                setPosts(cutPost)
                setLoading(false)
            }) 
        } else {
            console.log('response')
            setLoading(false)
            nav('/login')
        }
    }

    useEffect( () => {
        furstCall()
    }, [])
    return (
        <div>
            <Navbar />
            {
            loading ? <p className='login_amt'>Loading...</p>: 
            <div className="dash_ctn">
                {/* <div className="cloud_container">
                    <div className="cloud-img-ctn">
                        <img src={cloudImg} alt="" width={300} className="cloud cloud1" />
                        <img src={cloudImg} alt="" width={200} className="cloud cloud2" />
                    </div>
                    <div className="weather-detail-ctn">
                        <p className="temp">Temperature today</p>
                        <p className="humidity">Humidy</p>
                    </div>
                </div> */}
                <div className="jumbotron-ctn">
                </div>
                {/* <p className="jut-text">Check Out Our Posts</p> */}
                <div className="cards_div">
                {
                    posts.map(post => {
                        return (
                            <div className="cards" key={post.id} onClick={() => handleSingleCard(post.id)}>
                                {post.id === 1 && <div className="card-header" style={{ backgroundImage:`url(${cardImage1})` }}>
                                </div>}
                                {post.id === 2 && <div className="card-header" style={{ backgroundImage:`url(${cardImage2})` }}>
                                </div>}
                                {post.id === 3 && <div className="card-header" style={{ backgroundImage:`url(${cardImage3})` }}>
                                </div>}
                                {post.id === 4 && <div className="card-header" style={{ backgroundImage:`url(${cardImage4})` }}>
                                </div>}
                                {post.id === 5 && <div className="card-header" style={{ backgroundImage:`url(${cardImage5})` }}>
                                </div>}
                                {post.id === 6 && <div className="card-header" style={{ backgroundImage:`url(${cardImage6})` }}>
                                </div>}
                                <div className="card_body">
                                <p className="title">{post.title}</p>
                                    {post.body}
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            }
        </div>
    )
}

export default Dashboard
