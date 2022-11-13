const posts = [
    { title: 'Post one', body: 'This is post one' },
    { title: 'Post two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = ''
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

// Promise

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error)
                resolve()
            else {
                reject('Error: something worng')
            }
        }, 2000)
    });
}

// Promise.all

// createPost({title: 'post three', body: 'this post three'})
// .then(getPosts)
// .catch(err => console.log(err))

// const promise1 = Promise.resolve('Hello');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>{
//     setTimeout(resolve, 2000, 'Goodbye')
// });


// fetch

// const promise5 = fetch('http://jbh-9.us-east-2.elasticbeanstalk.com/api/courses').then(res => res.json())

// Promise.all([promise1, promise2, promise3,promise5]).then((values)=>{
//  console.log(values);   
// })

// Async/ Await

// async function init() {
//   await createPost({title: 'post tree', body: ' this three'}) ;

//   getPosts();
// }

// init();



// async / await / fetch

async function fetchCourses() {
   const res = await fetch
   ('http://jbh-9.us-east-2.elasticbeanstalk.com/api/courses');

const {data} = await res.json();

console.log(data);
}

fetchCourses();