import React from 'react';
import EventProvider from './contexts/events-context';
import EventManage from './components/events-manage';

export default function App () {
  return (
    <EventProvider>
      <EventManage />
    </EventProvider>
  );
}