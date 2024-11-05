import { useDispatch, useSelector } from 'react-redux';
import { getIsEventShow, setIsEventShow } from '../../services/event-slice';
import { Event } from '../event/event';
import Header from '../header/header';
import Modal from '../modal/modal';
import { Week } from '../week/week';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const isEventShow = useSelector(getIsEventShow)

  return (
    <div className="container">
      <Header />
      <div className="container_body">
        <Week />
      </div>

      {isEventShow && (
        <Modal title="Создание события" onClose={() => dispatch(setIsEventShow(false))}>
          <Event />
        </Modal>
      )}

    </div>
  )
}

export default App
