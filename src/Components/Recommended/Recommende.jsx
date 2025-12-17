import React, { useEffect, useState } from 'react';
import './Recommende.css';
import { API_KEY, value_convertor } from '../../Data';

const Recommende = ({ categoryId }) => {

  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${API_KEY}`;

      const res = await fetch(url);
      const data = await res.json();

      if (data.items) {
        setApiData(data.items);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading videos...</p>;

  return (
    <div className="recommende">
      {apiData.map(item => (
        <div key={item.id} className="side-video-list">
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <div className="vid-info">
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.channelTitle}</p>
            <p>{value_convertor(item.statistics.viewCount)} Views</p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Recommende;
