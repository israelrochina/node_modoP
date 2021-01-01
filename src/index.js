const express=require('express');
const app=express();
const path=require('path');

//settings
app.set('port',3000);
app.set('views',path.join(__dirname,'views'))  // para dar la direccion
app.engine('html',require('ejs').renderFile);//para que use html
app.set('view engine','ejs');
//midellewares

//routes
app.use(require('./routes/index.js'));

//satatic files
app.use(express.static(path.join(__dirname,'public')));
//listen the server
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));
});