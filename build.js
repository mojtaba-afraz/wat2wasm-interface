const fs = require('fs')
const exec = require('child_process').exec;
const dir = './webAssembly'
const files = fs.readdirSync(dir)
const fileNames = []
for (const file of files) {
  fileNames.push(file.split('.')[0])
}
for(file in fileNames){
    console.log("start proccess of : " + fileNames[file]);
    const compiledFile = exec(`npm run WA --name=${fileNames[file]}`,(error, stdout, stderr) => {
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
});
    if(compiledFile){
        console.log('\x1b[36m', `${fileNames[file]}.wasm : completed !` ,'\x1b[0m')
    }
}
