import React, { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react';
import { useEvent, useEventDispatch } from '../contexts/events-context';
import { month } from '../utils/constants';

interface FormData {
  eventName: string;
  eventDate: string;
}

interface EventFormProps {
  isOpen: boolean;
  closeEventForm: (param: boolean) => void;
}

export default function EventForm ({ isOpen, closeEventForm }: EventFormProps) {
  const [formData, setFormData] = useState<FormData>({eventName: '', eventDate: ''});
  const events = useEvent();
  const dispatch = useEventDispatch();


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const  {eventName, eventDate} = formData;
    const date = new Date(eventDate);
    dispatch?.({
      type: 'ADD_EVENT',
      payload: {
        id: events[events.length - 1].id + 1,
        name: eventName,
        date: `${date.getDate()}/${month[date.getMonth()]}/${date.getFullYear()}`
      }
    });
    closeEventForm(false);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <dialog open={isOpen}>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="eventName"
          value={formData.eventName}
          onChange={handleChange}
        />
        <input
          type="date"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
        />
        <button type='submit'>Add</button>
      </form>
    </dialog>
  )
}