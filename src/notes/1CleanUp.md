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

but we want to work this increment by one even if our set interval is running only one time

so we need now the clear interval that clear the previous value and set it with the real state value count that we want not the stale cloure value 

that's why we use the cleanup function

dekho ek chij short cut me ye samjho ki jaise hee apne set interval chal raha hai vo state ko change kar raha hai means vo fir se render ho raha hai fir se render ho raha hia to vo firse jo value hai usey change kar raha hai vaha par bhale heee apna use effect na chale to vo ek prakar se count ka stack bana raha hai but jab vo update kar raha hai to prev me kuch aur leke chal raha hai to apan kya kar rahe hai ki usi use effect ke andar ek clean up funciton rakh rahe hai jo call back ke andar jo bhi hai usey control karta hai to ye ek prakar se set interval ko control kar raha hai kasie set interval ki help se aur usey clear kar raha hai taki vo fir se chale aur fir se yadi vo chalat to iska ye means nahi hai ki vo state 0 se change karega but vo chalega to sahi but ek condition ke sath ki vo clear ho gaya hai vo jo usne update karke value rakhi hai uske sath nahi chalega balki vo state ki updated value ke sath chalega aur state ki updated value react control karta hai to ye ek prakar se react ne indirectly clean up funciton aur clear interval ki help se kiya hai

like ek chij aur samajhne ki need hai ki clean up funciton ka use tab bhi hota hia jab hamaara compoentne unmount hota hai like yaha par jab ek compoent dusri bar chala to purani value ko remove kar deta hai to same concept ye samjhna hai ki hamne ek prakar se purana jo interval ne store kar rakha tha as state value ko vo apan ne reset kar diya hai ya remove kar diya hai to vo ab state value ke sath hee jayega next time and chuki currently state value different hai to vo apne ko vaha par state ki previous value dekhne ko mil rahi hai aur interval clear ka means ye hai ki interval ke andar jo bhi data usne store kiya tha usey remove kar do aur fir se chalao like iska ye means nahi hai ki apan ne interval fir se chala diya kyuki interval to chalega har second becauset now is it not in our control

ek chij aur apan isey directly aise bhi bol sakte hai like jo component apan ne clean up funciton ki help se unmount kar diya

ab mujhe clean up funciotn ki puri picture pata chal gayi ye dom ke andar jab apna comopponent un mount hota hai usey ye track karta hai like for example apne pass jo video me example hai timer component vaha par apna componet mount hua true hone par to simple apan ne console pe likh diya ki ye mount hogaya hai ab than apan ne jab clean up funciotn likha aur uske andar console kiya unmount to jaise hee apna funciotn mount hua uske baad vo unmount bhi hoga aur yadi nahi hoga to clean up funciotn usey un mount kar dega kyuki apan ne abhi dependency me kuch paass bhi nahi kiya hai but jab apan hide component pe click karte hai aur chuki usme condition likhi hyui hai ki click than hide than another click than it will show so is prakar se ye work karega but apne ko ek baat aur dhyan rakhni hai jab apan click karenge to ye hatega means ye unmount ho gaya like apan ne clean up funciton likha iska ye matlab bhi hota hia ki jaise heee apna pura componet ho jaye usey unmount kardo aur ye us chij ko track karta hai ki jab apan unmount kare to ye usey show bhi kare ki ye unmount ho gayaa that's why we use the unmount logic inside the clean up funciotn and mount logic in callback funciotn simpele that's it if you daily practice than you remember all these thing simpley
like ye aisa hai ki jab apni state true hai to timer compoent inside the dom but when it complete it automatically remove 
but if we remove by from the button it again remove from dom and it shows the unmount
means here we track the moment of component with clean up funciton 
for exmaple if you go in warehouse for one time and than say only one time means you go than after your work complete to home
so when you go to ware house you mounted to ware hous and you are come from warehouse means you are unmounted by yourself totally by your own means ware house says unmounted 
but if you You were forcibly driven away from there by someone than you also remove from the ware house than it also track the ware house like you had unmounted 
so its track the componet presence in dom 
and that's why in set interval funciton also our componet is unmounted every time after the one state update and complete their work after state update it again mounted that's why we use the cleanup funciton so now the logic is clear it says when our component is un mounted than you clear the interval like interval is working but the data it holds cleared by clean up funciton and it also like when the funciotn is unmouted if you want to do work by react or use effect than it do for yourself 
