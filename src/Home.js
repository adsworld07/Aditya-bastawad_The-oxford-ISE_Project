import React from 'react';

function Home() {
  return (
    <div>
      Welcome to the Home Page!
    </div>
  );
}
function fetchData() {
    console.log(fetch("https://jsonplaceholder.typicode.com/users ").then(Response =>{
    console.log(Response);
   })
  
  fetchData()
  
export default Home;