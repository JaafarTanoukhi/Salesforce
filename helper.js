getModal : function (component){
    return {
        title,
        message,
        bodyComponents : [],
        footerButtons : [{label: 'Cancel', onClick : function(modal){modal.destroy()}}],
        callback,

        addBodyComponent : function(componentName,componentAttributes){
            this.bodyComponents.push({componentName : componentName, attributes : componentAttributes});
        },

        addFooterButton : function(buttonLabel, buttonAction){
            this.footerButtons.push({label : buttonLabel, onClick : buttonAction})
        },

        setCallback : function(callback){
            this.callback = callback;
        },

        fire : function(){
            $A.createComponent('c:CustomModal',{
                "title" : this.title,
                "bodyMessage" : this.message,
                "bodyMeta"  : this.bodyComponents,
                "footerMeta" : this.footerButtons
            },
            function(modal,status,errorMessage){
                if(status === 'SUCCESS') {
                    component.set('v.body',[component.get('v.body'),modal])
                    this.callback();
                }
                else alert(errorMessage);
            })
        }
        }
    }