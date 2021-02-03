 let x=1;

function addtolist(){  console.log('Is is in use'); 
 const text=document.getElementById('text');
 const todo=text.value;
 if(todo)
 {
 const list=document.createElement('li');
 list.innerText= todo;
 text.value='';
 const btn=document.createElement('BUTTON');
 btn.innerText='Done';
 btn.setAttribute('class','btn btn-success');
 btn.setAttribute('id','button');
 btn.addEventListener('click',taskdone,false);
 list.append(btn);
 list.setAttribute('class','delete');


 document.getElementById('list').appendChild(list);
 
 }
  
}
function taskdone(){ 
 var l=this.parentNode;
 l.remove();
  }


