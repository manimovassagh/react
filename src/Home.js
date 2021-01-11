import { useState ,useEffect} from "react";
import BlogList from "./BlogList";

//تعریف لیست وبلاگ های ما به صورت یک اری در آبحکت
const Home = () => {
  const [blogs,setBlogs]=useState([
    {title:'Mani Movassagh music',body:'i like iranian classic music',author:'Mani Movassagh',id:'1'},
    {title:'Sahar foto',body:'sahar like fotographi',author:'Sahar Morattab',id:'2'},
    {title:'dental care',body:'i like implants and dental',author:'Mojde',id:'3'}
    
  ]);
  const [name,setName]=useState('Mojde');


  const handleDelete=(id)=>{
    const newBlogs=blogs.filter(blog=>blog.id !==id)
    setBlogs(newBlogs)
    
  }

useEffect(()=>{
console.log('use effect ran');
console.log(name);
},[name])



  //return datas base on arrays and objects methods
  return (
    <div className="home">
    <BlogList handleDelete={handleDelete} blogs={blogs} title="Mani Blog is working!!"/>
    <button onClick={()=>setName('mahshid')}>change name</button>
    <p>{name}</p>
        </div>
  );
 }


 export default Home;
