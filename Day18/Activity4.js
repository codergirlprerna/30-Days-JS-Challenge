//Binary Tree
//Task7:TreeNode Class banao.ek treenode class implement karo jisme value,left,aur right properties ho .yeh binary tree k node ko represent karega.
class TreeNode{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

const root=new TreeNode(10);
root.left=new TreeNode(5);
root.right=new TreeNode(15);
console.log(root);

//task8:ek binary tree class bnao jisme ye features ho: values ko insert karne ka method , in order traversal ka method jisme nodes ko console mein print kiya ja ske.


class BinaryTree{
    constructor(){
        this.root=null;
    }

insert(value){
    const newNode = new TreeNode(value);
    if(!this.root){
        this.root=newNode;
        return;
    }
    let current = this.root;
    while(true){
        if(value<current.value){
            if(!current.left){
                current.left=newNode;
                break;
            }
            current=current.left;
        }else{
        if(!current.right){
            current.right=newNode;
            break;
        }
        current=current.right;
    }
}
}

inOrderTraversal(node=this.root){
    if(node){
        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
    }
}
}

const tree=new BinaryTree();
tree.insert(5);
tree.insert(15);
tree.insert(10);
tree.insert(7);
console.log("Inorder Traversal:");
tree.inOrderTraversal();