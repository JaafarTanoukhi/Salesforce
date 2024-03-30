({
	getValues : function(cmp,evt,help){
		var children = cmp.find('component')
		var values = [];
		children.forEach((child)=>{
			var value = child.get('v.value');
			if(value) values.push(value);
		})
		return values;
	}
})