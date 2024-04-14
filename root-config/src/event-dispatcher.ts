import { Subject } from "rxjs";

class EventDispatcher {
  private eventSubject: Subject<any>;
  constructor() {
    this.eventSubject = new Subject();
  }

  dispatch(event, data) {
    console.log("Dispatching event", event, data);
    this.eventSubject.next({ event, data });
  }

  listen(event, handler) {
    console.log("Listening for event", event);
    this.eventSubject.subscribe({
      next: (eventData) => {
        if (eventData.event === event) {
          handler(eventData.data);
        }
      },
    });
  }
}

export const eventDispatcher = new EventDispatcher();
