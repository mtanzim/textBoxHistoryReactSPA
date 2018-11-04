import React from 'react';

const Card = ({id, title, linkUrl, linkMethod, clickAction}) => {

  let cardColClasses = "card mt-4 mb-4";
  if (linkMethod !== "GET" && linkMethod !== "POST" ) {
    linkUrl += id;
  }
  
  // console.log(linkUrl);
  // console.log(linkMethod);
  return (
  <div className={cardColClasses} style={{"width": "18rem"}}>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <h5 className="card-title">{id}</h5>
      <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button onClick={clickAction(linkUrl, linkMethod)} className="btn btn-primary">{linkMethod}</button>
    </div>
  </div>
  )
}

export default Card;