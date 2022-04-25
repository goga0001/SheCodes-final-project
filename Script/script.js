function SheCodes() {
            let name = prompt("What is your name?");
            let number = prompt("How many packages do you need?");

            if (number <= 10) {
                let h1 = document.querySelector("h1");
                h1.innerHTML = " 🤗 <br / > Thank you" + name + "your order of " + number + " swill be placed";
            } else {
                let h1 = document.querySelector("h1");
                h1.innerHTML = "😱 <br /> Sorry " + name + " , currently we do not have " + number + " packages in stock. Check again later";
            }
        }
        let contactButton = document.querySelector("button");
        contactButton.addEventListener("click", SheCodes);
    
