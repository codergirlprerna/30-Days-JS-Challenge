//Data Structure
//Linked List
//task1:node class implement karna.ek node class bnao jisme do properties ho:value aur next.yeh ek linked list ke element ko represnt karega.

class node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

const node1 = new node(10);
const node2 = new node(20);

node1.next=node2;
console.log("Value of node1: " ,node1.value);
console.log("Value of node2: " , node1.next.value);

//task2:ek linked list class bnao jisme ye methods ho:
/*last mein ek node add karna(Append);
last se ek node hatana (remove)
sare nodes ko display krna*/
class Nodes{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(value){
        this.head=null;
    }

    append(value){
        const newNode = new Nodes(value);
        if(!this.head){
            this.head=newNode;
        }else{
            let current = this.head;
            while(current.next){
                current=current.next;
            }
            current.next=newNode;
        }
    }

    remove(){
        if(!this.head){
            console.log("List is empty");
            return;
        }

        let current=this.head;
        while(current.next.next){
            current=current.next;
        }
        current.next=null;
    }

    display(){
        if(!this.head){
            console.log("List is empty");
            return;
        }else{
            let current=this.head;
            let result="";
            while(current){
                result+=current.value + "->";
                current=current.next;
            }
            result+="null";
            console.log(result);
        }
    }
}

const List = new LinkedList();
List.append(10);
List.append(20);
List.append(30);
List.display();
List.remove(20);
List.display();