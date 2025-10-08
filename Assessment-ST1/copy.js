const fs = require('fs');

function write(){
    fs.writeFileSync('new.txt',"Node.js File System Working!");
}
write();