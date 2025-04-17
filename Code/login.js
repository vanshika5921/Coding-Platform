const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); 


mongoose.connect('mongodb+srv://radhika:tWa6ci*EnaaD2-M@cluster0.scgujtm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));


  const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);



app.get('/register', async (req, res) => {
    const { username, password } = req.query;

    try {
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        res.send('Registration successful!');
    } catch (error) {
        console.error(error);
        res.send('Error: Could not register user.');
    }
});


app.get('/login', async (req, res) => {
    const { username, password } = req.query;

    try {
        const user = await User.findOne({ username });
        if (user) {
            res.send('Login successful!');
        } else {
            res.send('Invalid username or password.');
        }
    } catch (error) {
        console.error(error);
        res.send('Error: Could not log in.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});