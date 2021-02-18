//#region Калькулятор
var calc = new Vue({
    el: '#calculator',
    data: {
        result: ' ',
        buttons: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        operations: ['.', 'C', '-', '+', '*', '/']
    },
    methods: {
        input(up) {
            if(up === 'C')
                this.reset()
            else
                this.result = this.result + up
        },

        reset() {
            this.result = ' '
        },

        results() {
            this.result = eval(this.result)
        }
    }
})
//#endregion

//#region Todos
var app2 = new Vue({
    el: '#todos',
    data: {
        res: ' ',
        todos: [],
        items: [],
        item: []
    },
    methods:{
        onEnterClick(){
            this.items.push({value: this.res, isVisible: true});
            this.res = ' '
        },

        deleteTodoItem(index) {
            this.items.splice(index, 1);
        }
    }
})
//#endregion



