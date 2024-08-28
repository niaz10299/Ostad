const http = require('http')
const fs = require('fs')


const PORT = 5500


const server = http.createServer((req, res) => {
  
  if (req.url === '/') {
   
    res.end('This is the Home Page')
  } else if (req.url === '/about') {
    
    res.end('This is the About Page')
  } else if (req.url === '/contact') {
    
    res.end('This is the Contact Page')
  } else if (req.url === '/file-write') {
    
    fs.writeFile('demo.txt', 'hello world', (err) => {
      if (err) {
        res.end('Error writing file.')
        console.error('Error writing file:', err)
      } else {
        res.end('File "demo.txt" created with content: "hello world"')
      }
    })
  } else {
    
    res.statusCode = 404  
    res.end('404 Not Found')
  }
})


server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
