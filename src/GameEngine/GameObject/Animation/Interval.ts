

export class Interval {

    private interval : NodeJS.Timeout;
    private startTime : number = 0;
    private remainingTime : number = 0;
    private intervalTime : number;

    private state : number = 0; //  0 = idle, 1 = running, 2 = paused, 3= resumed

    private callback ;
    constructor(callback, time : number){

        this.callback = callback;
        this.intervalTime = time;
    }

    public run(){
        if(this.state == 0)
        {
            this.state = 1;
            this.interval = global.setInterval(this.callback, this.intervalTime);
            this.startTime = new Date().getTime();

        }else{
            this.resume();
        }
    }

    public pause(){
        if(this.state == 1)
        {
            this.remainingTime = this.intervalTime - ((new Date().getTime() - this.startTime) % this.intervalTime);
            global.clearInterval(this.interval);
            //this.interval = null;
            this.state = 2;
            console.log("I am paused");
            console.log(`remaining time: ${this.remainingTime}`);
            console.log(`nodejs.timeout: ${this.interval}`);
        }
    }

    public resume(){
        if(this.state == 2){
            console.log("I have been resumed");
            this.state = 1;
            this.interval = setTimeout(() => {
                this.callback();
                this.interval = setInterval(this.callback, this.intervalTime);
            }, this.remainingTime);
        }
    }

    public stop() {
        this.state = 0;
        clearInterval(this.interval);
    }

    public isPaused(){
        return this.state == 2;
    }
}