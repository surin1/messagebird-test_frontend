import { eventChannel } from 'redux-saga';

function counter () {
  return eventChannel((emitter) => {
      const interval = setInterval(() => {
        emitter('done')
      }, 10000);
      return () => {
        clearInterval(interval)
      }
    }
  )
}

export default {
  counter
}
