import React, { useState } from 'react';
import EventsList from './events-list';
import EventForm from './event-form';

export default function EventManage () {

  const [isEventForm, setEventForm] = useState<boolean>(false);

  return (
    <>
      {isEventForm && <EventForm isOpen={isEventForm} closeEventForm={setEventForm}/>}
      <div>
        <button onClick={() => setEventForm(!isEventForm)}>
          Add Event
        </button>
      </div>
      <EventsList />
    </>
  )
}