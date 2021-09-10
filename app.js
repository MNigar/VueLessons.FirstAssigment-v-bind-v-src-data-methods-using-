const app=Vue.createApp({

data(){
    return{
            name:'Nigar',
            age:5,
            link:'https://egovaze.udemy.com/course/vuejs-2-the-complete-guide/learn/practice/1224486/introduction#overview',
            image:'https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?s=612x612'


    };

},
// methods:{

// }

methods:{
    add(){
        this.message="added"

    },
    outputGoal(){
         
        // if(randomNum>0.1){
        //     return 'big';
        // }
        // else{
        //     return 'little';
        // }
        const nextAge=this.age+5;
        return nextAge;
    },

    randomNum(){
        const randomNum=Math.random() * (1) + 2;
        return randomNum;
    }
   

}
});




app.mount('#assignment');