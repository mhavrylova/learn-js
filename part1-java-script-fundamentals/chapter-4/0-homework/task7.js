const userPassword = prompt('set new password', '');

do {
    let enterPassword = prompt('enter your created password', '');
    if(userPassword === enterPassword){
        break; // вихід з циклу, якщо умова вірна і перехід до того, що за межами цилу - до alert
    }
} while (true); // постійно повторючийся цикл, допоки не станеться break (6 рядок)
alert('correct password!');
