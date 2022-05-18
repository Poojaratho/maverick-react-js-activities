export function UserItem(props){
    let user=props.user;
    return(<div>
        <p>Hello {user.name},your dob is {user.dob},gender is{user.gender}</p>
    </div>)
}

export function UserArrayMap(){
    let users=[
        {name: "Ajay",dob:"2008-10-22", gender:"Male"},
        {name: "Jennifer",dob:"2009-11-22", gender:"Female"},
        {name: "Charles",dob:"2001-10-10", gender:"Male"}
        
    ];
    return (<div>
        {
            users.map((user,index)=><userItem key ={index} user={user}/>)
        }
    </div>)
}




export function UserArray(){
    let users=[
        {name: "Ajay",dob:"2008-10-22", gender:"Male"},
        {name: "Jennifer",dob:"2009-11-22", gender:"Female"},
        {name: "Charles",dob:"2001-10-10", gender:"Male"}
        
    ];
    return (<div>
        <h2>User list:-</h2>
        <table className = 'table'>
            <thead>
                <tr>
                    <th>Name</th><th>Dob</th><th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user,index)=>
                    <tr key={index}><td>{user.name}</td><td>{user.dob}</td><td>{user.gender}</td></tr>)
                }
            </tbody>
        </table>
    </div>)
}