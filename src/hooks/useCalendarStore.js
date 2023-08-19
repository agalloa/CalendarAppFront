import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent,  onSetActiveEvent, onUpdateEvent, onDeleteEvent } from "../store";

export const useCalendarStore = () => {

  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent._id) {
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };


  const startDeleteEvent = () => {
    dispatch( onDeleteEvent() );
  }


  return {
    //*Propiedades
    events,
    activeEvent,
    hasEventSelect: !!activeEvent,

    //*Metodos
    startDeleteEvent,
    setActiveEvent,
    startSavingEvent,
  };
};
