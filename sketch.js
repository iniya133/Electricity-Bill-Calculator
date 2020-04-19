/* ===========================================
FOR THE EXAMINER AND MY REFERENCE WHILE CHECKING/MAKING THIS PROTOTYPE

1. All of the state selection sprites and some variables related to the state-selection
   screen will have a prefix s_
2. All variables will be written in camel case.
3. Each of the state-selection sprites will have a width of 200 pixels, height of
   100 pixels, a vertical distance of 150 pixels and a
   horizontal distance of 250 pixels between them.
4. Each of the "calculator" gameState sprites will have a width of 200 pixels, height of
   100 pixels, a vertical distance of 150 pixels and a
   horizontal distance of 350 pixels between them.
5. All of the "calculator" gameState sprites will have a prefix c_
6. The electricity rates of the states will have a prefix r_

GAMESTATES:
1. "chooseState" gameState will be used to select your state. Under "chooseState",
   there will be 29 sprites with the names of 29 states on them. Pressing any one
   of them will change the gameState to "calculator"
   ===========================================
*/

//Declare the variables for the selection of cities
var s_andhraPradesh,
    s_bihar,
    s_chhattisgarh,
    s_goa,
    s_haryana,
    s_himachalPradesh,
    s_jammuAndKashmir,
    s_karnataka,
    s_kerala,
    s_madhyaPradesh,
    s_maharashtra,
    s_meghalaya,
    s_odisha,
    s_punjab,
    s_rajasthan,
    s_tamilNaidu,
    s_tripura,
    s_uttarPradesh,
    s_uttarakhand,
    s_westBengal

//Declare the variables for the "calculator" gameState
//Declare the appliance variables
var c_fans,
    c_fridge,
    c_bulbs,
    c_tubelights,
    c_TV

//Declare gameState and set it's value
var gameState = "chooseState";

//Make separate variables for startPoints, width and height for the State selection sprites
var s_x = 230;
var s_y = 200;
var s_width = 200;
var s_height = 100;

//Make separate variables for startPoints, width and height for the "calculator" gameState sprites
var c_x = 240;
var c_y = 250;
var c_width = 250;
var c_height = 100;

//Create a variable state to keep track of the state that the user selects
var user_state;

//Maintain two variables for the canvas width and height to change the canvas later
var canvasWidth = 1500;
var canvasHeight = 1200;

//Declare variables for drop down lists for quantity of appliances
var fans_quantity_dropdown;
var fridge_quantity_dropdown;
var bulbs_quantity_dropdown;
var tubelights_quantity_dropdown;
var TV_quantity_dropdown;

//Create the variables for the drop-down lists for the amount of time the appliances are used per day
var fans_time;
var fridge_time;
var bulbs_time;
var tubelights_time
var TV_time;

//Store the electricity rates of each state in a variable
var stateRate;

//Create variables to keep track of the amount in rupees for each appliance
var fanAmount;
var fridgeAmount;
var bulbAmount;
var tubelightAmount;
var TVAmount;

//Create the variables for the number of watts used by each appliance in watts
var fan_rate = 67;
var fridge_rate = 60;
var bulbs_rate = 10;
var tubelights_rate = 35;
var TV_rate = 70;

//Create the final calculate button
var calculateButton;

