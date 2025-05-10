const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')

const { sendToQueue } = require('../controllers/queueHandler/queue');


router.get('/',(req,res)=>{
    res.send("your api is called")
})



router.post('/signup',userController.signupHandler)

router.post('/login',userController.loginHandler)



router.post('/task', async (req, res) => {
    const { task } = req.body;
    const userId = req.userId; 
    try {
      await sendToQueue({ userId, task });
      res.status(200).json({ message: 'Task queued' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });



module.exports = router;