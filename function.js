function msgAlert(colorAlert, textAlert){
    
    const alertClose = document.createElement("p");
    alertClose.textContent = 'x';
    alertClose.style.border = 0;
    alertClose.style.borderRadius = "60px";
    alertClose.style.backgroundColor = "#296";
    alertClose.style.color = "white";
    alertClose.style.padding = "10px";
    alertClose.style.display = "inline-block";
    alertClose.style.cursor = "pointer";
    alertClose.addEventListener("click", () => alertMsg.style.display ='none')

    const parafElem = document.createElement("p");
    parafElem.textContent = textAlert;

    const alertMsg = document.createElement("div");
    alertMsg.style.display = "flex";
    alertMsg.style.justifyContent ="space-between";
    alertMsg.style.alignItems = "center";
    alertMsg.style.padding = "20px";
    alertMsg.style.backgroundColor = colorAlert;
    alertMsg.style.color = "white";
    alertMsg.style.margin = "15px 0";
    alertMsg.style.borderRadius = "15px";

    alertMsg.append(parafElem);
    alertMsg.appendChild(alertClose);

    return alertMsg
}