//Store the final result in a variable
var totalAmount;

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  //Make the sprites for the selection of the states
  //Make the first row
  s_andhraPradesh                   = createSprite(s_x, s_y, s_width, s_height);
  s_andhraPradesh.shapeColor        = 255;
  s_bihar                           = createSprite(s_x + 250, s_y, s_width, s_height);
  s_bihar.shapeColor                = 255;
  s_chhattisgarh                    = createSprite(s_x + 500, s_y, s_width, s_height);
  s_chhattisgarh.shapeColor         = 255;
  s_goa                             = createSprite(s_x + 750, s_y, s_width, s_height);
  s_goa.shapeColor                  = 255;
  s_haryana                         = createSprite(s_x + 1000, s_y, s_width, s_height);
  s_haryana.shapeColor              = 255;

  //Make the second row
  s_himachalPradesh                 = createSprite(s_x, s_y + 150, s_width, s_height);
  s_himachalPradesh.shapeColor      = 255;
  s_jammuAndKashmir                 = createSprite(s_x + 250, s_y + 150, s_width, s_height);
  s_jammuAndKashmir.shapeColor      = 255;
  s_karnataka                       = createSprite(s_x + 500, s_y + 150, s_width, s_height);
  s_karnataka.shapeColor            = 255;
  s_kerala                          = createSprite(s_x + 750, s_y + 150, s_width, s_height);
  s_kerala.shapeColor               = 255;
  s_madhyaPradesh                   = createSprite(s_x + 1000, s_y + 150, s_width, s_height);
  s_madhyaPradesh.shapeColor        = 255;

  //Make the third row
  s_maharashtra                     = createSprite(s_x, s_y + 300, s_width, s_height);
  s_maharashtra.shapeColor          = 255;
  s_meghalaya                       = createSprite(s_x + 250, s_y + 300, s_width, s_height);
  s_meghalaya.shapeColor            = 255;
  s_odisha                          = createSprite(s_x + 500, s_y + 300, s_width, s_height);
  s_odisha.shapeColor               = 255;
  s_punjab                          = createSprite(s_x + 750, s_y + 300, s_width, s_height);
  s_punjab.shapeColor               = 255;
  s_rajasthan                       = createSprite(s_x + 1000, s_y + 300, s_width, s_height);
  s_rajasthan.shapeColor            = 255;

  //Make the fourth row
  s_tamilNaidu                      = createSprite(s_x, s_y + 450, s_width, s_height);
  s_tamilNaidu.shapeColor           = 255;
  s_tripura                         = createSprite(s_x + 250, s_y + 450, s_width, s_height);
  s_tripura.shapeColor              = 255;
  s_uttarPradesh                    = createSprite(s_x + 500, s_y + 450, s_width, s_height);
  s_uttarPradesh.shapeColor         = 255;
  s_uttarakhand                     = createSprite(s_x + 750, s_y + 450, s_width, s_height);
  s_uttarakhand.shapeColor          = 255;
  s_westBengal                      = createSprite(s_x + 1000, s_y + 450, s_width, s_height);
  s_westBengal.shapeColor           = 255;

  //Create the calculator gameState sprites
  //Also keep an extra property selected to keep track whether that appliance is selected by the user or not
  c_fans                            = createSprite(c_x, c_y, c_width, c_height);
  c_fans.shapeColor                 = 200;
  c_fans.selected                   = false;

  c_fridge                          = createSprite(c_x, c_y + 150, c_width, c_height);
  c_fridge.shapeColor               = 200;
  c_fridge.selected                 = false;

  c_bulbs                           = createSprite(c_x, c_y + 300, c_width, c_height);
  c_bulbs.shapeColor                = 200;
  c_bulbs.selected                  = false;

  c_tubelights                      = createSprite(c_x, c_y + 450, c_width, c_height);
  c_tubelights.shapeColor           = 200;
  c_tubelights.selected             = false;

  c_TV                              = createSprite(c_x, c_y + 600, c_width, c_height);
  c_TV.shapeColor                   = 200;
  c_TV.selected                     = false;
  
  //Create drop down lists for quantity of appliances and also add some style
  //Create a drop-down list for fans quantity
  fans_quantity_dropdown = createSelect();
  //Giving a very large value for position so that you can't see the dropdown on chooseState.
  fans_quantity_dropdown.position(-10000, -10000);
  fans_quantity_dropdown.option(1);
  fans_quantity_dropdown.option(2);
  fans_quantity_dropdown.option(3);
  fans_quantity_dropdown.option(4);
  fans_quantity_dropdown.option(5);
  fans_quantity_dropdown.option(6);
  fans_quantity_dropdown.option(7);
  fans_quantity_dropdown.option(8);
  fans_quantity_dropdown.option(9);
  fans_quantity_dropdown.option(10);
  fans_quantity_dropdown.style('width', '250px');
  fans_quantity_dropdown.style('color', 'rgb(0, 0, 255)');
  fans_quantity_dropdown.style('font-size', '25px');
  fans_quantity_dropdown.style('backgroundColor', 'white');

  //Create a drop-down list for fridge quantity
  fridge_quantity_dropdown = createSelect();
  //Giving a very large value for position so that you can't see the dropdown on chooseState.
  fridge_quantity_dropdown.position(-10000, -10000);
  fridge_quantity_dropdown.option(1);
  fridge_quantity_dropdown.option(2);
  fridge_quantity_dropdown.style('width', '250px');
  fridge_quantity_dropdown.style('color', 'rgb(0, 0, 255)');
  fridge_quantity_dropdown.style('font-size', '25px');
  fridge_quantity_dropdown.style('backgroundColor', 'white');

  //Create a drop-down list for bulbs quantity
  bulbs_quantity_dropdown = createSelect();
  //Giving a very large value for position so that you can't see the dropdown on chooseState.
  bulbs_quantity_dropdown.position(-10000, -10000);
  bulbs_quantity_dropdown.option(1);
  bulbs_quantity_dropdown.option(2);
  bulbs_quantity_dropdown.option(3);
  bulbs_quantity_dropdown.option(4);
  bulbs_quantity_dropdown.option(5);
  bulbs_quantity_dropdown.option(6);
  bulbs_quantity_dropdown.option(7);
  bulbs_quantity_dropdown.option(8);
  bulbs_quantity_dropdown.option(9);
  bulbs_quantity_dropdown.option(10);
  bulbs_quantity_dropdown.style('width', '250px');
  bulbs_quantity_dropdown.style('color', 'rgb(0, 0, 255)');
  bulbs_quantity_dropdown.style('font-size', '25px');
  bulbs_quantity_dropdown.style('backgroundColor', 'white');

  //Create a drop-down list for tubelights quantity
  tubelights_quantity_dropdown = createSelect();
  //Giving a very large value for position so that you can't see the dropdown on chooseState.
  tubelights_quantity_dropdown.position(-10000, -10000);
  tubelights_quantity_dropdown.option(1);
  tubelights_quantity_dropdown.option(2);
  tubelights_quantity_dropdown.option(3);
  tubelights_quantity_dropdown.option(4);
  tubelights_quantity_dropdown.option(5);
  tubelights_quantity_dropdown.option(6);
  tubelights_quantity_dropdown.option(7);
  tubelights_quantity_dropdown.style('width', '250px');
  tubelights_quantity_dropdown.style('color', 'rgb(0, 0, 255)');
  tubelights_quantity_dropdown.style('font-size', '25px');
  tubelights_quantity_dropdown.style('backgroundColor', 'white');

  //Create a drop-down list for TV quantity
  TV_quantity_dropdown = createSelect();
  //Giving a very large value for position so that you can't see the dropdown on chooseState.
  TV_quantity_dropdown.position(-10000, -10000);
  TV_quantity_dropdown.option(1);
  TV_quantity_dropdown.option(2);
  TV_quantity_dropdown.option(3);
  TV_quantity_dropdown.style('width', '250px');
  TV_quantity_dropdown.style('color', 'rgb(0, 0, 255)');
  TV_quantity_dropdown.style('font-size', '25px');
  TV_quantity_dropdown.style('backgroundColor', 'white');

  //Create the dropdowns for the amount of time used by every appliance per day and also add some styling
  fans_time = createSelect();
  //Giving a very large value for position so that you can't see the dropdown on choosestate.
  fans_time.position(-10000, -10000);
  fans_time.option(1);
  fans_time.option(2);
  fans_time.option(3);
  fans_time.option(4);
  fans_time.option(5);
  fans_time.option(6);
  fans_time.option(7);
  fans_time.option(8);
  fans_time.option(9);
  fans_time.option(10);
  fans_time.option(11);
  fans_time.option(12);
  fans_time.option(13);
  fans_time.option(14);
  fans_time.option(15);
  fans_time.option(16);
  fans_time.option(17);
  fans_time.option(18);
  fans_time.option(19);
  fans_time.option(20);
  fans_time.option(21);
  fans_time.option(22);
  fans_time.option(23);
  fans_time.option(24);
  fans_time.style('width', '250px');
  fans_time.style('color', 'rgb(0, 0, 255)');
  fans_time.style('font-size', '25px');
  fans_time.style('backgroundColor', 'white');


  fridge_time = createSelect();
  fridge_time.position(-10000, -10000);
  fridge_time.option(1);
  fridge_time.option(2);
  fridge_time.option(3);
  fridge_time.option(4);
  fridge_time.option(5);
  fridge_time.option(6);
  fridge_time.option(7);
  fridge_time.option(8);
  fridge_time.option(9);
  fridge_time.option(10);
  fridge_time.option(11);
  fridge_time.option(12);
  fridge_time.option(13);
  fridge_time.option(14);
  fridge_time.option(15);
  fridge_time.option(16);
  fridge_time.option(17);
  fridge_time.option(18);
  fridge_time.option(19);
  fridge_time.option(20);
  fridge_time.option(21);
  fridge_time.option(22);
  fridge_time.option(23);
  fridge_time.option(24);
  fridge_time.style('width', '250px');
  fridge_time.style('color', 'rgb(0, 0, 255)');
  fridge_time.style('font-size', '25px');
  fridge_time.style('backgroundColor', 'white');


  bulbs_time = createSelect();
  bulbs_time.position(-10000, -10000);
  bulbs_time.option(1);
  bulbs_time.option(2);
  bulbs_time.option(3);
  bulbs_time.option(4);
  bulbs_time.option(5);
  bulbs_time.option(6);
  bulbs_time.option(7);
  bulbs_time.option(8);
  bulbs_time.option(9);
  bulbs_time.option(10);
  bulbs_time.option(11);
  bulbs_time.option(12);
  bulbs_time.option(13);
  bulbs_time.option(14);
  bulbs_time.option(15);
  bulbs_time.option(16);
  bulbs_time.option(17);
  bulbs_time.option(18);
  bulbs_time.option(19);
  bulbs_time.option(20);
  bulbs_time.option(21);
  bulbs_time.option(22);
  bulbs_time.option(23);
  bulbs_time.option(24);
  bulbs_time.style('width', '250px');
  bulbs_time.style('color', 'rgb(0, 0, 255)');
  bulbs_time.style('font-size', '25px');
  bulbs_time.style('backgroundColor', 'white');


  tubelights_time = createSelect();
  tubelights_time.position(-10000, -10000);
  tubelights_time.option(1);
  tubelights_time.option(2);
  tubelights_time.option(3);
  tubelights_time.option(4);
  tubelights_time.option(5);
  tubelights_time.option(6);
  tubelights_time.option(7);
  tubelights_time.option(8);
  tubelights_time.option(9);
  tubelights_time.option(10);
  tubelights_time.option(11);
  tubelights_time.option(12);
  tubelights_time.option(13);
  tubelights_time.option(14);
  tubelights_time.option(15);
  tubelights_time.option(16);
  tubelights_time.option(17);
  tubelights_time.option(18);
  tubelights_time.option(19);
  tubelights_time.option(20);
  tubelights_time.option(21);
  tubelights_time.option(22);
  tubelights_time.option(23);
  tubelights_time.option(24);
  tubelights_time.style('width', '250px');
  tubelights_time.style('color', 'rgb(0, 0, 255)');
  tubelights_time.style('font-size', '25px');
  tubelights_time.style('backgroundColor', 'white');


  TV_time = createSelect();
  TV_time.position(-10000, -10000);
  TV_time.option(1);
  TV_time.option(2);
  TV_time.option(3);
  TV_time.option(4);
  TV_time.option(5);
  TV_time.option(6);
  TV_time.option(7);
  TV_time.option(8);
  TV_time.option(9);
  TV_time.option(10);
  TV_time.option(11);
  TV_time.option(12);
  TV_time.option(13);
  TV_time.option(14);
  TV_time.option(15);
  TV_time.option(16);
  TV_time.option(17);
  TV_time.option(18);
  TV_time.option(19);
  TV_time.option(20);
  TV_time.option(21);
  TV_time.option(22);
  TV_time.option(23);
  TV_time.option(24);
  TV_time.style('width', '250px');
  TV_time.style('color', 'rgb(0, 0, 255)');
  TV_time.style('font-size', '25px');
  TV_time.style('backgroundColor', 'white');

  //Create the final calculate sprite
  calculateButton = createSprite(1300, 100, 350, 100);
  calculateButton.shapeColor = 255;
}

