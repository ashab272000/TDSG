import { time } from "console";
import { clearInterval } from "timers";


export class Interval {

    private interval : NodeJS.Timeout;
    private startTime : number = 0;
    private remainingTime : number = 0;
    private intervalTime : number;

    private state : number = 0; //  0 = idle, 1 = running, 2 = paused, 3= resumed

    private callback ;
    constructor(callback, time : number){

        this.callback = callback;
        this.interval = setInterval(this.callback, time);
        this.state = 1;

        this.startTime = new Date().getTime();
        this.intervalTime = time;
    }

    public pause(){
        if(this.state == 1)
        {
            this.remainingTime = this.intervalTime - ((new Date().getTime() - this.startTime) % this.intervalTime);
            clearInterval(this.interval);
            this.state = 2;
        }
    }

    public resume(){
        if(this.state == 2){
            this.state = 1;
            setTimeout(() => {
                this.callback;
                this.interval = setInterval(this.callback, this.intervalTime);
            }, this.remainingTime);
        }
    }

    public stop() {
        this.state = 0;
        clearInterval(this.interval);
    }
}