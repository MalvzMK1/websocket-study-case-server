import {serverHttp} from './http';
import './websocket';

serverHttp.listen(8080, () => console.log('🚀 Server listening at http://192.168.0.10:8080 💜'));
