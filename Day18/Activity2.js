//stack

//ek stack class implement karna ek stack class banao jisme yeh methods ho:
//push-ek element stack mein dalna
//pop-top element ko stack se htana.
//peek:top element ko dekhna htaye bina


class Stack{
    constructor() {
        this.items=[];
    }

    push(element){
        this.items.push(element);
        console.log(`${element} is pushed to stack`);
    }
    pop(){
        if(this.empty){
            console.log("Stack is empty nothing to delete");
            return null;
        }
        const popped = this.items.pop();
        console.log(`${popped} popped from the stack`);
        return popped;
    }

    peek(){
        if(this.empty){
            console.log("Stack is empty nothing to peek");
            return null;
        }

        const top = this.items[this.items.length-1];
        console.log(`${top} top element from the stack`);
        return top;
    }
    isEmpty(){
        return this.items.length===0;
    }
    display(){
        console.log("Stack",this.items.join("->"));
    }
}

function reversestring(input){
    const stack=new Stack();
    for(let char of input){
        stack.push(char);
    }

    let reversed="";
    while(!stack.isEmpty()){
        reversed+=stack.pop();
    }
    return reversed;
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

stack.display();
stack.pop();
stack.peek();
stack.display();

//task4:String reverse karna stack ke saath jo stack class bnayi hai uska use karke ek string ko reverse karo sab character ko stack mein push karo aur fir pop karke reverse string banao.

const str="prerna";
const reversedStr = reversestring(str);
console.log("Original String: " ,str);
console.log("Reversed string " ,reversedStr);