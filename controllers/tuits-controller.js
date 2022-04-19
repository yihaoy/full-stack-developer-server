//import posts from "./tuits.js";
//let tuits = posts;
import tuitsDao from "../tuits-dao.js"

const findAllTuits = async (req, res) => {
  const tuits = await tuitsDao.findAllTuits()
  res.json(tuits);
}

const createTuit = async (req, res) => {
  const newTuit = req.body;
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
  {/*
  newTuit._id = (new Date()).getTime()+'';
  newTuit.postedBy = {};
  newTuit.username = 'user'
  newTuit.handle = 'handle'
  newTuit.title = 'title'
  newTuit.likes = 0;
  newTuit.avatarImage = "../tuiter/images/spacex.jpg";
  tuits = [newTuit, ...tuits];
  tuits.push(newTuit);
  res.json(newTuit); */}
}

const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
  //tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
  res.sendStatus(status);
}


const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  //tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
  res.sendStatus(200);
}


export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findAllTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}
