import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calender.css';

const Calender = () => {
  const [date, setDate] = useState(new Date());
  const [eventInput, setEventInput] = useState('');
  const [events, setEvents] = useState([]);

  const disablePastDate = ({ date }) => {
    const today = new Date();
    return date < today
  };

  const changeDate = (newDate) => setDate(newDate);

  const handleInputChange = (e) => setEventInput(e.target.value);

  const saveEvent = () => {
    if (eventInput.trim() !== '') {
      const newEvent = {
        date: date.toDateString(),
        event: eventInput,
      };
      setEvents([...events, newEvent]);
      setEventInput(''); 
    }
  };
  const deleteEvent=(index)=>{
    setEvents(events.filter((_, i) => i !== index));

  }

  return (
    <div className='calender'>
      <div className='calendar-container'>
        <h1>My Calendar</h1>
        <Calendar 
          value={date}
          onChange={changeDate}
          tileDisabled={disablePastDate}
        />
      </div>
      <div>
        <h3>ADD EVENT</h3>
        <p>{date.toDateString()}</p>
        <input 
          type='text' 
          value={eventInput} 
          onChange={handleInputChange} 
        />
        <button onClick={saveEvent}>Save</button>
        <ul>
          {events.map((event, index) => (
            <li key={index}>{event.date}: {event.event} <i class="fa fa-trash" onClick={() => deleteEvent(index)}></i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calender;
