export function add(num1, num2) {
    return num1 + num2;
}

export function sub(num1, num2) {
    return num1 - num2;
}
export function div(num1, num2) {
    return num1 / num2;
}

export let person = {
    name: "some name",
    speak: function () {
        console.log("hello");
    }
}

export default function getDate() {
    const date = new Date();
    return date;
}

