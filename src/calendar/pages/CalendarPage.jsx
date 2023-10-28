import { useEffect, useState } from 'react';

import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';


import { localizer, getMessagesEs, getCurrentDate } from '../../helpers';
import { CalendarEvent, CalendarModal, CalendarToolbar, FabAddNew, FabDelete, Navbar } from "../";
import { useUiStore, useCalendarStore, useAuthStore } from '../../hooks';



export const CalendarPage = () => {

  const { user } = useAuthStore();
  const { openDateModal } = useUiStore();
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

  const eventStylesGetter = (event, start, end, isSelected) => {

    const isMyEvent = (user.uid === event.user._id) || (user.uid === event.user._uid);
    const style = {
      backgroundColor: isMyEvent ? '#B427E0' : '#a887e7',
      borderRadius: '5px',
      opacity: '0.8',
      color: 'white',
    };

    return { style };
  };

  const currentDayStyle = {
    background: '#160d36',
    color: 'white',
  };

  const dayPropGetter = (date) => {
    const currentDate = getCurrentDate();
    const isSameDay = date.toDateString() === currentDate.toDateString();

    if (isSameDay) {
      return {
        style: currentDayStyle,
      };
    }
    return {};
  };

  const onDoubleClick = () => {
    openDateModal();
  };

  const onSelect = (event) => {
    setActiveEvent(event)
  };

  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event);
    setLastView(event);
  };

  useEffect(() => {
    startLoadingEvents();
  }, [])

  return (
    <>
      <Navbar />
      <div className="container">
        <Calendar
          culture='es'
          localizer={localizer}
          events={events}
          defaultView={lastView}
          startAccessor="start"
          endAccessor="end"
          style={{
            height: 'calc( 100vh - 100px )',
            background: 'linear-gradient(to right, rgba(11, 9, 34, 1) 0%, 0%, rgba(11, 9, 34, 1) 0%, 0%, rgba(11, 9, 34, 1) 0%, 12.5%, rgba(12, 10, 39, 1) 25%, 37.5%, rgba(28, 32, 65, 1) 50%, 56.25%, rgba(44, 44, 80, 1) 62.5%, 81.25%, rgba(46, 39, 78, 1) 100%)',
            color: 'white'
          }}
          messages={getMessagesEs()}
          eventPropGetter={eventStylesGetter}
          components={{
            event: CalendarEvent,
            toolbar: CalendarToolbar,
          }}
          dayPropGetter={dayPropGetter}
          onDoubleClickEvent={onDoubleClick}
          onSelectEvent={onSelect}
          onView={onViewChanged}
        />
        <CalendarModal />
        <FabAddNew />
        <FabDelete />
      </div>
    </>
  )
}
