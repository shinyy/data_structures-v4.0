$(function(){
	function queue(){
		this.datastore=[];
		this.enqueue=function(ele){
			this.datastore.push(ele);
		};
		this.dequeue=function(){
			return this.datastore.shift();
		};
		this.front=function(){
			return this.datastore[0];
		};
		this.back=function(){
			return this.datastore[this.datastore.length-1];
		};
		this.tostring=function(){
			var retstr="";
			for(var i=0;i<this.datastore.length;i++){
				retstr+=this.datastore[i]+"\n";
			};
			return retstr;
		};
		this.empty=function(){
			if(this.datastore.length==0){
				return true;
			}else{
				return false;
			};
		};
		this.count=function(){
			return this.datastore.length;
		};
	};

	function Dancer(name,sex){
		this.name=name;
		this.sex=sex;
	};
	
	var person="F Allison McMillan;M Frank Opitz;M Mason McMillan;M Clayton Ruff;F Cheryl Ferenback;M Raymond Williams;F Jennifer Ingram;M Bryan Frazer;M David Durr;M Danny Martin;F Aurora Adney"
    
    var females=new queue();
    var males=new queue();
    
    function getdancer(){
    	var names=person.split(";")
    	for(var i=0;i<names.length;i++){
    		var dancer=names[i].split(" ");
			var sex=dancer[0];
    		var name=dancer[1];
    		if(sex=="F"){
    			females.enqueue(new Dancer(name,sex));
    		}else{
    			males.enqueue(new Dancer(name,sex))
    		};
    	};
    };
	getdancer();
	
	function dance(femalesd,malesd){
		console.log("现在分配的舞伴是：");
		var partners1,partners2;
		while(!females.empty()&&!males.empty()){
			partners1=females.dequeue();
			partners2=males.dequeue();
			console.log("男方是"+partners1.name+"以及女方是"+partners2.name);
		};
		if(!females.empty())console.log(females.front().name+"代定");
		if(!males.empty())console.log(males.front().name+"代定");
	};
	dance(females,males);
})
	
