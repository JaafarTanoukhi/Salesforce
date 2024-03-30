({
    createAuraComponent : function(meta,onSuccess){
        if(!meta.componentName) return;
        
        $A.createComponent(
            meta.componentName,
            meta.attributes,
            function(created,status,errorMessage){
            if(status === "SUCCESS"){
                onSuccess(created);
            }
            else {
                console.error('Dynamic Aura Component Creation Failed\n'+errorMessage)
            }
        })
    }
})