const Card = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.img} alt="img"></img>
      </a>

      <div className="innerDIv">
        <div className="content">
          <a href="/" className="author">
            <h3> {props.name} </h3>
          </a>
          <div className="metadata">
            <span className="date">{props.time}</span>
          </div>
        </div>

        <div>
          <p className="text">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