function draw() {
  //console.log(gameState);
  background('#DB8739');

  //Make the calculate button invisible
  calculateButton.visible = false;

  //Make the calculator gameState sprites invisible
  c_fans.visible             = false;
  c_fridge.visible           = false;
  c_bulbs.visible            = false;
  c_tubelights.visible       = false;
  c_TV.visible               = false;

  //If gameState is chooseState then-
  if(gameState === "chooseState"){
    //Make the state-selection sprites visible
    s_andhraPradesh.visible      = true;
    s_bihar.visible              = true;
    s_chhattisgarh.visible       = true;
    s_goa.visible                = true;
    s_haryana.visible            = true;
    s_himachalPradesh.visible    = true;
    s_jammuAndKashmir.visible    = true;
    s_karnataka.visible          = true;
    s_kerala.visible             = true;
    s_madhyaPradesh.visible      = true;
    s_maharashtra.visible        = true;
    s_meghalaya.visible          = true;
    s_odisha.visible             = true;
    s_punjab.visible             = true;
    s_rajasthan.visible          = true;
    s_tamilNaidu.visible         = true;
    s_tripura.visible            = true;
    s_uttarPradesh.visible       = true;
    s_uttarakhand.visible        = true;
    s_westBengal.visible         = true;

    drawSprites();

    //Show the instruction text
    push();
    fill("blue");
    textStyle(BOLD);
    textSize(40);
    text("SELECT YOUR STATE", s_x + 300, s_y - 100);

    //Show the text inside the state-selection boxes
    fill("blue");
    textSize(20);

    //Write the text for the first row
    text("Andhra Pradesh", s_x - 70, s_y);
    text("Bihar", s_x + 220, s_y);
    text("Chhattisgarh", s_x + 440, s_y);
    text("Goa", s_x + 720, s_y);
    text("Haryana", s_x + 960, s_y);

    //Write the text for the second row
    text("Himachal Pradesh", s_x - 85, s_y + 150);
    text("Jammu and Kashmir", s_x + 152, s_y + 150);
    text("Karnataka", s_x + 450, s_y + 150);
    text("Kerala", s_x + 710, s_y + 150);
    text("Madhya Pradesh", s_x + 920, s_y + 150);

    //Write the text for the third row
    text("Maharashtra", s_x - 60, s_y + 300);
    text("Meghalaya", s_x + 200, s_y + 300);
    text("Odisha", s_x + 460, s_y + 300);
    text("Punjab", s_x + 710, s_y + 300);
    text("Rajasthan", s_x + 950, s_y + 300);

    //Write the text for the fourth row
    text("Tamil Naidu", s_x - 60, s_y + 450);
    text("Tripura", s_x + 210, s_y + 450);
    text("Uttar Pradesh", s_x + 435, s_y + 450);
    text("Uttarakhand", s_x + 690, s_y + 450);
    text("West Bengal", s_x + 940, s_y + 450);

    /*If the mouse is pressed over any of the state selection sprites then use the updateState function
    to change the gameState and set the user_state variable to the selected state*/
    updateState(s_andhraPradesh);
    updateState(s_bihar);
    updateState(s_chhattisgarh);
    updateState(s_goa);
    updateState(s_haryana);
    updateState(s_himachalPradesh);
    updateState(s_jammuAndKashmir);
    updateState(s_karnataka);
    updateState(s_kerala);
    updateState(s_madhyaPradesh);
    updateState(s_maharashtra);
    updateState(s_meghalaya);
    updateState(s_odisha);
    updateState(s_punjab);
    updateState(s_rajasthan);
    updateState(s_tamilNaidu);
    updateState(s_tripura);
    updateState(s_uttarPradesh);
    updateState(s_uttarakhand);
    updateState(s_westBengal);
  }

  //Display the text if gameState is "calculator"
  else if(gameState === "calculator"){
    //Make the calculate button visible
    calculateButton.visible = true;

    c_fans.visible             = true;
    c_fridge.visible           = true;
    c_bulbs.visible            = true;
    c_tubelights.visible       = true;
    c_TV.visible               = true;

    //Make the chooseState sprites invisible
    s_andhraPradesh.visible      = false;
    s_bihar.visible              = false;
    s_chhattisgarh.visible       = false;
    s_goa.visible                = false;
    s_haryana.visible            = false;
    s_himachalPradesh.visible    = false;
    s_jammuAndKashmir.visible    = false;
    s_karnataka.visible          = false;
    s_kerala.visible             = false;
    s_madhyaPradesh.visible      = false;
    s_maharashtra.visible        = false;
    s_meghalaya.visible          = false;
    s_odisha.visible             = false;
    s_punjab.visible             = false;
    s_rajasthan.visible          = false;
    s_tamilNaidu.visible         = false;
    s_tripura.visible            = false;
    s_uttarPradesh.visible       = false;
    s_uttarakhand.visible        = false;
    s_westBengal.visible         = false;
    
    //Reposition the drop down lists only if the respective appliance is selected using the detectSelected function for library.js
    detectSelected(c_fans, fans_time, fans_quantity_dropdown, -20);

    detectSelected(c_fridge, fridge_time, fridge_quantity_dropdown, 130);
    
    detectSelected(c_bulbs, bulbs_time, bulbs_quantity_dropdown, 280);

    detectSelected(c_tubelights, tubelights_time, tubelights_quantity_dropdown, 430);
    
    detectSelected(c_TV, TV_time, TV_quantity_dropdown, 580);

    //Change the color of the appliances if they are selected
    if(mousePressedOver(c_fans) && c_fans.selected === false){
      setTimeout(function(){
        c_fans.selected = true;
      }, 100); 
    }
    else if(mousePressedOver(c_fans) && c_fans.selected === true){
      setTimeout(function(){
        c_fans.selected = false;
      }, 100);
    }
    if(c_fans.selected === true){
      c_fans.shapeColor = 255;
    }
    if(c_fans.selected === false){
      c_fans.shapeColor = 200;
    }
    if(c_fans.selected === false){
      fan_rate = 0;
    }
    else{
      fan_rate = 67;
    }
    
    //--------------------------------------------------------------
    if(mousePressedOver(c_fridge) && c_fridge.selected === false){
      setTimeout(function(){
        c_fridge.selected = true;
      }, 100); 
    }
    else if(mousePressedOver(c_fridge) && c_fridge.selected === true){
      setTimeout(function(){
        c_fridge.selected = false;
      }, 100);
    }
    if(c_fridge.selected === true){
      c_fridge.shapeColor = 255;
    }
    if(c_fridge.selected === false){
      c_fridge.shapeColor = 200;
    }
    if(c_fridge.selected === false){
      fridge_rate = 0;
    }
    else{
      fridge_rate = 60;
    }

    //--------------------------------------------------------------
    if(mousePressedOver(c_bulbs) && c_bulbs.selected === false){
      setTimeout(function(){
        c_bulbs.selected = true;
      }, 100); 
    }
    else if(mousePressedOver(c_bulbs) && c_bulbs.selected === true){
      setTimeout(function(){
        c_bulbs.selected = false;
      }, 100);
    }
    if(c_bulbs.selected === true){
      c_bulbs.shapeColor = 255;
    }
    if(c_bulbs.selected === false){
      c_bulbs.shapeColor = 200;
    }
    if(c_bulbs.selected === false){
      bulbs_rate = 0;
    }
    else{
      bulbs_rate = 10;
    }
    
    //--------------------------------------------------------------
    if(mousePressedOver(c_tubelights) && c_tubelights.selected === false){
      setTimeout(function(){
        c_tubelights.selected = true;
      }, 100); 
    }
    else if(mousePressedOver(c_tubelights) && c_tubelights.selected === true){
      setTimeout(function(){
        c_tubelights.selected = false;
      }, 100);
    }
    if(c_tubelights.selected === true){
      c_tubelights.shapeColor = 255;
    }
    if(c_tubelights.selected === false){
      c_tubelights.shapeColor = 200;
    }
    if(c_tubelights.selected === false){
      tubelights_rate = 0;
    }
    else{
      tubelights_rate = 35;
    }

    //--------------------------------------------------------------
    if(mousePressedOver(c_TV) && c_TV.selected === false){
      setTimeout(function(){
        c_TV.selected = true;
      }, 100); 
    }
    else if(mousePressedOver(c_TV) && c_TV.selected === true){
      setTimeout(function(){
        c_TV.selected = false;
      }, 100);
    }
    if(c_TV.selected === true){
      c_TV.shapeColor = 255;
    }
    if(c_TV.selected === false){
      c_TV.shapeColor = 200;
    }
    if(c_TV.selected === false){
      TV_rate = 0;
    }
    else{
      TV_rate = 70;
    }
   
    //--------------------------------------------------------------
    
    //Check the user state and assign the value of stateRate
    if(user_state === s_andhraPradesh){
      stateRate = 7.30;
    }
    else if(user_state === s_bihar){
      stateRate = 4.90;
    }
    else if(user_state === s_chhattisgarh){
      stateRate = 2.20;
    }
    else if(user_state === s_goa){
      stateRate = 3.70;
    }
    else if(user_state === s_haryana){
      stateRate = 5.60;
    }
    else if(user_state === s_himachalPradesh){
      stateRate = 4.00;
    }
    else if(user_state === s_jammuAndKashmir){
      stateRate = 3.30;
    }
    else if(user_state === s_karnataka){
      stateRate = 6.20;
    }
    else if(user_state === s_kerala){
      stateRate = 7.50;
    }
    else if(user_state === s_madhyaPradesh){
      stateRate = 6.80;
    }
    else if(user_state === s_maharashtra){
      stateRate = 8.80;
    }
    else if(user_state === s_meghalaya){
      stateRate = 4.10;
    }
    else if(user_state === s_odisha){
      stateRate = 5.30;
    }
    else if(user_state === s_punjab){
      stateRate = 5.80;
    }
    else if(user_state === s_rajasthan){
      stateRate = 5.30;
    }
    else if(user_state === s_tamilNaidu){
      stateRate = 5.80;
    }
    else if(user_state === s_tripura){
      stateRate = 5.40;
    }
    else if(user_state === s_uttarPradesh){
      stateRate = 3.80;
    }
    else if(user_state === s_uttarakhand){
      stateRate = 3.10;
    }
    else if(user_state === s_westBengal){
      stateRate = 8.00;
    }
    
    //If the mouse is pressed over calculate button then change the gameState
    if(mousePressedOver(calculateButton)){
      gameState = "Result";
    }

    calculate(stateRate);

    drawSprites();

    //Write the heading text
    push();
    fill("blue");
    textSize(35);
    textStyle(BOLD);
    text("Appliance", 160, 100);
    text("Quantity", 500, 100);
    text("Time used(per day)", 750, 100);

    //Write the name of the appliances
    textSize(30);
    textStyle(BOLD);
    text("Fans", c_x - 40, c_y + 10);
    text("Fridge", c_x - 50, c_y + 160);
    text("Bulbs", c_x - 50, c_y + 310);
    text("Tubelights", c_x - 70, c_y + 460);
    text("TV", c_x - 20, c_y + 610);

    //Write the text inside the calculate button
    text("Calculate!", 1230, 110);
  }

  else if(gameState === "Result"){
    textSize(70);
    fill("blue");
    textStyle(BOLD);
    text("Your monthly expenses are " + totalAmount + " Rupees", 100, 200);

    //Give a very large value for position so that the dropdowns are not visible on the screen
    fans_quantity_dropdown.position(-10000, -10000);
    fridge_quantity_dropdown.position(-10000, -10000);
    bulbs_quantity_dropdown.position(-10000, -10000);
    tubelights_quantity_dropdown.position(-10000, -10000);
    TV_quantity_dropdown.position(-10000, -10000);
    fans_time.position(-10000, -10000);
    fridge_time.position(-10000, -10000);
    bulbs_time.position(-10000, -10000);
    tubelights_time.position(-10000, -10000);
    TV_time.position(-10000, -10000);
  }
}