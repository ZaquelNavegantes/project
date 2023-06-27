const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');


const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let consumer = models.Consumer;
let producer = models.Producer;
let product = models.Product;


app.post('/login', async (req, res)=>{
  let response = await consumer.findOne({
  where:{email:req.body.email, password:req.body.password}
  });
  if(response === null){
    let response = await producer.findOne({
    where:{email:req.body.email, password:req.body.password}
    });
    if(response === null){
      res.send(JSON.stringify('error'));
    }
    else{
      res.send(response);
    }  
  }
  else{
    res.send(response);
  }
});

app.post('/RegisterProdutor', async (req, res)=>{
  let response = await producer.create({
    fazenda: req.body.fazenda,
    name: req.body.name,
    email: req.body.email,
    cpf: req.body.cpf,
    password: req.body.password,
    createdAt: new Date(),
    UpdateAt: new Date(),
  });
});

app.post('/RegisterConsumidor', async (req, res)=>{
  let response = await consumer.create({
    name: req.body.name,
    email: req.body.email,
    cpf: req.body.cpf,
    password: req.body.password,
    createdAt: new Date(),
    UpdateAt: new Date(),
  });
});

app.post('/RegisterProduto', async (req, res)=>{
  let response = await product.create({
    name: req.body.name,
    description: req.body.description,
    validity: req.body.validity,
    value: req.body.value,
    createdAt: new Date(),
    UpdateAt: new Date(),
  });
});

let port=process.env.PORT || 3000;
app.listen(port,(req, res)=>{
  //console.log('Servidor rodando');
});

/*
console.log("Listagem consumidor, produtor e produto");

app.get('/read/consumer', async (req, res)=>{
  let read = await consumer.findAll();
  res.send(read);
});

app.get('/read/producer', async (req, res)=>{
  let read = await producer.findAll();
  res.send(read);
});

app.get('/read/product', async (req, res)=>{
  let read = await product.findAll();
  res.send(read);
});

app.get('/product', async (req, res)=>{
  const project = await product.findByPk(1);
  console.log(project.name);
  console.log(project.description);
  console.log(project.validity);
  console.log(project.value);
  console.log("Produto");
})

app.get('/update/product', async (req, res)=>{
  let update = await product.findByPk(1).then((response)=>{
    response.name = 'melancia';
    response.save();
  });
});

app.get('/delete/product', async (req, res)=>{
  product.destroy({
    where:{id:2}
  });
});
*/