import io from "socket.io-client"
export const getCPUInfo = () => {
    const socket = io('ws://localhost:5000');
    socket.emit("getCPUInfo");
    
    socket.on('getCPUInfo', (cpuInfo) => {
        console.log(cpuInfo)
    })
    return "";
}
export const tatbluetooth = () => {
    const socket = io('ws://localhost:5000');
    socket.emit("tatbluetooth");
    
    socket.on('tatbluetooth', (statetooth) => {
        console.log(statetooth);
    })
    return "";
}
export const batbluetooth = () => {
    const socket = io('ws://localhost:5000');
    socket.emit("batbluetooth");
    
    socket.on('batbluetooth', (statetooth) => {
        console.log(statetooth);
    })
    return "";
}