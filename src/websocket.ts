import { io } from './http';
import UUIDGenerator from './utils/uuidGenerator';

interface IMessage {
  socket_id: string;
  message: string;
  sentAt: string;
  id: string;
}

const messages: Array<IMessage> = [];

io.on('connection', (socket) => {
  socket.on('send-message', (message: string, callback: (messages: Array<IMessage>) => void) => {
    const messageObj: IMessage = {
      message,
      sentAt: new Date().toISOString(),
      socket_id: socket.id,
      id: new UUIDGenerator().generate()
    }

    messages.push(messageObj);
    callback(messages)
  })

  socket.emit('messages', messages)
})
