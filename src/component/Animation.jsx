import mario from '../assets/images/mario.png'
import luigi from '../assets/images/luigi.png'


const Animation = () => {
  return (
    <div className="animation">
      <div className="road">
        <div className="lines"></div>
        <img className="mario" src={mario} alt="mario" />
        <img  className="luigi" src={luigi} alt="luigi" />
      </div>
    </div>
  )
}
export default Animation