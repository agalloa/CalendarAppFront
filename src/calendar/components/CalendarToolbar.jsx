
export const CalendarToolbar = ({ label, onView, onNavigate }) => {
    const toolbarStyles = {
        background: '#160d36',
        color: 'white',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '20px'
    };

    const buttonStyles = {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        margin: '0 5px',
        padding: '5px 10px',
        cursor: 'pointer',
    };

    const buttonToday = {
        border: '1px solid white',
        borderRadius: '10px',
        color: 'white',
        width: '5vw',
        height: '5vh',
    }

    return (
        <div style={toolbarStyles}>
            <div>
                <p style={{ textTransform: 'capitalize' }}>{label}</p>
                <button style={buttonStyles} onClick={() => onNavigate('PREV')}>
                    <i className="fa-solid fa-backward"></i>
                </button>
                <button style={buttonToday} onClick={() => onNavigate('TODAY')}>
                    Hoy
                </button>
                <button style={buttonStyles} onClick={() => onNavigate('NEXT')}>
                    <i className="fa-solid fa-forward"></i>
                </button>
            </div>
            <div>

                <button style={buttonStyles} onClick={() => onView('month')}>
                    Mes
                </button>
                <button style={buttonStyles} onClick={() => onView('week')}>
                    Semana
                </button>
                <button style={buttonStyles} onClick={() => onView('day')}>
                    Día
                </button>
                <button style={buttonStyles} onClick={() => onView('agenda')}>
                    Agenda
                </button>
            </div>
        </div>
    );
}
