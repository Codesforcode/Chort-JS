function print(){
    console.log("Hello");
}
for(let i=0;i<5;i++){
 setTimeout(print,1000*i);
 
}
// yha phle loop chelgi i =1 ke liye fir call hoga setTimout 1 sec ko fir loop chlegi  i =2 ke liye fir callhoga set time out 2 sec ko aise hi puri loop chlegi fir jb puri loop chl jayegi to phla print console.log hoga jb tk loop khtm nhi hoti jb tk saare function call wait krenge fir ek ke baad ek chlenge