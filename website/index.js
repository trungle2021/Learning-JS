// var courses = ["Java","Python","C#"]
// var numbers = [1,2,3,4,5]
// var arr_obj = [
//   {
//     name:"trung",
//     age:"25",
//     point:"300",
//   },
//   {
//     name:"khoa",
//     age:"25",
//     point:"150",
//   },
//   {
//     name:"hai",
//     age:"20",
//     point:"250",
//   },
//   {
//     name:"bao",
//     age:"15",
//     point:"650",
//   },
//   {
//     name:"vinh",
//     age:"35",
//     point:"60",
//   }
// ]

//map2()
    // Array.prototype.map2 = function(callBack){
      // if(typeof callBack !== 'function'){
      //   throw new TypeError("Expected a function")
      // }
    //   let array = this;
    //   let arrayLength = array.length

    //   for(let i = 0; i < arrayLength; i++){
    //     callBack(array[i],i)
    //   }
    // }

    // var htmls = courses.map2(function(course,index){
    //   console.log(course,index)
    // })
//forEach2()
    // Array.prototype.forEach2 = function(callBack){
    //   var arrayLength = this.length;
    //   for (let index = 0; index < arrayLength; index++) {
    //     callBack(this[index],index)
    //   }
    // }

    // function callBackForEach(ele,index){
    //   console.log(ele,index) 
    // }

    // courses.forEach2(callBackForEach);
//every2()
    // Array.prototype.every2 = function(callBack){
    //   if(typeof callBack !== 'function'){
    //     throw new TypeError("Expected a function")
    //   }
    //   var arrayLength = this.length;
    //   for (let index = 0; index < arrayLength; index++) {
    //     var result =  callBack(this[index],index); 
    //     if(result === false){
    //       return false;
    //     }
    //   }
    //   return true;
    // }

    // function callBackEvery(ele){
    //   return ele > 10
    // }


    // var out = numbers.every2(callBackEvery);
    // console.log(out)
//find2()
    // Array.prototype.find2 = function(callBack){
    //   if(typeof callBack !== 'function'){
    //     throw new TypeError("Expected a function")
    //   }
    //   var arrayLength = this.length;
    //   for (let index = 0; index < arrayLength; index++) {
    //     var result =  callBack(this[index],index); 
    //     if(result){
    //       return this[index];
    //     }
    //   }
    //   return undefined;
    // }

    // var out = arr_obj.find2(obj => obj.point < 70);

    // console.log(out)



// Array.prototype.myMap = function(cb) {
//     if(typeof cb != 'function'){
//       throw new TypeError("Expected a function")
//     }

//     let arrLength = this.length
//     let output = []
//     for (let index = 0; index < arrLength; index++) {
//       let result = cb(this[index],index);
//       output.push(result)
//     }
//     return output
// }

// // Expected results
// const numbers = [1, 2, 3];

// console.log(numbers.myMap(function (number) {
//     return number * 2;
// })) // Output: [2, 4, 6]

// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// })) // Output: [0, 2, 6]

//filter2()
    // Array.prototype.filter2 = function(callBack){
    //   if(typeof callBack !== 'function'){
    //     throw new TypeError("Expected a function")
    //   }
    //   let output = [];
    //   for (var index in this) {
    //     if(this.hasOwnProperty(index)){
    //       var result = callBack(this[index],index,this); 
    //       if(result){
    //         output.push(this[index])
    //       }
    //     }
       
    //   }
    //   return output
    // }

    // var out = numbers.filter2(num => num % 2 === 0);

    // console.log(out)
    // console.log(out.length)
/**
 * Sử dụng các biến đã cho sẵn dưới đây
 */

// var productsListElement = document.getElementsByClassName("products-list")
// console.log(productsListElement)
// var firstProductElement =document.querySelector("div.product")
// console.log(firstProductElement)
// var buttonElements = document.querySelectorAll("button")
// console.log(buttonElements)

// var arr = [
//   ['name', 'Son Dang'], 
//   ['age', 21], 
//   ['address', 'Ha Noi']
// ]


// // Expected results:
// const obj1 = arr.reduce(function(emptyObj,currentObj, index){
//   var key = currentObj[0];
//   var val = currentObj[1];
//   return emptyObj.key = val
// },{})

// console.log(obj1)


// Array.prototype.reduce2 = function(callBack,initialValue){
//   console.log(initialValue)
//   if(typeof callBack != 'function'){
//     throw new TypeError('Expected a function')
//   }

//   let i = 0;
//   var result = initialValue;

//   if(initialValue == undefined){
//     i = 1;
//     result = this[0];
//   }
  
//   for( ;i<this.length;i++){
//      result = callBack(result,this[i],i,this);
//   }

//   return result;
// }

// const result = numbers.reduce2((acc,curr)=>{
//   return acc+curr
// },10)

// console.log(result)

// reduce() sẽ duyệt qua từng element của mảng, truyền 1 hàm callBack và 1 initialValue làm đối số 
// hàm callBack này nhận vào 4 đối số (accumulator, current value, index của value, origin array)
// giá trị trả về mỗi lần gọi hàm callBack sẽ được lưu vào accumulator
// khi duyệt xong tất cả phần tử của mảng, reduce() sẽ trả về giá trị của biến accumulator.


//trường hợp có truyền initialValue
  // giá trị khởi tạo của accumulator sẽ bằng initialValue.
//trường hợp không truyền initialValue
  //giá trị khởi tạo của accumulator sẽ bằng phần tử đầu tiên của mảng (this[0]), lúc đó currentValue sẽ là phần tử thứ 2 của mảng (this[1])

//   var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

//   function render(courses) {
//       var ul = document.querySelector(".courses-list")
//       const html = courses.map(course => {
//            return `<li>${course}</li>`
//       })
//       ul.innerHTML = html.join('')


