# so in the syntax of use effect the first argument that is callback function return the another function named clean up function
useEffect (()=>{
    // side effect code
    return ()=>{
        // clean up funciton body
    }
}, [dependency]) 
 
# so we talk about that clean up function

so first we write the example for this than we move forward in this note section

so mene complete to kar diya but ye nahi define kiya why i use the set interval into use effect instead of openly 
so the first reason we face yesterday and also it define by video that its not good without use effect even when we write in way like setCount(count+1) and setCount(prev => prev+1) both way is not working

now the one problem we face we write the code inside the use effect like the moment we write setCount(prev=>prev+1) it increases count with two not one 

 jaisa ki yesteday we understood that the set interval is not the part of react it still work without use effect run how , it stored in web api that we seen recently in that video

so one more thing like if the parent use effect is not working the child set interval still working and it is find the value of state value that is our count but it doesn't get to find so its continue with stale closure value that not set the vaule increment by one but 2 

that's why the value with use effect still not working fine