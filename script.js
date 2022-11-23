class ElectricLamp {

    constructor(status) {
        this.status = status;
    }

    getStatus() {
        return this. status;
    }

    turnOff() {
        if(this.status === 0) {
            return false
        }
    }
    
    turnOn() {
        if(this.status === 1) {
            return true
        }
    }
}

class SwitchButton {

    constructor(status,lamp) {
        this.status = status;
        this.lamp = lamp;
    }

    getLamp() {
        return this.lamp;
    }

    setLamp() {
        this.lamp = lamp;
    }

    connectToLamp(ElectricLamp) {
        return this.lamp = ElectricLamp;
    }

    switchOff() {
        if(this.lamp.status === 1) {
            alert('Đèn tắt');
            return this.lamp.status = 0;
        }
    }
    switchOn() {
        if(this.lamp.status === 0) {
            alert('Đèn Sáng');
            return this.lamp.status = 1;
        }
    }
}


let lamp_1 = new ElectricLamp(1);
let switch_1 = new SwitchButton(1, lamp_1);

document.write(switch_1.switchOff());
document.write(switch_1.switchOn());