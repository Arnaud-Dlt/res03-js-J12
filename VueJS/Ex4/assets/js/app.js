let App = {  
    data() {  
        return {  
            tasks : []
        } ;
    },  
    methods : {  
        
        addTask (i) {  
            let value = event.target.elements.task.value;
            
            if(value===""){
                alert( "Le champ est vide!");
                return false;
            }
            
            this.tasks.push(value);
            event.target.elements.task.value="";
        },
        
        removeTask(i){
            this.tasks[i].done = true;
        }
    }  
};
export { App };