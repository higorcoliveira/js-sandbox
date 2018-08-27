interface Car {
    speed: string;
    hatch: boolean;

    acelerate(): string;
}

class Palio implements Car {
    speed: string;   
    hatch: boolean;
    acelerate(): string {
        return 'Acelerate to 60km/h';
    }
}

class Corolla implements Car {
    speed: string;    
    hatch: boolean;
    acelerate(): string {
        return 'Acelerate to 120km/h';
    }
}

let aCar: Car = new Palio(); // polimorfism

let someOjb = {
    speed: '50',
    hatch: true,
    acelerate: () => 'Acelerate to 120km/h'
}

aCar = someOjb;  // duck typing