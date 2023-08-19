import { useCalendarStore } from "../../hooks"


export const FabDelete = () => {

  const { startDeleteEvent, hasEventSelect } = useCalendarStore();

  const handleDelete = () => {
    startDeleteEvent();
  }

  return (
    <button 
      className="btn btn-danger fab-danger" 
      onClick={handleDelete} 
      style={{ display: hasEventSelect ? '' : 'none' }}>
      <i className="fas fa-trash-alt"></i>
    </button>
  )
}
