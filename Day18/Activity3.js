//Queue
//task5:ek queue class implement karna jisme ye methods ho:
/*enqueue:elements ko queue me add karna.
dequeue:front se element remove karna
front-queue ke phle element ko dekhna*/

class queue{
    constructor(){
        this.items=[];
    }

    enqueue(element){
        this.items.push(element);
        console.log(`${element} pushed into the queue`);
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is empty nothing to remove");
            return null;
        }
        const removed = this.items.shift();
        console.log(`${removed} from the queue`);
        return removed;
    }

    front(){
        if(this.isEmpty()){
            console.log("Queue is empty no front element");
        }

        const frontEle=this.items[0];
        console.log(`Front element is:`, frontEle);
        return frontEle;
    }

    isEmpty(){
        return this.items.length==0;
    }

    display(){
        if(this.isEmpty()){
            console.log("Queue is empty nothing to show");
        }else{
            console.log("Queue:",this.items.join("->"));
        }
    }
}

const queueEle = new queue();
queueEle.enqueue(10);
queueEle.enqueue(20);
queueEle.enqueue(30);
queueEle.display();

queueEle.dequeue();
queueEle.display();
queueEle.front();
queueEle.display();

//task6:jo queue bnayi hai uska use karke ek simple printer queue simulate karo jahan print jobs queue mein add hote hai aur fifo order mein process hote hai.

class Queue{
    constructor(){
        this.items=[];
    }

    enqueue(item){
        this.items.push(item);
    }

    dequeue(){
        return this.items.shift();
    }
    isEmpty(){
        return this.items.length===0;
    }
    size(){
        return this.items.length;
    }
    peek(){
        return this.items[0];
    }
}

class PrintJob{
    constructor(name){
        this.name=name;
    }
}

const printerQueue = new Queue();

printerQueue.enqueue(new PrintJob("Job 1 - Resume"));
printerQueue.enqueue(new PrintJob("Job 2 - Report"));
printerQueue.enqueue(new PrintJob("Job 3 - Invoice"));

function processPrintQueue(){
    if(printerQueue.isEmpty()){
        console.log("All print jobs completed");
        return;
    }

    const currentJob = printerQueue.dequeue();
    console.log("Printing", currentJob.name);

    setTimeout(processPrintQueue,1000);

}

processPrintQueue();
