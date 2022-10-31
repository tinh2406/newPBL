const { getCPUInfo,tatbluetooth,batbluetooth } = require('./loadScript');

const io = require('socket.io')(5000);

// the count state
let count = 0;
io.on('connect', function (socket) {
  // emit to the newly connected client the existing count 
  socket.emit('counter updated', count);

  // we listen for this event from the clients
  socket.on('counter clicked', () => {
    // increment the count
    count++;
    // emit to EVERYONE the updated count
    io.emit('counter updated', count);
  });
  socket.on('getCPUInfo', () => {
    // emit to EVERYONE the updated count
    io.emit('getCPUInfo', getCPUInfo());
  });
  socket.on('tatbluetooth',() => {
    io.emit('tatbluetooth', tatbluetooth());
  })
  socket.on('batbluetooth',() => {
    io.emit('batbluetooth', batbluetooth());
  })
});