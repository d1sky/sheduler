import { useDispatch, useSelector } from 'react-redux';
import { clearEvent, getIsEventShow } from '../../services/event-slice';
import { EventForm } from '../event-form/event-form';
import Header from '../header/header';
import Modal from '../modal/modal';
import { Week } from '../week/week';
import styles from './app.module.css';


function App() {
  const dispatch = useDispatch()
  const isEventShow = useSelector(getIsEventShow)

  return (
    <div>
      <div className={`${styles.header}`}>
        <Header />
      </div>

      <div className={`${styles.content}`}>
        <Week />
      </div>

      {
        isEventShow && (
          <Modal title="Создание события" onClose={() => dispatch(clearEvent())}>
            <EventForm />
          </Modal>
        )
      }

    </div >
  )
}

export default App
