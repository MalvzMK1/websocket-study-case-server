import { io } from './http';
import UUIDGenerator from './utils/uuidGenerator';

interface IMessage {
  socket_id: string;
  userName: string;
  message: string;
  sentAt: string;
  id: string;
}

const messages: Array<IMessage> = [];

io.on('connection', (socket) => {
  socket.on('send-message', ({message, userName}: {message: string, userName: string}, callback: (messages: Array<IMessage>) => void) => {
    const messageObj: IMessage = {
      message,
      userName,
      sentAt: new Date().toISOString(),
      socket_id: socket.id,
      id: new UUIDGenerator().generate()
    }

    messages.push(messageObj);
    callback(messages)
  })
})
