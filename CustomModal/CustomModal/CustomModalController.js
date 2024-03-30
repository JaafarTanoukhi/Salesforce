({
	handleButtonClicked : function(cmp,evt,help){
		var index = parseInt(evt.getSource().get('v.value'))
		cmp.get('v.footerMeta')[index].onClick(cmp,help.getValues(cmp,evt,help));
	}
})