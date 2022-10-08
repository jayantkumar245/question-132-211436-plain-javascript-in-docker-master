let string = "";
let buttons = document.getElementsByTagName("button");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            try {
                number = eval(string);
                document.getElementById("result").value = number.toFixed(15);
            } catch (error) {
                string = "";
                string += "Math Error";
                document.getElementById("result").value = string;
            }
        } else if (e.target.innerHTML == "AC") {
            string = "";
            document.getElementById("result").value = string;
        } else if (e.target.innerHTML == "DELETE") {
            string = string.slice(0, -1);
            document.getElementById("result").value = string;
        } else {
            string = string + e.target.innerHTML;
            document.getElementById("result").value = string;
        }
    });
});
