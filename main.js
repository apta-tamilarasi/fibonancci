var n=prompt("which number you want fibonacci");
var a=0, b=1;
document.write(a+" "+b);

for(var i=1; i<=n; i++){
	c=a+b;
	a=b;
	b=c;
	document.write(" "+c);
}