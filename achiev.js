var gupbought=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var Ugcount=15;
var Ugcost=[4,10,20,35,50,75,111,150,666,1283,1671,2330,2500,5432,12345];
var Ugreq=[0,0,1,1,1,1,2,2,2,3,3,4,4,5,6];
function Bg(num){
	num=num-1;
	if(glitch>=Ugcost[num]&&gupbought[num]==0&&wp>=Ugreq[num]){
		glitch-=Ugcost[num];
		gupbought[num]=1;
	}
	Loadheader();
	Loadmiddle();
}