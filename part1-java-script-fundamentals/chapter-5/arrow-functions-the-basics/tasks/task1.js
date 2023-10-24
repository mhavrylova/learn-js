const ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Are you agree?",
    () => alert("You are agree"),
    () => alert("You canceled the action")
);

const ask2 = (question, agree, disagree) => confirm(question) ? agree() : disagree()

const ask3 = (question, agree, disagree) => {
    const decision = confirm(question) ? agree : disagree;
    decision();
}

const ask4 = (question, agree, disagree) => {
    if(confirm(question)) {
        agree()
        return
    }
    disagree();
}
