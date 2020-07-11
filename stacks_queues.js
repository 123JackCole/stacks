class Stack {

    constructor() {
        this.elements = [];
    }

    push(data) {
        this.elements.push(data);
    }

    pop() {
        this.elements.length === 0 ? "Nothing is on the stack" : this.elements.pop();
    }
    
}



