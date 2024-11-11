import { useDispatch, useSelector } from 'react-redux';
import { getActiveDate, setAсtiveDate } from '../../services/active-date-slice';
import { getFirstDateOfCurrentWeek, getLastDateOfCurrentWeek } from '../../utils/date';
import styles from './header.module.css';

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
    <div className={styles.container}>
      <div className={styles.interval} >
        <div className={styles.arrows}>
          <ul className={styles.arrows_btn_group}>
            <li className={styles.arrows_btn_group_element} onClick={() => handleMinusWeek()}>&lt;</li>
            <li className={styles.arrows_btn_group_element} onClick={() => handlePlusWeek()}>&gt;</li>
          </ul>
        </div>
        <div
          className={`${styles.today} ${styles.active}`}
          onClick={() => dispatch(setAсtiveDate(new Date()))}>
          Сегодня
        </div>
      </div>
      <div
        className={styles.active_interval}
      >
        {`${getFirstDateOfCurrentWeek(activeDate).getDate()} - ${getLastDateOfCurrentWeek(activeDate)}`}
      </div>

      <div className={styles.period}>
        <ul className={styles.period_btn_group} >
          <li className={styles.period_btn_group_element}>День</li>
          <li className={`${styles.period_btn_group_element} ${styles.active}`}>Неделя</li>
          <li className={styles.period_btn_group_element}>Месяц</li>
        </ul>
      </div>

    </div>
  )
}

export default Header
