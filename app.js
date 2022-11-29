const btn = Array.from(document.getElementsByClassName("btn"));
const display = document.querySelector("#display");
const display2 = document.querySelector("#display2");

btn.map(button => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "C":
                display.innerText = "";
                display2.innerText = "";
                break;

            case "←":
                display.innerText = display.innerText.slice(0, -1);
                break;

            case "=":
                let d1 = display.innerText;
                let d2 = display2.innerText
                let finalmath = `${d2}${d1}`;
                display.innerText = eval(finalmath);
                display2.innerText = "";
                break;

            case ".":
                if (display.innerText.includes(".")) {
                    return
                }
                else {
                    display.innerText += e.target.innerText;
                }
                break;

            case "-":
                if (display.innerText.includes("-") && display.innerText.length === 1) {
                    return
                }

                if (display.innerText.includes("-")) {
                    display2.innerText = `(${display.innerText})`;
                    display2.innerText += e.target.innerText;
                    display.innerText = ""
                    return
                }

                else {
                    display.innerText += e.target.innerText;
                }
                break;

            case "+": case "*": case "%": case "/":
                if (display.innerText.length > 0) {
                    display.innerText += e.target.innerText;
                    display2.innerText = display.innerText;
                    display.innerText = ""
                } else {
                    return
                }
                break;

            default:
                display.innerText += e.target.innerText;
        };
    });
});
