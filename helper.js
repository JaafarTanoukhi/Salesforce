function createModal(component, title, bodyMeta, footerMeta){
    $A.createComponent('c:CustomModal',{
        "title" : title,
        "bodyMeta"  : bodyMeta,
        "footerMeta" : footerMeta
    },
    function(modal,status,errorMessage){
        if(status === 'SUCCESS') {
            component.set('v.body',[component.get('v.body'),modal])
        }
        else alert(errorMessage);
    })
}