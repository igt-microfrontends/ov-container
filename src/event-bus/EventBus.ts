type CallbackFunction<T> = (data: T) => void;

interface Eventpos_listeners {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: CallbackFunction<any>[];
}

declare global {
    interface Window {
        pos_listeners: Eventpos_listeners;
    }
}

window.pos_listeners = {};

class EventBus {
    public subscribe<T>(eventType: string, callback: CallbackFunction<T>): () => void {
        console.log(`EventBus: Subscribing to event: ${eventType}`);
        if (!window.pos_listeners[eventType]) {
            window.pos_listeners[eventType] = [];
        }
        window.pos_listeners[eventType].push(callback);

        // Return an unsubscribe function
        return () => {
            window.pos_listeners[eventType] = window.pos_listeners[eventType].filter((cb) => cb !== callback);
        };
    }

    public publish<T>(eventType: string, data: T): void {
        console.log(`EventBus: Publishing event: ${eventType}`);

        if (window.pos_listeners[eventType]) {
            window.pos_listeners[eventType].forEach((callback) => {
                callback(data);
            });
        }
    }

    public unsubscribe(eventType: string): void {
        delete window.pos_listeners[eventType];
    }
}

export const eventBus = new EventBus();
