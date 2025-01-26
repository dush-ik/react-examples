import React, { createContext, ReactNode, useReducer, Dispatch, useContext } from "react";

import eventsReducer, { Action, eventsData } from "../reducers/events-reducer";
import { Event } from "../types/events";

const EventsContext = createContext<Event[]>([]);
const EventsDispatchContext = createContext<Dispatch<Action> | null>(null);

export default function EventProvider ({ children }: {children: ReactNode}) {
  const [events, dispatch] = useReducer(eventsReducer, eventsData);
  return (
    <EventsContext.Provider value={events}>
      <EventsDispatchContext.Provider value={dispatch}>
        {children}
      </EventsDispatchContext.Provider>
    </EventsContext.Provider>
  )
}

export function useEventDispatch () {
  return useContext(EventsDispatchContext);
}

export function useEvent () {
  return useContext(EventsContext)
}