import React, { useEffect, useState } from 'react';
import FullCalendar , {formatDate} from '@fullcalendar/react';
import ptBr from '@fullcalendar/core/locales/pt-br';
import { INITIAL_EVENTS, createEventId } from '../../utils/events';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import Modal from "react-modal";
import interactionPlugin from '@fullcalendar/interaction';
import listDay from '@fullcalendar/list';
import { MainWrapper,  ButtonContainer,  Button,  CloseButton, Container } from './style';
import AppointmentForm from '../../components/FormModal';
import AppointmentDetails from '../../components/DetailsModal';
import { useAppointment } from '../../providers/Appointment';
import { api } from '../../services/api';


const MedicalSchedule = () => {

  const {initial} = useAppointment()

  const [events, setEvents] = useState(initial)

  const customModalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {zIndex: 1000}
  };

  const openForm = () => {
    setSelectedModal("AppointmentForm");
    openModal();
  }

  // Open Modal Function
  const openModal = () => {
    setModalOpen(true);
  };

  // Close Modal Function
  const closeModal = () => {
    setModalOpen(false);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState("");
  const weekendsVisible = useState(false)
  const [currentEvents, setCurrentEvents] = useState([])
  const [selectedEvent] = useState('null')

  const handleEvents = () => {
      api
      .get('/appointments/')
      .then((res)=> setCurrentEvents(res))
      .catch((e) => console.log(e))
    }
     const handleEventClick = (clickInfo) => {
        if(clickInfo.event) {
          // dispatch(search_appointment(clickInfo.event._def.publicId));
          setSelectedModal("AppointmentDetails");
          openModal();
        }
      }

    const handleDateSelect = (selectInfo) => {
        openForm()
        let title = prompt('Adicione um título para consulta')
        let calendarApi = selectInfo.view.calendar
    
        calendarApi.unselect() // clear date selection
    
        if (title) {
          calendarApi.addEvent({
            id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay
          })
        }
      };
    
    function renderEventContent(eventInfo) {
        return (
          <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
          </>
        )
      }

  return (
    <Container>
        <h1>Agenda Médica</h1>
        <MainWrapper>
        <ButtonContainer>
          <Button onClick={openForm}>
            Marcar Consulta
          </Button>
        </ButtonContainer>
        <FullCalendar
        locale={ptBr}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listDay]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay, listDay'
        }}
        initialView= 'timeGridDay'
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={false}
        themeSystem
        eventContent={renderEventContent}
        // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
        events={initial}
        // dateClick={handleDateClick}
        select={handleDateSelect}
        eventClick={handleEventClick}
        eventsSet={handleEvents}
        />
          {modalOpen && (
          <Modal 
            isOpen={true}
            onRequestClose={closeModal}
            ariaHideApp={false}
            style={customModalStyles}
          >
            <CloseButton onClick={closeModal}>X</CloseButton>
            {selectedModal === "AppointmentForm" ? 
              <AppointmentForm closeModal={closeModal}/> : 
              selectedModal === "AppointmentDetails" ? 
              <AppointmentDetails selectedEvent={selectedEvent}/> :
              null
            }
          </Modal>
          )}
          </MainWrapper>
    </Container>
      )
}

export default MedicalSchedule