import { useDispatch, useSelector } from 'react-redux';
import { getActiveDate, setAсtiveDate } from '../../services/active-date-slice';
import { getFirstDateOfCurrentWeek, getLastDateOfCurrentWeek } from '../../utils/date';
import './header.css';

function Header() {
  const dispatch = useDispatch();
  const activeDate = useSelector(getActiveDate)

  const handleMinusWeek = () => {
    let date = new Date(activeDate);
    date.setDate(date.getDate() - 7);

    dispatch(setAсtiveDate(date))
  }

  const handlePlusWeek = () => {
    let date = new Date(activeDate);
    date.setDate(date.getDate() + 7);

    dispatch(setAсtiveDate(date))
  }

  return (
    <div className="container_header">
      <div className="interval">
        <div className="arrows">
          <ul className="btn-group">
            <li onClick={() => handleMinusWeek()}>&lt;</li>
            <li onClick={() => handlePlusWeek()}>&gt;</li>
          </ul>
        </div>
        <div className="today active" onClick={() => dispatch(setAсtiveDate(new Date()))}>Сегодня</div>
      </div>
      <div className="current_period">
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
  )
}

export default Header
