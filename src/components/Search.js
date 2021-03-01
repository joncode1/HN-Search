import  { useState, useEffect } from 'react';
import 'bulma/css/bulma.css'
import axios from 'axios';
 
function Search() {
  const [value, changeValue] = useState("");
  
  const onChange = (event) => {
    changeValue(event.target.value);
  };


  const [data, changeData] = useState({ hits: [] });

  useEffect(async () => {
    const result = await axios(
      `https://hn.algolia.com/api/v1/search?query=${value}`,
    );
 
    changeData(result.data);
  });
 
  return (
    <>
    <div className="control"><input className="input" placeholder="..." value={value} onChange={onChange} /></div>
    <hr/>
      <div> <p >Results for: "{value}"</p></div>
      <hr/>
      
      <div className="box"  >
    <ul hidden={value==""}>
      {data.hits.map(article => (
        <li key={article.objectID}>
          <a href={article.url}>{article.title}</a>
          <p> Last Updated: {article.created_at}</p>
        </li>
      ))}
    </ul>
    </div>
    </>
  );
}
 
export default Search;