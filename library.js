function updateState(state){
    if(mousePressedOver(state)){
        gameState = "calculator";
        user_state = state;
    }
}

function detectSelected(appliance, time, appliance_dropdown, y_pos){
    if(appliance.selected === true){
        appliance_dropdown.position(c_x + 225, c_y + y_pos);
        time.position(c_x + 550, c_y + y_pos);
    }
    else{
        appliance_dropdown.position(c_x - 10000, c_y - 10000);
        time.position(c_x - 10000, c_y - 10000);
    }
}

function calculate(stateRate){
    fanAmount = Math.round((((fan_rate * fans_time.value() * fans_quantity_dropdown.value())/1000) * 30)  * stateRate);
    fridgeAmount = Math.round((((fridge_rate * fridge_time.value() * fridge_quantity_dropdown.value())/1000) * 30)  * stateRate);
    bulbAmount = Math.round((((bulbs_rate * bulbs_time.value() * bulbs_quantity_dropdown.value())/1000) * 30)  * stateRate);
    tubelightAmount = Math.round((((tubelights_rate * tubelights_time.value() * tubelights_quantity_dropdown.value())/1000) * 30)  * stateRate);
    TVAmount = Math.round((((TV_rate * TV_time.value() * TV_quantity_dropdown.value())/1000) * 30)  * stateRate);
    totalAmount = fanAmount + fridgeAmount + bulbAmount + tubelightAmount + TVAmount
}