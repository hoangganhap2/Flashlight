let Battery=function () {
    this.setEnergy=function (energy) {
        this.energy=energy;
    };
    this.getEnergy=function () {
        return this.energy;
    };
    this.decreaseEnergy=function () {
        if(this.energy>0){
            this.energy--;
        }
    }

};
let FlashLamp=function () {
    this.setBattery=function (baterry) {
        this.battery=baterry;
    };
    this.getBatteryInfo=function () {
        return this.battery.getEnergy();
    };
    this.light=function () {
        if(this.status){
            alert("Lighting")
        }else {
            alert("Not lighting")
        }
    };
    this.turnOn=function () {
        this.status=true;
    };
    this.turnOff=function () {
        this.status=false;
    }
};
let battery= new Battery();
battery.setEnergy(10);
let flashLamp= new FlashLamp();
flashLamp.setBattery(battery);
document.writeln("Battery info:"+ flashLamp.getBatteryInfo()+"<br/>");
flashLamp.light();
document.writeln("Turn on</br>");
flashLamp.turnOn();
flashLamp.light();
document.writeln("Battery info: "+flashLamp.getBatteryInfo()+"<br/>");
document.writeln("Turn off<br/>");
flashLamp.turnOff();
flashLamp.light();
