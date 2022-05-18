function Profile(){
    let name="pooja";
    return (<div><p>Name:{name}</p></div>)

}
export function Picture(){
    let imageurl='https://th.bing.com/th/id/OIP.ZJormN7TrFZCjK9dnVVyLwHaE8?pid=ImgDet&rs=1';
    return(<div><img src= {imageurl}  width="100" height="100" /></div>)
}
export default Profile;