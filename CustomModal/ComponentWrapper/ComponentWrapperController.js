({
   init : function(cmp,evt,help){

    var componentMeta = cmp.get('v.componentMeta');
    if(componentMeta.attributes)
    componentMeta.attributes[componentMeta.valueFieldName?componentMeta.valueFieldName:'value'] = cmp.getReference('v.value')

    help.createAuraComponent(componentMeta,function(body){
        cmp.set('v.body',body);
    })
   }
})