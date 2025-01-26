import { Event } from '../types/events';

export const eventsData: Event[] = [
  {
    id: 0,
    name: 'C++ Conf',
    date: '12/Jan/2026',
  },
  {
    id: 1,
    name: 'JS Conf',
    date: '13/Feb/2026',
  },
  {
    id: 2,
    name: 'Py Conf',
    date: '14/Mar/2026',
  }
];

export type Action = {type: 'ADD_EVENT'; payload: Event} | {type: 'DELETE_EVENT'; payload: number}


export default function eventsReducer (events: Event[], action: Action): Event[] {
  switch(action.type) {
    case 'ADD_EVENT':
      return [
        ...events,
        { ...action.payload }
      ]
    case 'DELETE_EVENT':
      const eventId = action.payload;
      return events.filter(event => event.id !== eventId);

    default:
      return events
  }
}

