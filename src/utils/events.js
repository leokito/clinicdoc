
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Atendimento UPA',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Consulta João',
    name: "Carlos",
    age: 57,
    gender: "M",
    start: todayStr + 'T12:00:00',
    end: todayStr + 'T12:30:00',
    status: "open"
  },
  {
      id: createEventId(),
      title: 'Consulta Maria',
      name: "Maria",
      age: 40,
      gender: "F",
      start: todayStr + 'T10:00:00',
      end: todayStr + 'T10:30:00',
      status: "cancelled"
  },
  {
    id: createEventId(),
    title: 'Consulta Mario',
    name: "Mario",
    age: 43,
    gender: "M",
    start: todayStr + 'T13:00:00',
    end: todayStr + 'T13:30:00',
    status: "open"
  },
  {
      id: createEventId(),
      title: 'Consulta Julia',
      name: "Julia",
      age: 35,
      gender: "F",
      start: todayStr + 'T13:30:00',
      end: todayStr + 'T14:00:00',
      status: "open"
  },
  {
    id: createEventId(),
    title: 'Consulta Alex',
    name: "Alex",
    age: 17,
    gender: "M",
    start: todayStr + 'T14:00:00',
    end: todayStr + 'T14:30:00',
    status: "open"
  },
  {
      id: createEventId(),
      title: 'Consulta Tereza',
      name: "Tereza",
      age: 57,
      gender: "F",
      start: todayStr + 'T08:00:00',
      end: todayStr + 'T08:30:00',
      status: "completed"
  },
  {
    id: createEventId(),
    title: 'Consulta Carlos',
    name: "Carlos",
    age: 14,
    gender: "M",
    start: todayStr + 'T09:00:00',
    end: todayStr + 'T09:30:00',
    status: "cancelled"
  },
  {
      id: createEventId(),
      title: 'Consulta Claudia',
      name: "Claudia",
      age: 23,
      gender: "F",
      start: todayStr + 'T09:30:00',
      end: todayStr + 'T10:00:00',
      status: "cancelled"
  },
  

]

export function createEventId() {
  return String(eventGuid++)
}