import app from './app';

const port = 3333; 

app.listen(port, ()=> {
    console.log('******************************');
    console.log(`        SERVER STARTED        `);
    console.log(`    Listening on port ${port} `);
    console.log('******************************');
})
