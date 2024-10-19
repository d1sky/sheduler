import './task-modal.css'


// eslint-disable-next-line react/prop-types
export const Hour = ({ hour = 0, key }) => {

    return (
        <div className="hour" key={key}>
            <div className="hour_row_head">
                {`${hour}:00`}
            </div>
            <div className="hour_row_body">
                <div className="half first_half"></div>
                <div className="half seconb_half"></div>
            </div>
        </div>)
}

