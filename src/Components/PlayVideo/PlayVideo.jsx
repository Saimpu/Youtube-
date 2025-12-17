import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import moment from 'moment';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import user_profile from '../../assets/user_profile.jpg';
import { API_KEY, value_convertor } from '../../Data';

const PlayVideo = ({ videoId }) => {

  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]); 
  const fetchVideoData = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.items?.length > 0) {
      setApiData(data.items[0]);
    }
  };
  const fetchChannelData = async (channelId) => {
    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.items?.length > 0) {
      setChannelData(data.items[0]);
    }
  };

  const fetchComments = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=50&key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.items) {
      setCommentData(data.items);
    }
  };
  useEffect(() => {
    if (videoId) {
      fetchVideoData();
      fetchComments();
    }
  }, [videoId]);

  useEffect(() => {
    if (apiData?.snippet?.channelId) {
      fetchChannelData(apiData.snippet.channelId);
    }
  }, [apiData]);

  return (
    <div className='Play-video'>

      <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
            title="video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            ></iframe>


      <h3>{apiData?.snippet?.title}</h3>

      <div className='playvideoinfo'>
        <p>
          {apiData && value_convertor(apiData.statistics.viewCount)} •{" "}
          {apiData && moment(apiData.snippet.publishedAt).fromNow()}
        </p>

        <div>
          <span><img src={like} alt="" />{apiData && value_convertor(apiData.statistics.likeCount)}</span>
          <span><img src={dislike} alt="" /></span>
          <span><img src={share} alt="" />Share</span>
          <span><img src={save} alt="" />Save</span>
        </div>
      </div>

      <hr />

      <div className="publisher">
        <img src={channelData?.snippet?.thumbnails?.default?.url} alt="" />
        <div>
          <p>{apiData?.snippet?.channelTitle}</p>
          <span>{channelData && value_convertor(channelData.statistics.subscriberCount)} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>

      <div className='vid-description'>
        <p>{apiData?.snippet?.description?.slice(0, 250)}</p>
        <hr />
        <h4>{apiData && value_convertor(apiData.statistics.commentCount)} Comments</h4>

        
        {commentData.map((item, index) => {
          const comment = item.snippet.topLevelComment.snippet;
          return (
            <div key={index} className='comment'>
              <img src={comment.authorProfileImageUrl || user_profile} alt="" />
              <div>
                <h4>
                  {comment.authorDisplayName}
                  <span> {moment(comment.publishedAt).fromNow()}</span>
                </h4>
                <p>{comment.textDisplay}</p>
                <div className='comment-action'>
                  <img src={like} alt="" />
                  <span>{comment.likeCount}</span>
                  <img src={dislike} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default PlayVideo;
