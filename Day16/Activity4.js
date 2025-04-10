//Module pattern
//task6:closure ka use karke ek simple module banao jo items ka collection manage kare.methods implement karo add karna,remove karna,aur list karna
function createItemManager(){
    let items=[];
    function add(item){
        items.push(item);
        console.log(`"${item}" added`);
    }
    function remove(item){
        const index = items.indexOf(item);
        if(index>-1){
            items.splice(index,1);
            console.log(`"${item}" removed`);
        }else{
            console.log("Item not found");
        }
    }
    function list(){
        console.log("Items in collection",items);
    }
    return{
        add,
        remove,
        list
    };
}

const manager = createItemManager();
manager.add("book");
manager.add("pen");
manager.list();
manager.remove("pen");
manager.list();
