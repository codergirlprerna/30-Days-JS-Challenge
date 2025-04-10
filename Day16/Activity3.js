//Closure in loops
//task5: ek loop jo functions ka ek array banaye har function ko call karne par uska index console me log hona chiye closure ka use karke ensure karo ki correct index log ho har function call pe.
let func=[];
for(let i=0;i<5;i++){
    func.push(function(){
        console.log(i);
    });
}

func[0]();
func[1]();
func[2]();
func[3]();
func[4]();