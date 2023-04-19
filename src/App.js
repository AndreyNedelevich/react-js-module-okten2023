import {useEffect, useState,Fragment} from "react";
import PostService from "./service/PostService";
import PostList from "./components/Posts/PostList";
import './App.css';
import LounchList from "./components/Loounches/LounchList";
import UserList from "./components/Users/UserList";

// з jsonplaceholder отримати всі пости в компоненту Posts.js
// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)
//
// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
//
//
// #Advance
//
// вивести всіх юзерів з плайсхолдеру
// в кожного юзера має бути кнопка яка буде показувати пости цього юзера
//
// пости мають виводитись під компонетою Users (в App компоненті)

function App() {
    const [posts,setPosts]=useState([])
    const [launches,setLaunches]=useState([])
    const [users,setUsers]=useState([])



    const getPosts =async ()=>{
        const response = await PostService.getAll('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data);
        setPosts([...posts, ...response.data])
    }

    const getlaunches=async ()=>{
        const response = await PostService.getAll('https://api.spacexdata.com/v3/launches');
        setLaunches([...users, ...response.data])
        console.log(response.data);
    }

    const getUsers=async ()=>{
        const response = await PostService.getAll('https://jsonplaceholder.typicode.com/users');
        setUsers([...users, ...response.data])
        console.log(response.data);
    }

    useEffect(
        ()=>{
            getPosts();
            getlaunches();
            getUsers();
    },[]
    )


  return (
      <Fragment>
          <UserList users={users}/>
        <PostList arrayPosts={posts}/>
        <LounchList arraylaunches={launches}/>
      </Fragment>
  );
}
export default App;


