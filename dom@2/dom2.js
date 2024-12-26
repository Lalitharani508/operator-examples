//add to cart real time example
//edit and delete operations
function addtoCart(){
    console.log("add task clicked")
    let i=document.querySelector("input")
    let ivalue=i.value.trim()


    console.log(ivalue)
    if(ivalue === ""){
        alert("please enter task to proceed ")
        return ;
    }
    let taskItem=document.createElement("div");



    let dataInput=document.createElement("h1")
    dataInput.textContent=ivalue;

    let editButton=document.createElement("button")
    editButton.textContent="Edit"
    editButton.className="edit-btn"


    let dltButtton=document.createElement("button")
    dltButtton.textContent="Delete"
    dltButtton.className="dlt-btn"

    taskItem.append(dataInput,editButton,dltButtton)   
    i.value="" 

    document.body.append(taskItem)


    dltButtton.addEventListener("click",()=>{
        let x=confirm("are you sure to delete the task?")
        if(x){
            taskItem.removeChild(dataInput,editButton,dltButtton)
        }

    })

    editButton.addEventListener("click",()=>{
        let currentText=dataInput.textContent;
        let editText=prompt("edit task here",currentText)
        if(editText!==""&&editText.trim()!==""){
            dataInput.textContent=editText
        }
        else{
            alert("please enter anything")
            prompt("type to edit",currentText)
        }
    })

}