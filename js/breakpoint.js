var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        todos: ["Overview of the Source Panel", "Debugging Js Code", "Setting Breakpoints"],
        todo:""
    },
    methods: {
        addTodo(){
            debugger
            this.todos.push(this.todo);
        },
        editH1() {
            document.querySelector("h1").textContent = "Setting Breakpoints"
        },
        editSubtree() {
            document.querySelector("h1").classList.add('text-danger')         
        },
        unUsedCode() {
             document.querySelector("p").classList.add('text-danger')
         },
        
    },
})
