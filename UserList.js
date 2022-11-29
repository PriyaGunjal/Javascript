function saveToLocalStorage(event){
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    const obj={
        name,
        email
    }
    localStorage.setItem(obj.email,JSON.stringify(obj));
    showNewUserOnScreen(obj);
    axios.post("https://crudcrud.com/api/e58ce919850249b1a3039507735b9bb4/appointmentdata",obj)
.then((res)=>{
    showNewUserOnScreen(res.data);
    //console.log(responce)
})
.catch((error)=>{
    console.log(error)
})
}
window.addEventListener("DOMContentLoaded",()=>{
    const localStorageObj=localStorage;
    const localStorageKeys=Object.keys(localStorageObj);
    axios.get("https://crudcrud.com/api/e58ce919850249b1a3039507735b9bb4/appointmentdata")
    .then((res)=>{
        console.log(res);
        for(let i=0;i<res.data.length;i++)
        {
             showNewUserOnScreen(res.data[i]);
        }
    for(var i=0;i<localStorageKeys.length;i++){
        const key=localStorageKeys[i];
        const userDetailsString=localStorageObj[key];
        const userDetailObj=JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailObj);
    }
}).catch((err)=>{
        console.log(err);
    })
});
    function showNewUserOnScreen(user)
    {
        const parentNode=document.getElementById('listOfUsers');
        const childHTML=`<li> ${user.name} - ${user.email}</li>`;
        parentNode.innerHTML=parentNode.innerHTML+childHTML;
    }
    