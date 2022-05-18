import logo from './logo.svg';
import './App.css';
import Profile from './profile';
import {Picture} from './profile';
import ProfileProps, { PictureProps } from './ProfileProps';
import {UserArray, UserArrayMap} from './component/Iterate'
import { User } from './component/User';
import {ButtonPractice} from './component/ButtonPractice'
import { Form } from './component/Form';

function DateFormatter(props){
  return(<div>
    <p><b>Date: </b>{props.date.toLocaleDateString()}</p>
  </div>)
}

function Author(props){
  return (<div>
    <img src ={props.profile.imageURL} width="50" height="50"/>
    <p><b>Author: </b><i>{props.profile.name}</i></p>
  </div>);
}

function Comment(props){
  return (<div>
    <Author profile = {props.profile} />
    <p><b>Comment: </b>{props.text}</p>
    <p><b>Likes: </b>{props.likes}</p>
    <DateFormatter date = {props.date}/>
  </div>);
}
function Button(){
  return(<div>
  <button className='btn btn-primary'>Mybutton</button>
  <button className='btn btn-secondary'>Mybutton</button>
  </div>)
  

}
function SimpleArray(){
  let fruits=["apple","Mango","Grapes","Orange"];
  return(<div>
    <h2>Fruits list:-</h2>
    <ul>
      {fruits.map((fruit,index)=><li key={index}>{fruit}</li>)}
    </ul>
  </div>);
}

function App() {
  let comment1={
    text:"Hi What's up?",
    profile : {
      name:"Sparrow", imageURL:"https://th.bing.com/th/id/OIP.ZJormN7TrFZCjK9dnVVyLwHaE8?pid=ImgDet&rs=1"
    },
    likes:10,
    date:new Date()
  };
  let comment2={
    text:"Learning React",
    profile : {
      name:"React", imageURL:'https://krify.co/wp-content/uploads/2019/06/ReactJS.jpg'
    },
    likes:3,
    date:new Date()
  }
  return (
    <div>
      <h1>This is App Component</h1>
      <Profile />
      <Picture />
     
      <Comment text ={comment1.text} profile={comment1.profile} likes={comment1.likes} date={comment1.date}/>
      <Comment text ={comment2.text} profile={comment2.profile} likes={comment2.likes} date={comment2.date}/>
      <Button />
      <SimpleArray />
      <UserArray />
      <div className = "row">
        <div className = "col-4">
          <SimpleArray />
        </div>
        <div className = "col-4">
          <UserArray />
        </div>
        <div className='container-fluid'>
        <div className = "col-4">
          <SimpleArray />
        </div>
        <div className = "col-8">
          <UserArrayMap />
        </div>
        <User username ="Alex"/>
        <ButtonPractice />
        <Form />
        </div>
      </div>
     </div>
  
     
  );
}

export default App;

