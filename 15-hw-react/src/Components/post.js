import React from 'react';
import ikon from './img/oficial.png'

function Post(props){
    const {author: {name, photo, nickname}, content, image, date} = props;
    let comments = 400;
    let retweets = 85;
    let likes = 1200;
    let uploads = 30;
    
    return(
        <div className="Container">
            <div className="Ava_position">
                <img className='ava' src= {photo} />
            </div>
            <div className="main_content">
                <div className='header_block' >
                    <div className="header_data" >
                        <div className="ikon_position">
                            <img className="ikon" src={ikon}/>
                        </div>
                        <h2>{name}</h2>
                        <h3>{nickname} {date}</h3>
                    </div>
                    <div className="message" >
                      <p>{content}</p>
                    </div>
                </div>
                <div className="photo_position">
                     <img  className="photo" src={image}/>
                </div>
                <div className="footer">
                      <i class="fa fa-comment"><span>{comments}</span></i>
                      <i class="fa fa-retweet">  <span>{retweets}</span></i>
                      <i class="fas fa-heart"> <span>{likes}</span></i>
                      <i class="fas fa-upload"><span>{uploads}</span></i>
                </div>
            </div>
        </div>
    );
};

export default Post;