const { createApp } = Vue ;

createApp({
    data() {
        return{
            myArrayMail: [],
        }
    },    
   
    mounted(){

        for (let i = 0; i < 10; i++) {

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail") 
            .then((item) => {

                console.log(item.data.response);
                this.myArrayMail.push(item.data.response);
                
            });
        }

        console.log(this.myArrayMail);
    }

}).mount("#app") 
