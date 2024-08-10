export function createList() {
    let list = [];



    function add(item) {
        list.push(item);



    }

    function remove() {
        list.pop();
        console.log("removed");
    }

    function display() {
        console.log(list);
    }


    return {
        add,
        remove,
        display


    }



}