//   }

//   render(courses)

// var commentsList = [
//     {
//         content : "Xin chao!",
//         user_id : 1
//     },
//     {
//         content : "Hi!",
//         user_id : 2
//     },
//     {
//         content : "khoe Khong!",
//         user_id : 2
//     }
// ]

// var usersList = [
//     {
//         name : "Trung Le",
//         user_id : 1
//     },
//     {
//         name : "Thanh Viet",
//         user_id : 2
//     }
// ]


// var html = '';
// var comment_block = document.querySelector(".comment-block")


// getComments()
//     .then(comments => {
//         var userIds = comments.map(comment => comment.user_id)
//         var users = getUsersByIds(userIds).then(data =>{
//             return data;
//         })
//         console.log(users)
//         return {comments, users} //get users by user_ids
//     })
//     .then(data =>{
//         console.log(data)
//         data.comments.forEach(cm => {
//            var user = data.users.find(user => user.user_id == cm.user_id)
//            html += `<li>${user.name} : ${cm.content}</li>`
//         })
//         comment_block.innerHTML = html

//     })

// getComments()
//     .then(comments => {
//         var userIds = comments.map(comment => comment.user_id)
//         return {userIds,comments} //get users by user_ids
//     })
//     .then(data =>{
//         var users = getUsersByIds(data.userIds).then(user=>{
//             return {user,comments: data.comments}
//         });
//         return users
//     }).then(data =>{
//         console.log(data)
//                 data.comments.forEach(cm => {
//                    var user = data.user.find(user => user.user_id == cm.user_id)
//                    html += `<li>${user.name} : ${cm.content}</li>`
//                 })
//                 comment_block.innerHTML = html
//     })

   

// function getComments(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => resolve(commentsList),1000)
//     })
// }


// function getUsersByIds(ids){
//     var usersByIds = usersList.filter(
//         user => ids.includes(user.user_id)
//     )
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => resolve(usersByIds),1000);
//     })
// }


// function getUserData(userId) {
//     return new Promise((resolve, reject) => {
//       // Perform an asynchronous operation to fetch user data
//       fetch(`https://example.com/users/${userId}`)
//         .then(response => {
//           if (response.ok) {
//             // If the response was successful, parse the data and resolve the Promise
//             response.json().then(data => {
//               if (data.is_active) {
//                 resolve(data);
//               } else {
//                 reject(new Error(`User ${userId} is not active`));
//               }
//             });
//           } else {
//             // If the response was not successful, reject the Promise with an error
//             reject(new Error(`Failed to fetch user data for user ${userId}`));
//           }
//         })
//         .catch(error => {
//           // Handle any other errors that may occur and reject the Promise
//           reject(error);
//         });
//     });
//   }

// var postUrl   = "http://localhost:3000/posts"



// var list_posts_block = document.querySelector("#list-posts")
// var btn_create = document.getElementById("btn-create")



// getPostList(postUrl);
// btn_create.addEventListener('click',function(){
//     let title = document.getElementById("title-input-create").value
//     let author = document.getElementById("author-input-create").value
//     let obj = {
//         title,
//         author
//     }
//     createPost(createPostUrl,obj)
// })
// function createPost(postUrl,data={}){
//     fetch(postUrl,{
//         method:'POST',
//         mode:'cors',
//         cache:'no-cache',
//         headers :{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify(data)
//     })
//         .then(response=>{
//             if(response.ok){
//                 return response.json()

//             }else{
//                 throw new Error('Create New Post Fail')
//             }
//         })
//         .then(data=>{
//             const container = document.createElement('li');
//             let html = `<li>
//                             <h2>${data.id} ${data.title}</h2>
//                             <p>${data.author}</p>
//                         </li>`

//             container.innerHTML = html;     
//             list_posts_block.append(container)
//         })
//         .catch(error=>{
//             console.log(error)
//         })
// }
// function getPostList(postUrl){
   
//         fetch(postUrl)
//             .then(response => {
//                 if(response.ok){
//                    return response.json()
//                 }else{
//                     throw new Error(`Failed to fetch  data`)
//                 }
//             })
//             .then(posts =>{
//                 var html = posts.map(post => {
//                         return `<li>
//                                 <h2>${post.id} ${post.title}</h2>
//                                 <p>${post.author}</p>
//                                 <button id="btn-delete-post-${post.id}" onclick="handleDeleteCourse(${post.id})">Delete</button>
//                             </li>`
//                     })
//                     list_posts_block.innerHTML = html.join('')
//             })
//             .catch(error => {
//                 // Handle any other errors that may occur and reject the Promise
//                 console.log(error);
//               });
// }

// function handleDeleteCourse(postId){
//     fetch(postUrl+'/'+postId,{
//         method:'DELETE',
//         headers:{
//             "Content-Type":"application/json"
//         },        
//     }).then(response => {
//         if(response.ok){
//             return response.json();
//         }else{
//             throw new Error(response.statusText)
//         }
//     }).then(() => {

//        var liParent = document.querySelector("#btn-delete-post-" + postId).parentElement
//        liParent.remove();
//     })
// }

// var array = ["Javascript", "Ruby", "Python"]

// var [a,...rest] = array
// var [b,c] = rest

// console.log(a,b,c) //
// var arr = [
//     ['name', 'Son Dang'],  ['age', 21], ['address', 'Ha Noi']
// ]

// const obj = {}



// use with for loop
// for (let i=0; i<arr.length;i++) {
//     obj[arr[i][0]] = arr[i][1]
// }

//use forEach to get key/value pairs, using destructuring operator
// arr.forEach(item => {
//     [key,value] = item
//     obj[key] = value;
// }) 

//
// console.log(obj)

