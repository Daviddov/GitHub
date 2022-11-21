const Joi = require('joi')
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
];

// app.get(/a/,(req,res)=>{
//     console.log(req.params);

// })


app.route('/courses/:id')
    .delete((req, res) => {
        // look up for the course
        const course = courses.find(c => c.id === parseInt(req.params.id))
        if (!course) return res.status(404).send('The course mot found')
        // delete
        const index = courses.indexOf(course);
        courses.splice(index, 1);
        // return the course
        res.send(course)
    })
    .put((req, res) => {
        // look up for the course
        const course = courses.find(c => c.id === parseInt(req.params.id))
        if (!course) return res.status(404).send('The course mot found')
        // validate
        const { error } = validateCourse(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        // update
        course.name = req.body.name;
        res.send(course)
    })
    .get((req, res) => {
        console.log(req.params);
        console.log(req);
        const course = courses.find(c => c.id === parseInt(req.params.id))
        if (!course) return res.status(404).send('The course mot found')

        res.send(course)
    });


app.post('/courses', (req, res) => {
    const result = validateCourse(req.body)

    if (result.error) {
        //400 bad requset
        res.status(400).send(result.error.details[0].message)
        return
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.get('/', (req, res) => {
    res.send('hello world')
});
app.get('/users', (req, res) => {
    res.send('users')
});
app.get('/users/new', (req, res) => {
    const userId = req.params.userId
    res.send('new user ')
});
app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId

    res.status(500).send('user')
});

const port = process.env.PORT || 3000
app.listen(port, () => { console.log('listen to port ' + port); });

function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })
    return schema.validate({ name: course.name })
}