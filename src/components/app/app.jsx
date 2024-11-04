import { useState } from 'react';
import { getFirstDateOfCurrentWeek, getLastDateOfCurrentWeek } from '../../utils/date';
import { Week } from '../week/week';
import './App.css';

function App() {
  const [activeDate, setAсtiveDate] = useState(new Date());

  const handleMinusWeek = () => {
    let date = new Date(activeDate);
    date.setDate(date.getDate() - 7);

    setAсtiveDate(date)
  }

  const handlePlusWeek = () => {
    let date = new Date(activeDate);
    date.setDate(date.getDate() + 7);

    setAсtiveDate(date)
  }

  return (
    <div className="container">
      <div className="container_header">
        <div className="interval">
          <div className="arrows">
            <ul className="btn-group">
              <li onClick={() => handleMinusWeek()}>&lt;</li>
              <li onClick={() => handlePlusWeek()}>&gt;</li>
            </ul>
          </div>
          <div className="today active" onClick={() => setAсtiveDate(new Date())}>Сегодня</div>
        </div>
        <div className="current_period">
          {/* {`${getCurrentDayNameOfweek(new Date())}`} */}
          {`${getFirstDateOfCurrentWeek(activeDate).getDate()} - ${getLastDateOfCurrentWeek(activeDate)}`}
        </div>
        <div className="period">
          <ul className="btn-group">
            <li >День</li>
            <li className="active">Неделя</li>
            <li>Месяц</li>
          </ul>
        </div>
      </div>
      <div className="container_body">
        <Week activeDate={activeDate} />
      </div>
      {/* <Event /> */}
    </div>
  )
}

export default App
