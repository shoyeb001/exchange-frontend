import { TTickers } from "@/@types/api/TTickers";

export const BASE_URL = "wss://ws.backpack.exchange/"

export class SocketManager {
    private ws: WebSocket;
    private static instance: SocketManager;
    private bufferedMessages: any[] = [];
    private callbacks: any = {};
    private id: number;
    private initialized: boolean = false;

    private constructor() {
        this.ws = new WebSocket(BASE_URL);
        this.bufferedMessages = [];
        this.id = 1;
    }
    public static getInstance() {
        if (!this.instance) {
            this.instance = new SocketManager();
        }
        return this.instance;
    }
    init() {
        this.ws.onopen = () => {
            this.initialized = true;
            this.bufferedMessages.forEach(msg => {
                this.ws.send(JSON.stringify(msg));
            });
            this.bufferedMessages = [];
        }
        this.ws.onmessage = (event) => {
            const message = JSON.parse(event.data);
            const type = message.data.e;
            if (this.callbacks[type]) {
                this.callbacks[type].forEach((callback: any) => {
                    if (type === 'ticket') {
                        const newTicker: TTickers = {
                            symbol: message.data.s,
                            priceChange: message.data.p,
                            priceChangePercent: message.data.P,
                            weightedAvgPrice: message.data.w,
                            prevClosePrice: message.data.x,
                            lastPrice: message.data.c,
                            lastQty: message.data.q,
                            bidPrice: message.data.b,
                            bidQty: message.data.B,
                            askPrice: message.data.a,
                            askQty: message.data.A,
                            openPrice: message.data.o,
                            highPrice: message.data.h,
                            lowPrice: message.data.l,
                            volume: message.data.v,
                            quoteVolume: message.data.q,
                            openTime: message.data.O,
                            closeTime: message.data.C,
                            firstId: message.data.F,
                            lastId: message.data.L,
                            count: message.data.n,
                        }
                        callback(newTicker);
                    }
                    if (type === "depth") {
                        const updatedBids = message.data.b;
                        const updatedAsks = message.data.a;
                        callback({ bids: updatedBids, asks: updatedAsks })
                    }
                })
            }
        }
    }
    sendMessage(message: any) {
        const messageToSend = {
            ...message,
            id: this.id++,
        }
        if (!this.initialized) {
            this.bufferedMessages.push(messageToSend);
            return;
        }
        this.ws.send(JSON.stringify(messageToSend));
    }
    async registerCallback(type: string, callback: any, id: string) {
        this.callbacks[type] = this.callbacks[type] || [];
        this.callbacks[type].push({ callback, id });
    }
    async deRegisterCallback(type: string, id: string) {
        const index = this.callbacks[type].findIndex((callback: any) => callback.id === id);
        if (index !== -1) {
            this.callbacks[type].splice(index, 1);
        }
    }
}