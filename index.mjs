import dgram from 'dgram'
import dotenv from 'dotenv'
dotenv.config()

const socket = dgram.createSocket('udp4')
socket.bind(5500, process.env.IP_ADRESS)
socket.on("message", (msg, info) => {
    console.log(`My server got a datagram ${msg} from ${info.address}:${info.port} `)
})