import React from 'react';
import { useEvent, useEventDispatch } from '../contexts/events-context';
import { Event } from '../types/events';

export default function EventsList () {
  const events: Event[] = useEvent();
  const dispatch = useEventDispatch();

  const deleteEvent = (id: number) => dispatch?.({type: 'DELETE_EVENT', payload: id});

  return (
    <ul>
      {
        events.map((event: Event) => (
          <li key={event.id}>
            {event.name} {event.date}
            {'                     '}
            <button onClick={() => deleteEvent(event.id)}>Delete</button>
          </li>
        ))
      }
    </ul>
  )
}

