let App = {  
    data() {  
        return {  
            animal : "Dogs",
        } ;
    },  
    methods : {  
        switchAnimal()
        {
            if(this.animal === "Dogs"){
                this.animal = "Cats";
            }
            else if(this.animal==="Cats"){
                this.animal = "Dogs";
            }
        },
    }  
};
export { App };