import { useContext } from "react"
import {AuthContext} from '../../src/Context'

const Modal = () => {
  const { handleCloseModal} = useContext(AuthContext)

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalContainer--header">
          <h1>Create a Post</h1>
          <p onClick={handleCloseModal}>X</p>
        </div>

        <form>
          <textarea
            name="post"
            id="post"
            maxLength="1000"
            // value={post}
            // onChange=
            placeholder="whats on your mind"
          ></textarea>
          <button className="modalContainer--btn" onClick={handleCloseModal}>
            Post
          </button>
        </form>
      </div>
    </div>
  )
}

export default Modal 