import { useParams } from "react-router-dom";

const Details = ({imgurl, title, content}) => {
  
const { id } = useParams();
console.log(id)

return (
    <div className="card">
    <p className="card-text">{id}</p>
    <img className="card-img-top" src={imgurl} loading="lazy" alt="mgi"/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
      </div>
  </div>
  )
}

export default Details