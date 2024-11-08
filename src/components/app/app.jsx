import { useDispatch, useSelector } from 'react-redux';
import { clearEvent, getIsEventShow } from '../../services/event-slice';
import { EventForm } from '../event-form/event-form';
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
        <Modal title="Создание события" onClose={() => dispatch(clearEvent())}>
          <EventForm />
        </Modal>
      )}

    </div>
  )
}

export default App
